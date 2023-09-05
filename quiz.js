const topics = {
    geography: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Madrid", "Paris"],
            correctAnswer: "Paris"
        },
        {
            question: "Which river is the longest in the world?",
            options: ["Nile", "Amazon", "Mississippi", "Yangtze"],
            correctAnswer: "Nile"
        },
        {
            question: "Which continent is the largest by land area?",
            options: ["Asia", "Africa", "North America", "Europe"],
            correctAnswer: "Asia"
        },
        {
            question: "Which mountain is the tallest on Earth?",
            options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
            correctAnswer: "Mount Everest"
        },
        {
            question: "What is the largest ocean in the world?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean"
        }
    ],
    science: [
        {
            question: "What is the chemical symbol for gold?",
            options: ["Ag", "Au", "Fe", "Hg"],
            correctAnswer: "Au"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Liver", "Skin", "Brain"],
            correctAnswer: "Skin"
        },
        {
            question: "What gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correctAnswer: "Carbon Dioxide"
        },
        {
            question: "Which gas is responsible for the green color of plants?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Chlorophyll"],
            correctAnswer: "Chlorophyll"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["O", "H2O", "W", "HO"],
            correctAnswer: "H2O"
        }
    ],
    history: [
        {
        question: "Who was the first Prime Minister of India?",
        options: ["A) Jawaharlal Nehru", "B) Sardar Vallabhbhai Patel", "C) Mahatma Gandhi", "D) Subhas Chandra Bose"],
        correctAnswer: "A) Jawaharlal Nehru"
    },
    {
        question: "Which famous leader led the Salt March, also known as the Dandi March, as a protest against British salt taxes?",
        options: ["A) Bhagat Singh", "B) Rajendra Prasad", "C) Jawaharlal Nehru", "D) Mahatma Gandhi"],
        correctAnswer: "D) Mahatma Gandhi"
    },
        
          {
        question: "The Indus Valley Civilization, one of the world's oldest urban civilizations, was located in which modern-day country?",
        options: ["A) India", "B) Pakistan", "C) Bangladesh", "D) Sri Lanka"],
        correctAnswer: "B) Pakistan"
    },
    {
        question: "In which year did India gain independence from British rule?",
        options: ["A) 1942", "B) 1945", "C) 1947", "D) 1950"],
        correctAnswer: "C) 1947"
    },
    {
        question: "Who wrote the Indian national anthem, 'Jana Gana Mana'?",
        options: ["A) Rabindranath Tagore", "B) Subhas Chandra Bose", "C) Sardar Vallabhbhai Patel", "D) Jawaharlal Nehru"],
        correctAnswer: "A) Rabindranath Tagore"
    }
    ]
};


let currentTopic = null;
let currentQuestionIndex = 0;
let score = 0;

function loadTopicSelection() {
    const topicContainer = document.getElementById("topic-container");

    for (const topic in topics) {
        const button = document.createElement("button");
        button.innerText = topic;
        button.classList.add("topic");
        button.onclick = () => startQuiz(topic);
        topicContainer.appendChild(button);
    }
}



function startQuiz(topic) {
    currentTopic = topic;
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    document.getElementById("topic-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-button");
    const scoreElement = document.getElementById("score");

    const currentTopicQuestions = topics[currentTopic];

    if (currentQuestionIndex < currentTopicQuestions.length) {
        questionElement.innerText = currentTopicQuestions[currentQuestionIndex].question;
        optionsContainer.innerHTML = "";
        currentTopicQuestions[currentQuestionIndex].options.forEach((option) => {
            const button = document.createElement("button");
            button.innerText = option;
            button.classList.add("option");
            button.onclick = () => checkAnswer(button);
            optionsContainer.appendChild(button);
        });

        nextButton.disabled = true;
        scoreElement.innerText = "Score: " + score;
    } else {
        questionElement.innerText = "Quiz Completed!";
        optionsContainer.innerHTML = "";
        nextButton.style.display = "none";
        scoreElement.innerText = "Final Score: " + score + " out of " + currentTopicQuestions.length;
        questionElement.innerText = "Wow, you did a great job!!";
    }
}

function checkAnswer(selectedOption) {
    const currentTopicQuestions = topics[currentTopic];
    const correctAnswer = currentTopicQuestions[currentQuestionIndex].correctAnswer;
    if (selectedOption.innerText === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    loadQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex >= topics[currentTopic].length) {
        return;
    }

    currentQuestionIndex++;
    loadQuestion();
}
function endQuiz() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h1>Your Score: ${score}/${questions.length}</h1>`;
    
    if (score === questions.length) {
        quizContainer.innerHTML += "<p>Wow, you did a great job!</p>";
    }
}

loadTopicSelection();

