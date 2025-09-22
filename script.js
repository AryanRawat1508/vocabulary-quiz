document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        // --- Root Words (25 Questions) ---
        { category: "Root Words", question: "The root 'Mal' means bad or evil. Which word means 'an evil intention'?", options: ["Malfunction", "Maltreat", "Malice"], correct: "Malice" },
        { category: "Root Words", question: "The root 'Bene' means good. A 'benefactor' is someone who...", options: ["Does good for others", "Feels good", "Looks good"], correct: "Does good for others" },
        { category: "Root Words", question: "The root 'Phil' means love. A 'bibliophile' is a lover of what?", options: ["Stamps", "Mankind", "Books"], correct: "Books" },
        { category: "Root Words", question: "The root 'Logy' means the study of. 'Theology' is the study of what?", options: ["Humans", "Religion/God", "Structures"], correct: "Religion/God" },
        { category: "Root Words", question: "The root 'Cide' means to kill. 'Uxoricide' is the act of killing one's...", options: ["Father", "Wife", "Child"], correct: "Wife" },
        { category: "Root Words", question: "The root 'Dict' means to say. What does 'contradict' mean?", options: ["To speak against", "To say beforehand", "To speak the truth"], correct: "To speak against" },
        { category: "Root Words", question: "The root 'Spect' means to look. A 'spectator' is a person who...", options: ["Looks into something", "Looks at an event", "Looks back in time"], correct: "Looks at an event" },
        { category: "Root Words", question: "The root 'Port' means to carry. 'Transportation' is the act of...", options: ["Carrying goods into a country", "Carrying something easily", "Carrying across a distance"], correct: "Carrying across a distance" },
        { category: "Root Words", question: "The root 'Fact' means made or done. An 'artifact' is something...", options: ["That is made by human skill", "That makes you surprised", "That does good for others"], correct: "That is made by human skill" },
        { category: "Root Words", question: "The root 'Anti' means against. An 'antidote' works against...", options: ["Infection", "Social norms", "Poison"], correct: "Poison" },
        { category: "Root Words", question: "The root 'Meter' means measure. A 'thermometer' measures what?", options: ["Distance", "Heat", "Sound"], correct: "Heat" },
        { category: "Root Words", question: "The root 'Tele' means far off. A 'telephone' allows you to hear from...", options: ["Nearby", "Far away", "Under water"], correct: "Far away" },
        { category: "Root Words", question: "The root 'Hydr' means water. To 'dehydrate' means to lose what?", options: ["Energy", "Water", "Heat"], correct: "Water" },
        { category: "Root Words", question: "The root 'Chron' means time. 'Chronic' describes something that is...", options: ["Happening for a long time", "Happening once", "Happening in the future"], correct: "Happening for a long time" },
        { category: "Root Words", question: "The root 'Auto' means self. An 'autobiography' is a story of a person's life written by...", options: ["A historian", "A journalist", "Themselves"], correct: "Themselves" },
        { category: "Root Words", question: "The root 'Bio' means life. 'Biology' is the study of what?", options: ["Living things", "The earth", "Stars"], correct: "Living things" },
        { category: "Root Words", question: "The root 'Aqua' means water. An 'aquarium' is a tank for what?", options: ["Plants", "Fish and water creatures", "Sand"], correct: "Fish and water creatures" },
        { category: "Root Words", question: "The root 'Duc/Duct' means to lead. To 'conduct' an orchestra is to...", options: ["Play in it", "Listen to it", "Lead it"], correct: "Lead it" },
        { category: "Root Words", question: "The root 'Scrib/Scribe' means to write. An 'inscription' is something that is...", options: ["Spoken", "Heard", "Written on a surface"], correct: "Written on a surface" },
        { category: "Root Words", question: "The root 'Ject' means to throw. To 'reject' an idea is to...", options: ["Throw it back", "Think about it", "Accept it"], correct: "Throw it back" },
        { category: "Root Words", question: "The root 'Mort' means death. A 'mortal' being is one that...", options: ["Will live forever", "Must eventually die", "Is very strong"], correct: "Must eventually die" },
        { category: "Root Words", question: "The root 'Voc' means voice or to call. To 'vocalize' is to...", options: ["Use your voice", "Listen carefully", "Think deeply"], correct: "Use your voice" },
        { category: "Root Words", question: "The root 'Rupt' means to break. An 'interruption' is when something...", options: ["Continues smoothly", "Breaks in between an activity", "Starts over"], correct: "Breaks in between an activity" },
        { category: "Root Words", question: "The root 'Sent' means to feel. 'Consent' means to...", options: ["Feel against something", "Feel with someone in agreement", "Not feel anything"], correct: "Feel with someone in agreement" },
        { category: "Root Words", question: "The root 'Form' means shape. To 'reform' something is to...", options: ["Change its shape for the better", "Keep its shape the same", "Destroy its shape"], correct: "Change its shape for the better" },

        // --- Foreign Phrases (25 Questions) ---
        { category: "Foreign Phrases", question: "What does the Latin phrase 'ad nauseam' mean?", options: ["To a sickening degree", "To infinity", "For a specific purpose"], correct: "To a sickening degree" },
        { category: "Foreign Phrases", question: "The Italian phrase 'al fresco' means...", options: ["In the open air", "Genuine", "With a show of boldness"], correct: "In the open air" },
        { category: "Foreign Phrases", question: "What does the French phrase 'bête noire' mean?", options: ["Have a good trip", "Something one particularly dislikes", "Full freedom"], correct: "Something one particularly dislikes" },
        { category: "Foreign Phrases", question: "The Latin phrase 'carpe diem' is a call to...", options: ["Seize the day", "Beware the buyer", "Love one's fate"], correct: "Seize the day" },
        { category: "Foreign Phrases", question: "'De facto' is a Latin term meaning...", options: ["By law", "After the fact", "In practice, if not by law"], correct: "In practice, if not by law" },
        { category: "Foreign Phrases", question: "A 'faux pas' is a French term for a...", options: ["Social blunder", "Great success", "Work of art"], correct: "Social blunder" },
        { category: "Foreign Phrases", question: "The legal term 'habeas corpus' is a writ requiring a person under arrest to be...", options: ["Kept in jail indefinitely", "Brought before a judge or into court", "Released immediately"], correct: "Brought before a judge or into court" },
        { category: "Foreign Phrases", question: "The term 'in memoriam' is used to mean...", options: ["In place of a parent", "Into the middle of things", "In memory of"], correct: "In memory of" },
        { category: "Foreign Phrases", question: "What does the Latin phrase 'modus operandi' describe?", options: ["A way of living", "A way of operating", "A guilty mind"], correct: "A way of operating" },
        { category: "Foreign Phrases", question: "A 'persona non grata' is an...", options: ["Unwelcome person", "Expert", "Honored guest"], correct: "Unwelcome person" },
        { category: "Foreign Phrases", question: "The phrase 'quid pro quo' means...", options: ["For the public good", "Something for something", "At first sight"], correct: "Something for something" },
        { category: "Foreign Phrases", question: "What is a 'raison d'être'?", options: ["A reason for existence", "A final blow", "A sudden overthrow"], correct: "A reason for existence" },
        { category: "Foreign Phrases", question: "The German term 'schadenfreude' describes joy from...", options: ["One's own success", "Others' misfortune", "A beautiful painting"], correct: "Others' misfortune" },
        { category: "Foreign Phrases", question: "The term 'status quo' refers to the...", options: ["Essential condition", "Existing state of affairs", "Point of no return"], correct: "Existing state of affairs" },
        { category: "Foreign Phrases", question: "'Verbatim' means...", options: ["Word for word", "In secret", "Time flies"], correct: "Word for word" },
        { category: "Foreign Phrases", question: "What is a 'bon voyage'?", options: ["A good meal", "A good trip", "A good book"], correct: "A good trip" },
        { category: "Foreign Phrases", question: "'Bona fide' means...", options: ["Genuine", "A warning", "A second self"], correct: "Genuine" },
        { category: "Foreign Phrases", question: "The phrase 'c'est la vie' means...", options: ["That's life", "Seize the day", "I adjust"], correct: "That's life" },
        { category: "Foreign Phrases", question: "A 'coup d'état' is a...", options: ["Final blow", "Sudden overthrow of government", "Dead-end street"], correct: "Sudden overthrow of government" },
        { category: "Foreign Phrases", question: "'E pluribus unum' means...", options: ["Out of many, one", "For example", "And others"], correct: "Out of many, one" },
        { category: "Foreign Phrases", question: "A 'nom de plume' is a...", options: ["Pen name", "Fixed idea", "Great work"], correct: "Pen name" },
        { category: "Foreign Phrases", question: "The German word 'wanderlust' describes a strong desire to...", options: ["Sleep", "Eat", "Travel"], correct: "Travel" },
        { category: "Foreign Phrases", question: "The phrase 'vox populi' means...", options: ["Voice of the people", "Word for word", "Truth"], correct: "Voice of the people" },
        { category: "Foreign Phrases", question: "The German term 'zeitgeist' means...", options: ["World-weariness", "Spirit of the age", "Child prodigy"], correct: "Spirit of the age" },
        { category: "Foreign Phrases", question: "The phrase 'terra incognita' refers to...", options: ["A blank slate", "Unknown land", "The existing state"], correct: "Unknown land" },

        // --- Idioms (25 Questions) ---
        { category: "Idioms", question: "What does 'a chip on your shoulder' mean?", options: ["Being upset about something in the past", "Having a secret advantage", "Being very wealthy"], correct: "Being upset about something in the past" },
        { category: "Idioms", question: "To 'cry wolf' means to...", options: ["Grieve loudly", "Raise a false alarm", "Face a dangerous person"], correct: "Raise a false alarm" },
        { category: "Idioms", question: "If something happens 'once in a blue moon', it happens...", options: ["Every night", "During a sad event", "Very rarely"], correct: "Very rarely" },
        { category: "Idioms", question: "To 'let the cat out of the bag' is to...", options: ["Start a difficult task", "Reveal a secret", "Run out of energy"], correct: "Reveal a secret" },
        { category: "Idioms", question: "What does the idiom 'a piece of cake' mean?", options: ["A delicious dessert", "A very easy task", "Something that is common"], correct: "A very easy task" },
        { category: "Idioms", question: "To 'cut to the chase' means to...", options: ["Leave out unnecessary details and get to the point", "Run very fast", "End a conversation abruptly"], correct: "Leave out unnecessary details and get to the point" },
        { category: "Idioms", question: "What is a 'blessing in disguise'?", options: ["A very mild punishment", "Something good that isn't recognized at first", "An odd member of a group"], correct: "Something good that isn't recognized at first" },
        { category: "Idioms", question: "To 'hit the books' means to...", options: ["Physically strike books", "Study", "Read for pleasure"], correct: "Study" },
        { category: "Idioms", question: "If you 'hit the nail on the head', you...", options: ["Do or say something exactly right", "Make a loud noise", "Start a construction project"], correct: "Do or say something exactly right" },
        { category: "Idioms", question: "To 'hold your horses' means to...", options: ["Be patient", "Get ready to race", "Grip the reins tightly"], correct: "Be patient" },
        { category: "Idioms", question: "'The ball is in your court' means...", options: ["It is your turn to play a sport", "You have made a mistake", "It is your turn to make a decision"], correct: "It is your turn to make a decision" },
        { category: "Idioms", question: "To 'spill the beans' is another way to say...", options: ["Make a mess", "Reveal a secret", "Waste food"], correct: "Reveal a secret" },
        { category: "Idioms", question: "To be 'under the weather' means to be...", options: ["Standing in the rain", "Feeling ill or sick", "Feeling sad"], correct: "Feeling ill or sick" },
        { category: "Idioms", question: "What does it mean to 'break a leg'?", options: ["To wish someone good luck", "To injure someone", "To end a performance"], correct: "To wish someone good luck" },
        { category: "Idioms", question: "If you are 'barking up the wrong tree', you are...", options: ["Correct in your assumption", "Making a mistake or looking in the wrong place", "Scaring an animal"], correct: "Making a mistake or looking in the wrong place" },
        { category: "Idioms", question: "To 'get a taste of your own medicine' means...", options: ["To be treated the same bad way you treat others", "To try a new medication", "To share a drink with someone"], correct: "To be treated the same bad way you treat others" },
        { category: "Idioms", question: "To be 'saved by the bell' means to be...", options: ["Rescued at the last possible moment", "Late for an appointment", "Summoned by a bell"], correct: "Rescued at the last possible moment" },
        { category: "Idioms", question: "Someone who is the 'spitting image' of another person...", options: ["Dislikes them greatly", "Looks exactly like them", "Spits when they talk"], correct: "Looks exactly like them" },
        { category: "Idioms", question: "To 'go the extra mile' means to...", options: ["Take a longer route", "Go above and beyond what is required", "Participate in a marathon"], correct: "Go above and beyond what is required" },
        { category: "Idioms", question: "When you 'can't judge a book by its cover', you shouldn't...", options: ["Make decisions based on appearance", "Read a book with a bad cover", "Open a book before buying it"], correct: "Make decisions based on appearance" },
        { category: "Idioms", question: "What does 'a dime a dozen' mean?", options: ["Very expensive", "A special offer", "Anything that is common and easy to get"], correct: "Anything that is common and easy to get" },
        { category: "Idioms", question: "To 'bite the bullet' means to...", options: ["Endure a difficult situation with courage", "Go to the dentist", "Eat something very hard"], correct: "Endure a difficult situation with courage" },
        { category: "Idioms", question: "To 'add insult to injury' means to...", options: ["Apologize after hurting someone", "Make a bad situation even worse", "Help someone who is hurt"], correct: "Make a bad situation even worse" },
        { category: "Idioms", question: "To have a 'gut feeling' is to have...", options: ["A stomach ache", "A feeling of hunger", "A personal intuition about something"], correct: "A personal intuition about something" },
        { category: "Idioms", question: "'Curiosity killed the cat' is a warning that...", options: ["Cats are not curious", "Being inquisitive can lead you into danger", "You should not own a cat"], correct: "Being inquisitive can lead you into danger" },
        
        // --- Synonyms & Antonyms (25 Questions) ---
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM (opposite) of 'Abate' (to decrease)?", options: ["Aggravate", "Moderate", "Observe"], correct: "Aggravate" },
        { category: "Synonyms & Antonyms", question: "Which word is a SYNONYM (same meaning) for 'Acumen' (awareness, brilliance)?", options: ["Stupidity", "Ignorance", "Awareness"], correct: "Awareness" },
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM (opposite) of 'Adversity' (misfortune)?", options: ["Calamity", "Prosperity", "Hardship"], correct: "Prosperity" },
        { category: "Synonyms & Antonyms", question: "Which word is a SYNONYM (same meaning) for 'Barren' (desolate, sterile)?", options: ["Fertile", "Damp", "Sterile"], correct: "Sterile" },
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM (opposite) of 'Cease' (to terminate)?", options: ["Desist", "Originate", "Stop"], correct: "Originate" },
        { category: "Synonyms & Antonyms", question: "Which word is a SYNONYM for 'Calamity' (adversity, misfortune)?", options: ["Fortune", "Misfortune", "Success"], correct: "Misfortune" },
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM of 'Docile' (pliable, pliant)?", options: ["Submissive", "Gentle", "Headstrong"], correct: "Headstrong" },
        { category: "Synonyms & Antonyms", question: "Which word is a SYNONYM for 'Eloquence' (expression, fluency)?", options: ["Stammering", "Fluency", "Silence"], correct: "Fluency" },
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM of 'Feeble' (weak, frail)?", options: ["Infirm", "Strong", "Delicate"], correct: "Strong" },
        { category: "Synonyms & Antonyms", question: "Which word is a SYNONYM for 'Fabricate' (construct, produce)?", options: ["Destroy", "Dismantle", "Construct"], correct: "Construct" },
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM of 'Haughty' (arrogant, pompous)?", options: ["Humble", "Proud", "Superior"], correct: "Humble" },
        { category: "Synonyms & Antonyms", question: "Which word is a SYNONYM for 'Harass' (irritate, molest)?", options: ["Assist", "Comfort", "Irritate"], correct: "Irritate" },
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM of 'Lenient' (compassionate, merciful)?", options: ["Cruel", "Kind", "Gentle"], correct: "Cruel" },
        { category: "Synonyms & Antonyms", question: "Which word is a SYNONYM for 'Immense' (huge, enormous)?", options: ["Puny", "Insignificant", "Huge"], correct: "Huge" },
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM of 'Monotonous' (irksome, tedious)?", options: ["Dull", "Boring", "Varied"], correct: "Varied" },
        { category: "Synonyms & Antonyms", question: "Which word is a SYNONYM for 'Jubilant' (rejoicing, triumphant)?", options: ["Melancholy", "Depressing", "Rejoicing"], correct: "Rejoicing" },
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM of 'Obstinate' (stubborn, adamant)?", options: ["Flexible", "Determined", "Firm"], correct: "Flexible" },
        { category: "Synonyms & Antonyms", question: "Which word is a SYNONYM for 'Lucid' (sound, rational)?", options: ["Obscure", "Hidden", "Rational"], correct: "Rational" },
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM of 'Scanty' (scarce, insufficient)?", options: ["Limited", "Meager", "Lavish"], correct: "Lavish" },
        { category: "Synonyms & Antonyms", question: "Which word is a SYNONYM for 'Mitigate' (alleviate, relieve)?", options: ["Augment", "Enhance", "Relieve"], correct: "Relieve" },
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM of 'Taciturn' (reserved, silent)?", options: ["Quiet", "Talkative", "Reticent"], correct: "Talkative" },
        { category: "Synonyms & Antonyms", question: "Which word is a SYNONYM for 'Nimble' (prompt, brisk)?", options: ["Sluggish", "Languid", "Brisk"], correct: "Brisk" },
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM of 'Vain' (arrogant, egoistic)?", options: ["Modest", "Proud", "Conceited"], correct: "Modest" },
        { category: "Synonyms & Antonyms", question: "Which word is a SYNONYM for 'Pompous' (haughty, arrogant)?", options: ["Humble", "Unpretentious", "Arrogant"], correct: "Arrogant" },
        { category: "Synonyms & Antonyms", question: "Which word is an ANTONYM of 'Yield' (surrender, abdicate)?", options: ["Resist", "Submit", "Give in"], correct: "Resist" }
    ];

    let currentCategory = 'All';
    let currentPage = 1;
    const questionsPerPage = 10;
    const userAnswers = {};
    let quizSubmitted = false;

    const quizForm = document.getElementById('quiz-form');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const paginationControls = document.getElementById('pagination-controls');
    const submitBtn = document.getElementById('submit-btn');
    const resultsContainer = document.getElementById('results');

    function renderQuiz() {
        quizForm.innerHTML = '';
        const filteredData = quizData.filter(q => currentCategory === 'All' || q.category === currentCategory);
        
        const start = (currentPage - 1) * questionsPerPage;
        const end = start + questionsPerPage;
        const paginatedData = filteredData.slice(start, end);

        paginatedData.forEach((q, index) => {
            const questionIndex = quizData.indexOf(q);
            const questionElement = document.createElement('div');
            questionElement.className = 'question';
            
            let optionsHTML = '';
            q.options.forEach(option => {
                const isChecked = userAnswers[questionIndex] === option ? 'checked' : '';
                optionsHTML += `
                    <label>
                        <input type="radio" name="q${questionIndex}" value="${option}" ${isChecked}>
                        <span>${option}</span>
                    </label>
                `;
            });

            questionElement.innerHTML = `<p>${start + index + 1}. ${q.question}</p>${optionsHTML}`;
            quizForm.appendChild(questionElement);
        });

        renderPagination(filteredData.length);
        if (quizSubmitted) applyFeedbackStyles();
    }

    function renderPagination(totalQuestions) {
        paginationControls.innerHTML = '';
        const totalPages = Math.ceil(totalQuestions / questionsPerPage);
        if (totalPages <= 1) return;

        const prevBtn = document.createElement('button');
        prevBtn.className = 'page-btn';
        prevBtn.innerText = 'Prev';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => { if (currentPage > 1) { currentPage--; renderQuiz(); } });
        paginationControls.appendChild(prevBtn);

        const pageInfo = document.createElement('span');
        pageInfo.className = 'page-info';
        pageInfo.innerText = `Page ${currentPage} of ${totalPages}`;
        paginationControls.appendChild(pageInfo);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'page-btn';
        nextBtn.innerText = 'Next';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => { if (currentPage < totalPages) { currentPage++; renderQuiz(); } });
        paginationControls.appendChild(nextBtn);
    }
    
    function calculateAndShowResults() {
        quizSubmitted = true;
        let score = 0;
        quizData.forEach((q, index) => {
            if (userAnswers[index] === q.correct) {
                score++;
            }
        });

        resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}! Review your answers above.`;
        resultsContainer.style.display = 'block';
        resultsContainer.className = `results-container ${score / quizData.length >= 0.7 ? 'pass' : 'fail'}`;

        applyFeedbackStyles();
    }

    function applyFeedbackStyles() {
        quizData.forEach((q, index) => {
            const questionElement = document.querySelector(`input[name="q${index}"]`);
            if (questionElement) {
                const container = questionElement.closest('.question');
                if (!container) return;

                const correctLabel = container.querySelector(`input[value="${q.correct}"]`).parentElement;
                correctLabel.classList.add('correct');

                if (userAnswers[index] && userAnswers[index] !== q.correct) {
                    const incorrectLabel = container.querySelector(`input[value="${userAnswers[index]}"]`).parentElement;
                    incorrectLabel.classList.add('incorrect');
                }
            }
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            currentPage = 1;
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderQuiz();
        });
    });

    quizForm.addEventListener('change', (e) => {
        if (e.target.type === 'radio' && !quizSubmitted) {
            const questionIndex = parseInt(e.target.name.substring(1));
            userAnswers[questionIndex] = e.target.value;
        } else if (quizSubmitted) {
            e.preventDefault();
        }
    });
    
    quizForm.addEventListener('click', (e) => {
        if (quizSubmitted && e.target.type === 'radio') {
            e.preventDefault();
        }
    });

    submitBtn.addEventListener('click', () => {
        if (quizSubmitted) {
            // Reset Quiz
            quizSubmitted = false;
            Object.keys(userAnswers).forEach(key => delete userAnswers[key]);
            resultsContainer.style.display = 'none';
            submitBtn.innerText = 'Submit and See Score';
            renderQuiz();
            return;
        }

        const answeredCount = Object.keys(userAnswers).length;
        const totalCount = quizData.filter(q => currentCategory === 'All' || q.category === currentCategory).length;
        
        const confirmed = confirm(`Are you sure you want to submit? You have answered ${answeredCount} out of 100 total questions.`);
        if (confirmed) {
            calculateAndShowResults();
            submitBtn.innerText = 'Reset Quiz';
        }
    });

    renderQuiz();
});