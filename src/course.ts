export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Lesson = {
  id: number;
  title: string;
  summary: string;
  duration: string;
  level: string;
  objectives: string[];
  sections: { heading: string; body: string[] }[];
  procedure: string[];
  script: string[];
  drills: string[];
  troubleshooting: { problem: string; response: string }[];
  boundaries: string[];
  assignment: string;
  quiz: QuizQuestion[];
  media: string[];
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Constructing an Impossible Effect",
    summary: "Learn to separate effect, method, presentation, convincers, cancellation and the spectator’s final remembered experience.",
    duration: "45–60 min",
    level: "Foundation",
    objectives: [
      "Define what the spectator should believe happened in one sentence.",
      "Identify and cancel the most likely explanations.",
      "Design the reveal around emotion and clarity rather than method complexity."
    ],
    sections: [
      { heading: "Effect before method", body: ["An effect is the simple event the audience remembers: a thought appears in writing, a sealed prediction matches or an object moves without contact. If the effect cannot be described clearly, the routine will feel procedural.", "Begin by writing the impossible sentence. Only then choose a method. This prevents you from presenting a collection of secret moves without a meaningful climax."] },
      { heading: "Convincers and cancellation", body: ["A convincer strengthens one condition: the envelope remained visible, the object was borrowed or the choice appeared unrestricted. Cancellation removes an explanation by timing or structure.", "Do not overprove every condition. Excessive fairness displays can create suspicion. Select the two explanations the audience is most likely to consider and quietly cancel those."] },
      { heading: "The remembered experience", body: ["Audiences compress events. They may remember that the prediction was written before the choice even if it was merely introduced earlier. Ethical performance design uses natural memory without making false claims outside entertainment.", "After rehearsal, ask a viewer what they remember. Their sentence—not your technical description—is the real effect."] }
    ],
    procedure: ["Write the impossible audience-facing sentence.", "List every plausible explanation.", "Rank the three explanations most likely to occur to spectators.", "Add one convincer for the most important condition.", "Use timing or staging to cancel a second explanation.", "Remove unnecessary procedure.", "Test audience memory ten minutes later."],
    script: ["Before you decide, I will leave one folded card here. We will not make it important yet.", "The strange part is not only that the symbol matches. It is that you changed your mind after the card was already beyond my reach."],
    drills: ["Reverse-engineer three tricks into effect, method, convincers and remembered experience.", "Describe each effect in twelve words or fewer.", "Remove one unnecessary fairness statement from every routine."],
    troubleshooting: [
      { problem: "The explanation is longer than the effect.", response: "Reduce the routine to one choice, one impossible condition and one reveal." },
      { problem: "The performer proves every prop ordinary.", response: "Demonstrate only the conditions spectators naturally care about." },
      { problem: "Viewers remember a puzzle rather than magic.", response: "Strengthen motivation, reduce procedure and make the reveal emotionally meaningful." }
    ],
    boundaries: ["Use theatrical deception only in lawful entertainment.", "Do not use magic methods to obtain money, consent or consequential decisions dishonestly.", "Credit sources and distinguish original work from historical principles."],
    assignment: "Take one existing trick and rebuild it around a twelve-word effect statement, two convincers and a final memory test with three spectators.",
    quiz: [
      { question: "The first design step should be:", options: ["Buy a gimmick", "Define the audience-facing effect", "Add more moves", "Write a long script"], answer: 1, explanation: "The effect determines which method and conditions matter." },
      { question: "A convincer should primarily:", options: ["Prove everything", "Strengthen one important condition", "Expose the method", "Lengthen the routine"], answer: 1, explanation: "Focused proof is stronger and less suspicious than overproving." }
    ],
    media: ["Effect-construction animation", "Annotated performance", "Audience-memory worksheet"]
  },
  {
    id: 2,
    title: "Attention, Timing and Misdirection",
    summary: "Control attention naturally through gaze, questions, rhythm, motivation and moments of relaxed focus.",
    duration: "55–75 min",
    level: "Foundation practical",
    objectives: ["Place secret actions on natural offbeats.", "Give every visible movement an innocent purpose.", "Use video review to identify suspicious speed, gaze or tension."],
    sections: [
      { heading: "Attention follows meaning", body: ["Spectators look where the important event appears to be. Your face, an addressed participant, a question or a revealed object can become the focus while a less meaningful action occurs elsewhere.", "Misdirection is not simply making people look away. It is arranging importance so the secret action is not mentally registered as significant."] },
      { heading: "The offbeat", body: ["Attention relaxes after laughter, a completed action, a moment of apparent failure or a revelation. Secret work often belongs just after the audience believes the important moment has passed.", "Do not rush. A sudden speed change announces that something happened. Match the secret action to the ordinary tempo of surrounding actions."] },
      { heading: "Motivation", body: ["Every movement should answer why now. You pick up the envelope to give it away, turn the paper to make it readable or reach into a pocket for a pen.", "If the only reason for a movement is the secret, the audience may sense it even when they do not see the exact method."] }
    ],
    procedure: ["Mark the secret action in your script.", "Identify the audience’s current question at that moment.", "Move the secret action to a natural offbeat.", "Add a legitimate reason for the movement.", "Direct gaze and speech toward the meaningful action.", "Film from audience eye level.", "Remove tension and speed changes."],
    script: ["Hold the envelope for me. Before we open it, tell everyone why you changed your mind.", "Look at the drawing, not at me. Decide whether the first line feels right before I add anything else."],
    drills: ["Perform a false transfer while asking a meaningful question.", "Practise a paper switch at three natural speeds.", "Watch rehearsal video with sound off and mark every suspicious glance."],
    troubleshooting: [
      { problem: "The performer stares at the secret action.", response: "Practise looking at the participant or destination before the hand moves." },
      { problem: "The secret movement is unnaturally fast.", response: "Slow surrounding actions and match their tempo." },
      { problem: "There is no reason to touch the prop.", response: "Change the choreography so the action serves an audience-facing purpose." }
    ],
    boundaries: ["Misdirection should support entertainment, not theft or non-consensual access.", "Avoid distracting people in unsafe environments.", "Protect volunteers from embarrassment when attention is redirected."],
    assignment: "Film a false transfer, billet switch and envelope retrieval. Annotate focus, offbeat, motivation, gaze and tempo for each.",
    quiz: [
      { question: "Misdirection is strongest when it:", options: ["Forces everyone to look away", "Organises meaningful attention", "Uses loud shouting", "Depends on speed"], answer: 1, explanation: "Meaning and timing make secret actions unimportant rather than merely unseen." },
      { question: "An offbeat often occurs:", options: ["Before anything happens", "After a moment feels complete", "Only during darkness", "Only during applause"], answer: 1, explanation: "Attention commonly relaxes after completion, laughter or revelation." }
    ],
    media: ["Attention-map video", "Slow-motion switch breakdown", "Offbeat practice clips"]
  },
  {
    id: 3,
    title: "The Utility Toolkit",
    summary: "Combine forces, glimpses, switches, indexes and multiple outs into reliable original routines.",
    duration: "65–90 min",
    level: "Beginner practical",
    objectives: ["Distinguish force, information acquisition and outcome management.", "Choose the simplest method family for an effect.", "Prepare recovery before performance."],
    sections: [
      { heading: "Five utility families", body: ["A force controls or influences a choice. A glimpse secretly obtains information. A switch exchanges one object for another. An index organises multiple possible outcomes. An out changes the ending when the preferred path fails.", "Many strong routines combine only two families. Complexity increases failure points and makes rehearsal harder."] },
      { heading: "Layering methods", body: ["Use one method to establish information and another to create a physical impossibility. For example, a controlled symbol may later appear inside a sealed location.", "Each method should solve a different problem. Using two methods to accomplish the same task often adds handling without increasing effect."] },
      { heading: "Recovery as design", body: ["Prepare exact-hit, partial-hit and miss paths before performing. An out should feel like a planned presentation, not a desperate explanation.", "The best recovery often changes the claim: from prediction to influence, from exact drawing to shared shape, or from one outcome to a broader coincidence."] }
    ],
    procedure: ["Choose one effect.", "Label the required tasks: control, know, switch or reveal.", "Assign one method family to each task.", "Remove duplicate methods.", "Write exact, partial and miss endings.", "Rehearse pocket and prop locations.", "Run forced failures intentionally."],
    script: ["I may not predict the exact object; I am trying to influence one quality—its shape. Keep that distinction in mind.", "The written word is not exact, but the category and final letter are. Let us use that partial connection rather than pretend otherwise."],
    drills: ["Create a three-out prediction using ordinary envelopes.", "Design one effect with only a force and switch.", "Practise ten deliberate failures without apologising or blaming."],
    troubleshooting: [
      { problem: "The routine uses too many methods.", response: "Map tasks and keep the fewest methods that solve distinct problems." },
      { problem: "The out contradicts the opening claim.", response: "Write the claim broadly enough to support all rehearsed outcomes." },
      { problem: "Props are searched for visibly.", response: "Standardise pocket locations and retrieval choreography." }
    ],
    boundaries: ["Do not use glimpses to access confidential data.", "Do not use switches for fraudulent exchanges.", "Use multiple outcomes only within transparent entertainment contexts."],
    assignment: "Build a three-minute routine using exactly two utility families and three rehearsed outcomes.",
    quiz: [
      { question: "An index primarily:", options: ["Distracts the audience", "Organises several possible outcomes", "Forces a choice psychologically", "Reads body language"], answer: 1, explanation: "Indexes make multiple physical outcomes accessible." },
      { question: "A good out should feel:", options: ["Improvised and defensive", "Consistent with the opening claim", "Like participant failure", "More complicated than the method"], answer: 1, explanation: "Recovery works when it belongs to the routine’s premise." }
    ],
    media: ["Utility-method map", "Three-out performance", "Pocket choreography worksheet"]
  },
  {
    id: 4,
    title: "Swami Gimmick and Secret Writing",
    summary: "Master late writing for numbers, symbols and partial completions while keeping the secret work minimal and motivated.",
    duration: "80–110 min",
    level: "Intermediate technical",
    objectives: ["Understand the strategic value of late writing.", "Develop legible digits and symbols under natural cover.", "Construct original routines using partial pre-writing and multiple outs."],
    sections: [
      { heading: "Why late writing is powerful", body: ["A nail or thumb writer allows information to be completed after it is apparently committed. The audience remembers the prediction as finished earlier, while the performer secretly adds a short detail.", "The strongest use is not writing a long sentence. Pre-write almost everything and secretly add one digit, letter, symbol or mark."] },
      { heading: "Handling principles", body: ["Use a firm writing surface, stable paper and a body position that blocks direct sight without looking defensive. The writing hand should already have a reason to hold or steady the card.", "Secret writing belongs during attention on the participant, a spoken confirmation or the action of positioning the prediction for display."] },
      { heading: "Legibility and reveal", body: ["Practise strokes before full characters. Digits should be distinguishable under pressure. Use formats tolerant of imperfect writing: bold numbers, simple symbols, check marks or one final letter.", "Reveal from a distance first, then allow closer examination only when the prop and method support it. Do not draw attention to handwriting quality before the effect lands."] }
    ],
    procedure: ["Choose a safe, commercially obtained writer or create only an original non-proprietary practice aid.", "Practise straight, curved and diagonal strokes.", "Progress through digits 0–9.", "Add five simple symbols.", "Pre-write the majority of a prediction.", "Place the secret addition on a motivated offbeat.", "Reveal without returning attention to the writing hand."],
    script: ["I committed to most of this before you spoke. The final part was the one detail I could not logically know—the last digit.", "Name any two-digit number. Change it if it feels too obvious. I will not touch the card again after you hold it."],
    drills: ["Complete three pages of digit tracing using minimal wrist movement.", "Write random digits while maintaining eye contact with a camera.", "Perform Final Digit, Birthday Echo and Symbol in the Dark as original routines."],
    troubleshooting: [
      { problem: "Writing is too large or illegible.", response: "Use larger display format, slower micro-movements and fewer characters." },
      { problem: "The hand position looks cramped.", response: "Redesign how the paper is held so the same grip is natural before and after writing." },
      { problem: "The audience watches the card.", response: "Move the writing moment to a spoken confirmation or participant reaction." }
    ],
    boundaries: ["Do not expose proprietary gimmick construction from commercial products.", "Use secret writing for entertainment, not document alteration or fraud.", "Credit nail-writer and swami traditions in further-study notes."],
    assignment: "Perform three original late-writing routines using only one secretly added character and score legibility, timing and audience focus.",
    quiz: [
      { question: "The safest design usually secret-writes:", options: ["A paragraph", "One short detail", "The entire script", "A signature"], answer: 1, explanation: "Minimal additions improve reliability and naturalness." },
      { question: "The writing moment should occur when:", options: ["Everyone studies the card", "Attention is meaningfully elsewhere", "The room is empty", "The participant is confused"], answer: 1, explanation: "Natural attention and motivation protect the action." }
    ],
    media: ["Macro writing demonstration", "Printable digit drills", "Three original routine performances"]
  },
  {
    id: 5,
    title: "Psychic Sketch Artist",
    summary: "Create original drawing revelations using controlled choice, information acquisition and progressive sketching without cloning commercial products.",
    duration: "80–110 min",
    level: "Intermediate",
    objectives: ["Design a safe drawing universe.", "Compare force, glimpse and impression-based structures.", "Reveal orientation, geometry and features before the exact image."],
    sections: [
      { heading: "Three original pathways", body: ["A drawing may be controlled through a restricted choice, learned through a justified glimpse or transferred through an original impression system. Each pathway has different reliability and handling needs.", "Commercial routines and gimmicks may inspire the desired effect, but their proprietary construction and exact handling should not be reproduced. Build from general principles and original prototypes."] },
      { heading: "Drawing instructions", body: ["Ask for one simple recognisable object, no words, no numbers and no detailed scene. The participant can draw in a way that remains personally meaningful while keeping the method practical.", "Prepare for common categories: living object, tool, transport, symbol, building, food and nature."] },
      { heading: "Progressive revelation", body: ["Start with page orientation and dominant direction. Add shape, category, relationship between parts and one distinguishing feature. Allow the final drawing to remain rough.", "A perfect copy can look mechanically copied. A progressive imperfect image often feels more like thought transmission."] }
    ],
    procedure: ["Choose one original method family.", "Write clear drawing instructions.", "Build a library of fifty common sketches.", "Create a five-stage reveal hierarchy.", "Add time separation after any information acquisition.", "Prepare an abstract-drawing recovery.", "Place both drawings side by side for the final image."],
    script: ["Draw one object that can be recognised from across the room. Keep it simple, and do not use letters or numbers.", "I get the direction before the object: it rises, bends slightly, and one part opens wider near the top. Let me commit to that structure first."],
    drills: ["Draw fifty objects in under fifteen seconds each.", "Reveal ten drawings using only orientation and geometry before naming category.", "Film every handling moment from participant and audience angles."],
    troubleshooting: [
      { problem: "The participant draws a scene.", response: "Ask them privately to concentrate on one dominant object within it." },
      { problem: "The reveal feels like guessing.", response: "Reduce questions and use a rehearsed structural sequence." },
      { problem: "The method resembles a commercial product too closely.", response: "Return to the general effect and redesign materials, handling and construction independently." }
    ],
    boundaries: ["Do not reproduce proprietary commercial gimmicks or scripts.", "Do not pressure participants to claim an inaccurate match.", "Keep participant drawings private if they contain sensitive content."],
    assignment: "Create one original back-to-back drawing routine and document effect, method family, handling, reveal hierarchy, failure path and intellectual-property audit.",
    quiz: [
      { question: "A progressive drawing reveal begins with:", options: ["Exact detail", "Orientation and geometry", "The participant’s name", "A commercial method"], answer: 1, explanation: "Structural information creates a convincing gradual reveal." },
      { question: "A proprietary gimmick should be:", options: ["Copied with new colours", "Replaced with original construction", "Explained publicly", "Reverse-engineered from video"], answer: 1, explanation: "Teach general principles through original work and proper credit." }
    ],
    media: ["Back-to-back performance", "Common drawing library", "Original prototype design worksheet"]
  },
  {
    id: 6,
    title: "One-Ahead Revelations",
    summary: "Use sequential logic to reveal writings, memories or drawings while disguising the information chain.",
    duration: "65–90 min",
    level: "Intermediate",
    objectives: ["Diagram what is known at every phase.", "Vary each reveal to hide repetition.", "Construct a clean final phase."],
    sections: [
      { heading: "The chain", body: ["One item is known before the first revelation. During that reveal, the next item is secretly obtained. The process continues until a prepared or independent ending closes the sequence.", "The method becomes invisible when the audience experiences different kinds of revelation rather than repeated paper handling."] },
      { heading: "Texture and order", body: ["Draw one response, write another, describe the emotional character of a third and reveal the final item from a sealed prediction. Different textures break the logical pattern.", "Participant order should be easy for the performer to track but not feel mechanically fixed."] },
      { heading: "The final out", body: ["Design the ending first. A prewritten prediction, controlled item or separate reliable method should resolve the last unknown information.", "The finale should feel cleaner than the middle, not like an unfinished administrative step."] }
    ],
    procedure: ["Choose three safe items.", "Create the first information source.", "Map the information state after every action.", "Assign a distinct reveal style to each item.", "Design the final independent out.", "Rehearse transitions and participant order.", "Test with items that are similar or unexpected."],
    script: ["Each impression arrives differently. The first is an image, the second a sound, and the last was committed to before any of you wrote.", "Keep your reactions neutral until I address you. That way one person cannot unconsciously guide the next reveal."],
    drills: ["Draw the information-state diagram from memory.", "Perform with participant order reversed.", "Create three reveal textures for the same written word."],
    troubleshooting: [
      { problem: "The performer loses track of information.", response: "Use a fixed physical order and rehearse the state diagram aloud." },
      { problem: "Every reveal uses the same movement.", response: "Change prop, distance, pacing and reveal form." },
      { problem: "The last item remains unknown.", response: "Redesign the final out before practising the chain." }
    ],
    boundaries: ["Do not request sensitive private information.", "Use obtained information only inside the agreed routine.", "Destroy or return written material responsibly."],
    assignment: "Build a three-person one-ahead sequence using a word, drawing and memory, ending with an isolated physical prediction.",
    quiz: [
      { question: "One-ahead depends on:", options: ["Every item being forced", "Each reveal supplying the next information", "Marked paper only", "Participant collusion"], answer: 1, explanation: "It is an information chain closed by a final out." },
      { question: "Revelation texture should be:", options: ["Identical", "Varied", "Always written", "Always verbal"], answer: 1, explanation: "Variation hides repetitive method structure." }
    ],
    media: ["Animated one-ahead diagram", "Three-person performance", "Information-state worksheet"]
  },
  {
    id: 7,
    title: "Billet Craft",
    summary: "Handle ordinary paper, folds, orientation, glimpses, switches and disposal while maintaining continuity and privacy.",
    duration: "75–100 min",
    level: "Intermediate technical",
    objectives: ["Standardise paper and folding instructions.", "Maintain natural handling before and after secret work.", "Use only safe participant-provided information."],
    sections: [
      { heading: "Paper and orientation", body: ["Use paper large enough to write clearly but small enough to handle consistently. Folding instructions should create a known orientation without sounding procedural.", "Mark practice billets during rehearsal to understand top, bottom, inside and outside. Remove practice marks before performance."] },
      { heading: "Continuity", body: ["The object must appear to remain the same object before and after a switch or glimpse. Match fold, hand position, pocket destination and timing.", "Secret handling should occur for an audience-facing reason: tearing, returning, burning safely, placing in a bowl or handing it to another participant."] },
      { heading: "Privacy and ending", body: ["Tell participants to write only information suitable for public entertainment. If something sensitive appears, do not reveal it.", "End by returning, openly destroying or securely disposing of the billet according to the agreed routine. Do not retain private writing secretly."] }
    ],
    procedure: ["Choose one standard paper size.", "Create one natural folding instruction.", "Practise orientation recognition by touch.", "Rehearse one glimpse and one switch separately.", "Add a meaningful time-separation beat.", "Create an illegible-writing recovery.", "Standardise return or disposal."],
    script: ["Write one simple object or place—nothing private, no password and nothing you would mind being part of the performance.", "Fold it once toward yourself and keep it secure. In a moment you will decide whether to hold it or place it here."],
    drills: ["Fold and orient fifty practice billets without looking.", "Perform handling while maintaining conversation and eye contact.", "Film overhead, participant-angle and audience-angle views."],
    troubleshooting: [
      { problem: "The fold instruction sounds suspicious.", response: "Use one simple fold and motivate it as privacy." },
      { problem: "The switched billet looks different.", response: "Match size, crease, orientation and handling history." },
      { problem: "Writing is illegible.", response: "Use category information, a backup method or a graceful incomplete reveal." }
    ],
    boundaries: ["Never obtain passwords, financial data or confidential information.", "Do not retain private billets without consent.", "Credit historical billet principles and avoid publishing proprietary handlings."],
    assignment: "Create a complete billet sequence containing safe instructions, known orientation, one acquisition method, time separation and responsible disposal.",
    quiz: [
      { question: "The fold is best motivated as:", options: ["A secret puzzle", "Privacy and handling", "Proof of psychic power", "A test of obedience"], answer: 1, explanation: "Natural motivation reduces procedural suspicion." },
      { question: "Sensitive writing should be:", options: ["Revealed for drama", "Photographed", "Protected and omitted", "Stored for later"], answer: 2, explanation: "Participant privacy overrides the routine." }
    ],
    media: ["Overhead folding videos", "Printable billet templates", "Continuity checklist"]
  },
  {
    id: 8,
    title: "Book Tests",
    summary: "Create impossible word revelations using ordinary-looking books, controlled information and progressive meaning-first reveals.",
    duration: "65–90 min",
    level: "Intermediate",
    objectives: ["Compare general book-test method families.", "Keep instructions short and natural.", "Develop an original implementation rather than copying commercial products."],
    sections: [
      { heading: "General method families", body: ["A book test may control the page or word, use known text, gain a glimpse or combine information from two participants. These are broad principles with many historical variations.", "Commercial tests frequently contain proprietary printing or handling. Do not reproduce their layouts, text systems or scripts."] },
      { heading: "Choosing the book", body: ["The book should fit the story. Travel writing supports destinations, fiction supports images and characters, and a dictionary supports precise words but can feel more procedural.", "Use an ordinary object with ordinary handling. Overproving that a book is normal may create the opposite impression."] },
      { heading: "Meaning before letters", body: ["Reveal image, emotional tone, category and context before committing to the exact word. This feels like thought reading rather than a spelling exercise.", "Prepare for plurals, punctuation and abstract words through clear selection instructions and a graceful reselection if needed."] }
    ],
    procedure: ["Choose an original method family.", "Select a thematically motivated book.", "Write participant instructions in three sentences or fewer.", "Create a five-stage semantic reveal.", "Prepare for unusable words.", "Add one final confirmation.", "Test with unfamiliar participants."],
    script: ["Open anywhere in this section and settle on one substantial concrete word—not a name and not a small connecting word. Close the book when the image is clear.", "The word produces an image of height and structure before sound. It feels built rather than natural… I am committing to tower."],
    drills: ["Create semantic reveals for thirty nouns.", "Reduce a seven-step procedure to three instructions.", "Practise book handling without watching the pages."],
    troubleshooting: [
      { problem: "The participant selects an abstract word.", response: "Ask them to choose a word that creates a clear mental image." },
      { problem: "The reveal becomes letter fishing.", response: "Return to semantic structure and commit sooner." },
      { problem: "The book appears prepared.", response: "Simplify handling and stop repeatedly emphasising fairness." }
    ],
    boundaries: ["Do not copy proprietary book-test printing or systems.", "Do not use private diaries or documents.", "Credit historical concepts and write original routines."],
    assignment: "Build an ordinary-book routine with a three-sentence selection process, five-stage reveal and original method documentation.",
    quiz: [
      { question: "A convincing word reveal usually begins with:", options: ["Spelling", "Meaning and imagery", "Method explanation", "A long interrogation"], answer: 1, explanation: "Semantic information creates a thought-reading experience." },
      { question: "Commercial layouts should be:", options: ["Copied", "Respected as proprietary", "Scanned", "Translated and reused"], answer: 1, explanation: "Original implementations protect creators and the app." }
    ],
    media: ["Ordinary-book performance", "Semantic reveal library", "Method originality checklist"]
  },
  {
    id: 9,
    title: "Predictions and Impossible Locations",
    summary: "Use sealed, nested and indexed outcomes while making commitment clear and retrieval invisible.",
    duration: "70–95 min",
    level: "Intermediate",
    objectives: ["Establish an early apparent commitment.", "Organise multiple outcomes cleanly.", "Select an impossible location that belongs to the story."],
    sections: [
      { heading: "The commitment condition", body: ["The audience should understand when the prediction became inaccessible. An envelope held by a participant, an object placed in view or a message timestamped before the decision can create this condition.", "Mention it once clearly and then let the routine breathe. Repeated reminders feel defensive."] },
      { heading: "Indexes and nested outcomes", body: ["An index organises several outcomes by position. Nested envelopes or containers can create distance and theatrical impossibility, but every layer adds time.", "Use the smallest number of outcomes and layers that support the effect. Retrieval should feel like one motivated action, not a search."] },
      { heading: "Location as story", body: ["A prediction inside a wallet, photograph, locked box or object is stronger when the location has narrative meaning. Random impossibility can feel like prop demonstration.", "Introduce the location early enough to matter, but not so heavily that spectators inspect it as the method."] }
    ],
    procedure: ["Define the prediction in one sentence.", "Choose the apparent commitment.", "Map all outcomes.", "Build the smallest practical index.", "Select a story-motivated final location.", "Rehearse every retrieval path by touch.", "Time the reveal and remove dead handling."],
    script: ["You have held the photograph since before the destination was named. Turn it over only now.", "The box is not important because it is locked. It is important because it contains the object connected to the choice you nearly rejected."],
    drills: ["Retrieve four indexed outcomes without looking.", "Build a three-layer reveal and then remove one unnecessary layer.", "Create destinations, symbols and objects as separate prediction sets."],
    troubleshooting: [
      { problem: "Retrieval resembles searching.", response: "Reduce outcomes, improve tactile indexing and standardise pocket order." },
      { problem: "The impossible location appears late.", response: "Introduce it earlier in a motivated way." },
      { problem: "Too many nested envelopes slow the climax.", response: "Keep only layers that increase remembered impossibility." }
    ],
    boundaries: ["Do not use staged predictions for gambling, investment or serious life choices.", "Do not imply certainty about illness, death or disaster.", "Use safe ordinary containers and materials."],
    assignment: "Create a three-out travel prediction in a story-motivated location and record every retrieval path at performance speed.",
    quiz: [
      { question: "An index should make outcomes:", options: ["Visible", "Quickly and invisibly accessible", "Random", "More numerous than necessary"], answer: 1, explanation: "Efficient organisation protects the reveal." },
      { question: "An impossible location is strongest when it:", options: ["Is random", "Fits the presentation", "Appears only at the end", "Contains many boxes"], answer: 1, explanation: "Narrative motivation makes the object memorable rather than procedural." }
    ],
    media: ["Index construction overview", "Impossible-location performance", "Outcome map worksheet"]
  },
  {
    id: 10,
    title: "Psychokinesis and Haunted Objects",
    summary: "Create safe apparent movement using balance, thread, magnets, static and ideomotor framing while controlling environment and sight lines.",
    duration: "75–100 min",
    level: "Intermediate technical",
    objectives: ["Select safe movement methods for controlled environments.", "Build atmosphere without unsupported paranormal claims.", "Plan reset, angle and failure management."],
    sections: [
      { heading: "Method families", body: ["Lightweight objects can move through balance, concealed thread, magnetic influence, static charge, air movement or participant ideomotor response. Each method requires different lighting and distance.", "The course teaches general principles and safe original experiments, not proprietary commercial hook-ups."] },
      { heading: "Environment is part of the method", body: ["Check airflow, background contrast, reflective surfaces, spectator position and lighting. A method reliable in rehearsal may fail near fans, sunlight or crowded tables.", "Reset and disposal should be designed before performance. A haunted object that cannot be examined may still be strong if the story justifies returning it to a case or cloth."] },
      { heading: "Presentation", body: ["Frame movement as an old object reacting, a concentration experiment or a strange coincidence. Do not claim medical, spiritual or dangerous authority.", "Slow movement is often stronger than sudden motion. Give the audience time to discover the change rather than announcing it before it happens."] }
    ],
    procedure: ["Select one lightweight safe object.", "Choose a general method family.", "Test airflow, lighting and background.", "Map audience sight lines.", "Create a motivated setup and reset.", "Rehearse no-movement and accidental-movement outs.", "Perform under controlled conditions."],
    script: ["Do not watch my hand. Watch the gap between the key and the table. If anything changes, let it happen before you react.", "This object has a story, but the story is theatre. The movement is the mystery we are sharing—not proof of a supernatural claim."],
    drills: ["Test one method in five lighting conditions.", "Record movement from four audience angles.", "Practise a graceful ending when nothing moves."],
    troubleshooting: [
      { problem: "Airflow causes uncontrolled movement.", response: "Change location or method; do not pretend accidental movement is controlled." },
      { problem: "Thread becomes visible.", response: "Adjust lighting, background, distance or abandon the method." },
      { problem: "Magnets affect electronics or medical devices.", response: "Do not use them near vulnerable equipment or participants; select a different method." }
    ],
    boundaries: ["Use only safe magnets, thread and lightweight objects.", "Avoid fire, sharp objects, electrical hazards and medical devices.", "Do not claim the movement proves spirits or supernatural danger."],
    assignment: "Create a two-minute haunted-object routine with environmental checklist, angle map, reset plan and no-movement ending.",
    quiz: [
      { question: "The environment affects:", options: ["Only presentation", "Method reliability and visibility", "Nothing", "Copyright only"], answer: 1, explanation: "Airflow, lighting and background are technical conditions." },
      { question: "A magnet routine should avoid:", options: ["Wooden tables", "Sensitive electronics and medical devices", "Story", "Rehearsal"], answer: 1, explanation: "Magnetic methods require hardware and health precautions." }
    ],
    media: ["Environmental test video", "Angle-map template", "Three safe haunted-object demonstrations"]
  },
  {
    id: 11,
    title: "Spirit Writing and Hidden Messages",
    summary: "Reveal words and symbols using safe prepared surfaces, condensation, paper layering and controlled visual development.",
    duration: "65–90 min",
    level: "Intermediate",
    objectives: ["Create a motivated visual appearance.", "Select skin-safe and fire-safe materials.", "Design original messages and narrative framing."],
    sections: [
      { heading: "The appearance is the effect", body: ["A message may emerge on a mirror through condensation, appear on prepared paper, become visible through safe powder contrast or be uncovered through layered material.", "The technical method should remain subordinate to the moment of discovery. Build silence and let the participant notice the message where possible."] },
      { heading: "Material safety", body: ["Avoid unknown chemicals, irritants, uncontrolled flame, ingestion and application to skin unless a material is explicitly designed and tested for that use.", "Use ordinary washable surfaces, water-based approaches and safe commercially labelled materials. Test on the exact surface before performance."] },
      { heading: "Narrative motivation", body: ["The message should connect to an earlier choice, story or object. A random word appearing can feel like a science experiment; a symbol connected to a photograph becomes a mystery.", "Do not use threatening messages, curses or claims that create fear outside the theatrical frame."] }
    ],
    procedure: ["Choose a safe appearance method.", "Test material compatibility.", "Write a short bold message.", "Connect it to an earlier routine beat.", "Control lighting and viewing distance.", "Plan cleanup and reset.", "End by clarifying the entertainment frame when needed."],
    script: ["Breathe lightly across the mirror and stop when you notice the first line. Do not rub the surface yet.", "The mark is not a warning. It is the same symbol you selected earlier, returning in a place that should have been blank."],
    drills: ["Test five message sizes for visibility.", "Create condensation and layered-paper reveals.", "Practise a silent discovery beat lasting five seconds."],
    troubleshooting: [
      { problem: "The message is faint.", response: "Increase contrast, simplify lettering and control distance or lighting." },
      { problem: "The material damages a surface.", response: "Stop use immediately and switch to a tested washable method." },
      { problem: "The reveal frightens the participant.", response: "Break character, clarify the theatrical context and remove the message." }
    ],
    boundaries: ["No hazardous chemicals, uncontrolled flame or untested skin application.", "Do not use threatening, coercive or curse-based messages.", "Test cleanup and property safety before performance."],
    assignment: "Create two safe hidden-message effects—one mirror-based and one paper-based—with material tests, cleanup and story connection.",
    quiz: [
      { question: "Material selection should prioritise:", options: ["Secrecy only", "Safety, compatibility and visibility", "Strong smell", "Permanent staining"], answer: 1, explanation: "Safe tested materials are essential." },
      { question: "The strongest message is usually:", options: ["Random", "Connected to an earlier choice or story", "Threatening", "Very long"], answer: 1, explanation: "Narrative connection gives the appearance meaning." }
    ],
    media: ["Safe-material guide", "Condensation reveal video", "Paper-message demonstration"]
  },
  {
    id: 12,
    title: "ESP Symbols and Coincidences",
    summary: "Build escalating matching effects with original symbols, structured choice and participant-as-mind-reader presentations.",
    duration: "65–90 min",
    level: "Intermediate",
    objectives: ["Design an original symbol set.", "Structure three phases of increasing impossibility.", "Reduce procedure while strengthening coincidence."],
    sections: [
      { heading: "Original symbol design", body: ["Use five or six visually distinct symbols with different geometry and orientation. Avoid copying proprietary deck artwork.", "The symbols should be recognisable at a distance and easy to describe without revealing accidental markings."] },
      { heading: "Escalation", body: ["Phase one may be a simple direct match. Phase two adds separation or participant control. Phase three reveals an earlier physical prediction or complete order.", "Do not increase impossibility by adding endless shuffling and dealing. Strong conditions should replace procedure."] },
      { heading: "Participant as the mind reader", body: ["A powerful reversal allows the participant to identify the performer’s symbol or create matching pairs. This shifts attention away from performer skill and makes the experience personal.", "Provide clear choices and protect the participant from feeling tested. Use an out or guaranteed final phase."] }
    ],
    procedure: ["Create five original symbols.", "Test visual distinction.", "Choose a reliable first phase.", "Add a participant-led second phase.", "Design a physical-prediction finale.", "Remove unnecessary dealing.", "Rehearse participant instructions."],
    script: ["You will not try to guess correctly. Let your hand pause over whichever symbol feels familiar, and we will treat the first phase as an experiment.", "The final match matters because the order was fixed before either of us touched the symbols."],
    drills: ["Perform a five-symbol recognition test.", "Design three distinct matching procedures.", "Practise participant-success and participant-miss responses."],
    troubleshooting: [
      { problem: "Symbols look too similar.", response: "Increase geometric and directional contrast." },
      { problem: "The routine contains excessive dealing.", response: "Replace procedure with stronger setup or prediction structure." },
      { problem: "The participant feels judged.", response: "Frame the phase as shared intuition and guarantee a positive final outcome." }
    ],
    boundaries: ["Use original artwork or properly licensed symbols.", "Do not present ESP cards as diagnostic tools.", "Avoid claims that misses indicate low intuition or ability."],
    assignment: "Design and test an original five-symbol deck and a three-phase routine ending with a participant-led impossible match.",
    quiz: [
      { question: "A strong symbol set should be:", options: ["Visually similar", "Distinct and original", "Copied from a commercial deck", "Text-heavy"], answer: 1, explanation: "Distinct original graphics improve clarity and ownership." },
      { question: "Escalation should mainly add:", options: ["More dealing", "Stronger conditions", "More explanation", "Longer pauses"], answer: 1, explanation: "Conditions create impossibility more effectively than procedure." }
    ],
    media: ["Printable original symbol deck", "Three-phase routine", "Participant-led presentation video"]
  },
  {
    id: 13,
    title: "Bizarre Magic and Story",
    summary: "Transform ordinary objects into mysteries through photographs, letters, legends, sensory detail and callbacks.",
    duration: "70–95 min",
    level: "Performance",
    objectives: ["Write a story that strengthens rather than buries the effect.", "Create atmosphere using concrete detail.", "Maintain an entertainment frame without harmful supernatural authority."],
    sections: [
      { heading: "Object, story, event", body: ["A bizarre routine needs an object with visible history, a story that creates expectation and an impossible event that resolves the story. If any one part is missing, the routine becomes either theatre without magic or a trick with decorative narration.", "Use one or two specific details rather than a long fictional biography. A date, stain, handwritten note or repeated symbol can carry more weight than excessive exposition."] },
      { heading: "Atmosphere", body: ["Slow the rhythm before the event, lower unnecessary speech and use silence after the reveal. Sound, lighting and handling may support the mood but should not compensate for unclear effect.", "Let participants touch or examine safe objects when method permits. Physical texture increases reality."] },
      { heading: "Callbacks", body: ["An early symbol, phrase or choice can return in the final message or object movement. Callbacks make separate methods feel like one planned mystery.", "The final callback should clarify the story rather than require explanation."] }
    ],
    procedure: ["Choose one ordinary object with visual character.", "Write a three-sentence legend.", "Define one impossible event.", "Plant one early callback.", "Remove details unrelated to the event.", "Rehearse silence and object handling.", "End with a physical image rather than more narration."],
    script: ["The photograph was ordinary until the same mark began appearing on every copy. Tonight you chose the mark before seeing the picture.", "Do not decide whether the story is true. Watch what happens to the object and decide what experience you had."],
    drills: ["Write legends of thirty, ninety and 180 seconds for the same object.", "Perform the reveal with five seconds of silence afterward.", "Create three callback options for one symbol."],
    troubleshooting: [
      { problem: "The story is longer than the magic.", response: "Cut to object, conflict and impossible event." },
      { problem: "The audience misses the callback.", response: "Make the early detail clear and repeat it once before the final reveal." },
      { problem: "The performance creates genuine fear.", response: "Break character, clarify the theatrical frame and check participant comfort." }
    ],
    boundaries: ["Do not claim real curses, possession or danger.", "Avoid exploiting grief, religion or trauma.", "Use sound, flame and old objects safely and respectfully."],
    assignment: "Write and perform a three-minute haunted-photograph routine with one early symbol, one impossible event and one final callback.",
    quiz: [
      { question: "A complete bizarre routine needs:", options: ["Only a story", "Object, story and impossible event", "Only darkness", "A supernatural claim"], answer: 1, explanation: "All three components create a coherent mystery." },
      { question: "A callback should:", options: ["Add unrelated detail", "Resolve an earlier element", "Explain the method", "Lengthen the script"], answer: 1, explanation: "Callbacks unify the routine and strengthen the ending." }
    ],
    media: ["Haunted-photograph performance", "Story template", "Atmosphere and silence demonstration"]
  },
  {
    id: 14,
    title: "Designing Original Gimmicks",
    summary: "Prototype original indexes, switching envelopes, impression surfaces and holders while testing innocent appearance, silence, reset and failure modes.",
    duration: "90–120 min",
    level: "Maker",
    objectives: ["Translate an effect requirement into engineering constraints.", "Prototype without cloning proprietary products.", "Test reliability, angles, durability and disposal."],
    sections: [
      { heading: "Start with requirements", body: ["Define what the device must secretly accomplish, what the audience sees, how quickly it resets, where it is carried and whether it can be examined.", "Do not begin by copying a commercial object. Return to the desired effect and generate several independent mechanisms."] },
      { heading: "Prototype cheaply", body: ["Use paper, card, tape, magnets only where safe, elastic, clips and ordinary stationery for early versions. Prototype geometry and handling before investing in polished materials.", "Document failures. Noise, thickness, awkward access and unreliable orientation often matter more than appearance."] },
      { heading: "Testing protocol", body: ["Test from multiple angles, under bright and dim lighting, seated and standing, with different clothing and after repeated resets.", "Invite a trusted magician to identify suspicious moments without revealing commercial secrets. Revise the audience-facing action, not only the mechanism."] }
    ],
    procedure: ["Write effect and technical requirements.", "Sketch three unrelated mechanisms.", "Build the cheapest prototype.", "Test function fifty times.", "Map angles and noise.", "Redesign handling and reset.", "Document originality and source credits."],
    script: ["The prop should look like something the routine genuinely needs. If the story does not require an envelope, redesign the gimmick or redesign the story.", "A prototype that fails visibly is useful data. Record the condition rather than hiding the failure from yourself."],
    drills: ["Build a paper index prototype.", "Create an original switching-envelope concept.", "Run fifty-cycle reliability and ten-cycle reset tests."],
    troubleshooting: [
      { problem: "The gimmick is too thick.", response: "Reduce outcomes, separate components or change the prop form." },
      { problem: "The mechanism is reliable but handling is suspicious.", response: "Redesign audience-facing motivation and access choreography." },
      { problem: "The design resembles a commercial device.", response: "Stop, document overlap and develop a genuinely different mechanism or license the product." }
    ],
    boundaries: ["Do not clone, expose or sell proprietary commercial gimmicks.", "Use safe materials and avoid weaponised, hazardous or fraudulent designs.", "Document inspirations, licences and original contributions."],
    assignment: "Prototype one original utility device and submit requirements, three concepts, failure log, angle test, fifty-cycle reliability result and IP audit.",
    quiz: [
      { question: "Prototype design should begin with:", options: ["Copying a product", "Effect requirements", "Expensive materials", "A logo"], answer: 1, explanation: "Requirements allow independent mechanisms and clearer testing." },
      { question: "A useful failure log records:", options: ["Only success", "Condition, failure and revision", "Audience names", "Commercial secrets"], answer: 1, explanation: "Structured failure data guides engineering improvement." }
    ],
    media: ["Prototype design walkthrough", "Reliability test sheet", "IP audit checklist"]
  },
  {
    id: 15,
    title: "Build a Seven-Minute Esoteric Act",
    summary: "Combine a symbol, drawing, haunted movement and impossible prediction into one escalating performance with callbacks and professional recovery.",
    duration: "90–120 min",
    level: "Capstone",
    objectives: ["Create a coherent running order and premise.", "Alternate method families and visual textures.", "Audit clarity, safety, credits and audience memory."],
    sections: [
      { heading: "Suggested structure", body: ["Open with a fast symbol choice, progress to drawing revelation, create one slow haunted-object moment and finish with a prediction that connects all earlier choices.", "The act should move from direct and personal to physical and impossible. Each phase should be shorter than the audience expects."] },
      { heading: "Callbacks and transitions", body: ["Carry one symbol, phrase or colour through the act. The drawing may contain the symbol, the haunted object may reveal it and the final prediction may explain why it mattered.", "Transitions should answer why the next object is introduced. Avoid stopping to reorganise props."] },
      { heading: "Performance review", body: ["Record the act and mark every secret action, audience-facing beat, silent pause, reset and possible failure. Ask viewers to describe the act after ten minutes.", "Credit every historical principle and creator whose published work shaped the routine. Keep scripts, artwork, gimmicks and combinations original."] }
    ],
    procedure: ["Write the one-sentence premise.", "Choose four effects from different method families.", "Plant one early callback.", "Map props and pockets.", "Prepare failure paths.", "Rehearse at full speed without stopping.", "Record, review and cut dead time.", "Run an ethics, safety and IP audit."],
    script: ["Everything tonight begins with one symbol. At first it is only a choice; by the end it will appear in places neither of us has touched.", "The drawing, the movement and the final card were not separate tricks. They were three appearances of the decision you made at the beginning."],
    drills: ["Perform the act without methods, speaking only visible actions.", "Run every failure path deliberately.", "Collect three ten-minute audience-memory summaries."],
    troubleshooting: [
      { problem: "The act feels like unrelated tricks.", response: "Strengthen premise, recurring symbol and motivated transitions." },
      { problem: "The middle haunted phase is too slow.", response: "Shorten setup and let the movement itself create the pause." },
      { problem: "The finale is weaker than the drawing.", response: "Make the prediction physically isolated and connect every earlier beat to it." }
    ],
    boundaries: ["Use safe materials and controlled environments.", "Protect participants, private information and intellectual property.", "Present supernatural themes as theatre rather than dangerous authority."],
    assignment: "Record a complete seven-minute act and score effect clarity, escalation, callbacks, method variety, recovery, safety, originality and audience memory.",
    quiz: [
      { question: "A coherent act is strengthened by:", options: ["Unrelated props", "Callbacks and motivated transitions", "Repeated methods", "Long explanations"], answer: 1, explanation: "Recurring meaning makes separate effects feel like one experience." },
      { question: "The final review should include:", options: ["Only technical success", "Audience memory, safety, credits and originality", "Only applause", "Only duration"], answer: 1, explanation: "A premium act is evaluated from artistic, ethical and technical viewpoints." }
    ],
    media: ["Complete model act", "Seven-minute rehearsal timer", "Capstone assessment rubric"]
  }
];
