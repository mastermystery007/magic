import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Lesson, lessons } from './src/course';

const PROGRESS_KEY = 'magic-progress-v2';
const BOOKMARK_KEY = 'magic-bookmarks-v1';
type Answers = Record<number, number>;

export default function App() {
  const [selected, setSelected] = useState<Lesson | null>(null);
  const [done, setDone] = useState<number[]>([]);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [query, setQuery] = useState('');
  const [answers, setAnswers] = useState<Answers>({});

  useEffect(() => {
    Promise.all([AsyncStorage.getItem(PROGRESS_KEY), AsyncStorage.getItem(BOOKMARK_KEY)])
      .then(([savedDone, savedBookmarks]) => {
        if (savedDone) setDone(JSON.parse(savedDone));
        if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
      })
      .catch(() => undefined);
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return lessons;
    return lessons.filter((lesson) => [lesson.title, lesson.summary, lesson.level, ...lesson.objectives].join(' ').toLowerCase().includes(needle));
  }, [query]);

  const toggleComplete = async (id: number) => {
    const next = done.includes(id) ? done.filter((value) => value !== id) : [...done, id];
    setDone(next);
    await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
  };

  const toggleBookmark = async (id: number) => {
    const next = bookmarks.includes(id) ? bookmarks.filter((value) => value !== id) : [...bookmarks, id];
    setBookmarks(next);
    await AsyncStorage.setItem(BOOKMARK_KEY, JSON.stringify(next));
  };

  const openLesson = (lesson: Lesson) => {
    setSelected(lesson);
    setAnswers({});
  };

  if (selected) {
    const score = selected.quiz.reduce((total, item, index) => total + (answers[index] === item.answer ? 1 : 0), 0);
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar style="light" />
        <ScrollView contentContainerStyle={styles.page}>
          <View style={styles.topRow}>
            <TouchableOpacity onPress={() => setSelected(null)}><Text style={styles.back}>‹ Course</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => toggleBookmark(selected.id)}><Text style={styles.bookmark}>{bookmarks.includes(selected.id) ? '★ Saved' : '☆ Save'}</Text></TouchableOpacity>
          </View>
          <Text style={styles.kicker}>LESSON {selected.id} · {selected.level.toUpperCase()} · {selected.duration}</Text>
          <Text style={styles.title}>{selected.title}</Text>
          <Text style={styles.lead}>{selected.summary}</Text>
          <Card title="Learning objectives">{selected.objectives.map((item) => <Bullet key={item} text={item} />)}</Card>
          {selected.sections.map((section) => <Card key={section.heading} title={section.heading}>{section.body.map((paragraph) => <Text key={paragraph} style={styles.body}>{paragraph}</Text>)}</Card>)}
          <Card title="Step-by-step practice">{selected.procedure.map((item, index) => <Numbered key={item} number={index + 1} text={item} />)}</Card>
          <Card title="Model presentation">{selected.script.map((item) => <Text key={item} style={styles.quote}>“{item}”</Text>)}</Card>
          <Card title="Skill drills">{selected.drills.map((item) => <Bullet key={item} text={item} />)}</Card>
          <Card title="Troubleshooting">{selected.troubleshooting.map((item) => <View key={item.problem} style={styles.problemBlock}><Text style={styles.problem}>{item.problem}</Text><Text style={styles.body}>{item.response}</Text></View>)}</Card>
          <Card title="Safety and creator boundary">{selected.boundaries.map((item) => <Bullet key={item} text={item} />)}</Card>
          <Card title="Performance assignment"><Text style={styles.body}>{selected.assignment}</Text></Card>
          <Card title="Knowledge check">
            {selected.quiz.map((item, questionIndex) => {
              const chosen = answers[questionIndex];
              return <View key={item.question} style={styles.quizBlock}>
                <Text style={styles.question}>{questionIndex + 1}. {item.question}</Text>
                {item.options.map((option, optionIndex) => {
                  const reveal = chosen !== undefined;
                  const correct = optionIndex === item.answer;
                  return <TouchableOpacity key={option} style={[styles.option, chosen === optionIndex && styles.optionChosen, reveal && correct && styles.optionCorrect]} onPress={() => setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }))}><Text style={styles.optionText}>{option}</Text></TouchableOpacity>;
                })}
                {chosen !== undefined && <Text style={chosen === item.answer ? styles.feedbackCorrect : styles.feedbackWrong}>{chosen === item.answer ? 'Correct. ' : 'Review: '}{item.explanation}</Text>}
              </View>;
            })}
            <Text style={styles.score}>Score: {score}/{selected.quiz.length}</Text>
          </Card>
          <Card title="Media production list">{selected.media.map((item) => <Bullet key={item} text={item} muted />)}</Card>
          <TouchableOpacity style={[styles.button, done.includes(selected.id) && styles.done]} onPress={() => toggleComplete(selected.id)}><Text style={styles.buttonText}>{done.includes(selected.id) ? 'Completed ✓' : 'Mark lesson complete'}</Text></TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.page}>
        <Text style={styles.brand}>ESOTERIC MAGIC</Text>
        <Text style={styles.hero}>Impossible Predictions, Thought Revelations and Haunted Objects</Text>
        <Text style={styles.lead}>A detailed practical course in secret writing, drawing revelations, billets, book tests, psychokinesis, hidden messages, original gimmicks and complete act construction.</Text>
        <View style={styles.progress}>
          <Text style={styles.progressText}>{done.length}/{lessons.length} lessons complete · {bookmarks.length} saved</Text>
          <View style={styles.track}><View style={[styles.fill, { width: `${(done.length / lessons.length) * 100}%` }]} /></View>
        </View>
        <TextInput value={query} onChangeText={setQuery} placeholder="Search titles, methods or objectives…" placeholderTextColor="#888" style={styles.search} />
        {filtered.map((lesson) => <TouchableOpacity key={lesson.id} style={styles.lesson} onPress={() => openLesson(lesson)}>
          <View style={styles.num}><Text style={styles.numText}>{lesson.id}</Text></View>
          <View style={styles.lessonText}>
            <View style={styles.lessonTitleRow}><Text style={styles.lessonTitle}>{lesson.title}</Text>{bookmarks.includes(lesson.id) && <Text style={styles.star}>★</Text>}</View>
            <Text style={styles.lessonSummary} numberOfLines={2}>{lesson.summary}</Text>
            <Text style={styles.meta}>{lesson.duration} · {lesson.level} · {lesson.quiz.length} question quiz</Text>
          </View>
          <Text style={styles.chev}>{done.includes(lesson.id) ? '✓' : '›'}</Text>
        </TouchableOpacity>)}
        <Text style={styles.disclaimer}>For lawful theatrical entertainment. Use safe materials, obtain consent, respect intellectual property and never claim medical, spiritual or financial authority.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) { return <View style={styles.card}><Text style={styles.cardTitle}>{title}</Text>{children}</View>; }
function Bullet({ text, muted = false }: { text: string; muted?: boolean }) { return <Text style={muted ? styles.muted : styles.body}>• {text}</Text>; }
function Numbered({ number, text }: { number: number; text: string }) { return <View style={styles.numbered}><Text style={styles.stepNumber}>{number}</Text><Text style={styles.stepText}>{text}</Text></View>; }

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#110b08' }, page: { padding: 20, paddingBottom: 60 }, topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  brand: { color: '#efb56a', fontSize: 13, fontWeight: '800', letterSpacing: 2, marginTop: 8 }, hero: { color: '#fff', fontSize: 35, fontWeight: '900', lineHeight: 40, marginTop: 10 }, lead: { color: '#d0c6bf', fontSize: 16, lineHeight: 24, marginTop: 10 },
  progress: { backgroundColor: '#201612', padding: 16, borderRadius: 16, marginTop: 22 }, progressText: { color: '#fff', fontWeight: '700' }, track: { height: 7, backgroundColor: '#3c2b23', borderRadius: 9, marginTop: 10, overflow: 'hidden' }, fill: { height: 7, backgroundColor: '#efb56a' },
  search: { backgroundColor: '#201612', color: '#fff', borderRadius: 14, padding: 15, marginVertical: 16 }, lesson: { flexDirection: 'row', gap: 13, alignItems: 'center', backgroundColor: '#1c1310', padding: 15, borderRadius: 16, marginBottom: 10, borderWidth: 1, borderColor: '#38261e' }, lessonText: { flex: 1 }, lessonTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  num: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#3a271c', alignItems: 'center', justifyContent: 'center' }, numText: { color: '#ffd099', fontWeight: '900' }, lessonTitle: { color: '#fff', fontWeight: '800', fontSize: 16, flexShrink: 1 }, lessonSummary: { color: '#b8aaa2', fontSize: 13, lineHeight: 18, marginTop: 4 }, meta: { color: '#8d776b', fontSize: 11, marginTop: 7 }, star: { color: '#ffd099' }, chev: { color: '#efb56a', fontSize: 24 },
  back: { color: '#efb56a', fontSize: 17, fontWeight: '700', marginBottom: 20 }, bookmark: { color: '#ffd099', fontWeight: '800', marginBottom: 20 }, kicker: { color: '#c7955a', fontSize: 12, fontWeight: '800', letterSpacing: 1.2 }, title: { color: '#fff', fontSize: 31, fontWeight: '900', lineHeight: 36, marginTop: 8 },
  card: { backgroundColor: '#1c1310', padding: 17, borderRadius: 16, marginTop: 14, borderWidth: 1, borderColor: '#38261e' }, cardTitle: { color: '#fff', fontSize: 17, fontWeight: '800', marginBottom: 10 }, body: { color: '#d0c6bf', fontSize: 15, lineHeight: 23, marginBottom: 9 }, muted: { color: '#9b8a80', fontSize: 15, lineHeight: 22, marginBottom: 7 },
  quote: { color: '#ffe0b9', fontSize: 15, fontStyle: 'italic', lineHeight: 23, marginBottom: 12, paddingLeft: 12, borderLeftWidth: 3, borderLeftColor: '#a85f2c' }, numbered: { flexDirection: 'row', gap: 12, marginBottom: 10 }, stepNumber: { color: '#110b08', backgroundColor: '#efb56a', width: 24, height: 24, borderRadius: 12, textAlign: 'center', lineHeight: 24, fontWeight: '900' }, stepText: { color: '#d0c6bf', fontSize: 15, lineHeight: 22, flex: 1 },
  problemBlock: { marginBottom: 10 }, problem: { color: '#fff', fontSize: 15, fontWeight: '800', marginBottom: 3 }, quizBlock: { marginBottom: 18 }, question: { color: '#fff', fontWeight: '800', fontSize: 15, lineHeight: 21, marginBottom: 8 }, option: { borderWidth: 1, borderColor: '#4a3328', borderRadius: 12, padding: 12, marginBottom: 7 }, optionChosen: { borderColor: '#efb56a', backgroundColor: '#3a251b' }, optionCorrect: { borderColor: '#69b889' }, optionText: { color: '#ded4cd', lineHeight: 20 }, feedbackCorrect: { color: '#8cddb0', lineHeight: 20, marginTop: 5 }, feedbackWrong: { color: '#e0a5a5', lineHeight: 20, marginTop: 5 }, score: { color: '#fff', fontWeight: '800', marginTop: 3 },
  button: { backgroundColor: '#a85f2c', padding: 17, borderRadius: 15, alignItems: 'center', marginTop: 18 }, done: { backgroundColor: '#345a46' }, buttonText: { color: '#fff', fontWeight: '900', fontSize: 16 }, disclaimer: { color: '#806e64', fontSize: 12, lineHeight: 18, marginTop: 24 }
});
