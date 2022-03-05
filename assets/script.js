// we want to create a quiz where the player will be presented with 5 questions
// this quiz will be timed, the player will get a total time of 15 seconds per question
// when the player hits the start button the timer starts and first question presents
// when the player answer a questions they are then presented with a new question
// when the player gets an answer wrong, a 10 second penalty is then applied
// when the quiz is over, the player is presented with their score and can save their score along with their intiials 


var timeLeft = questions.length * 15; // the player will get 15 seconds per question
var timePenalty = 10; // the player will get a 10 second penalty for answering a question wrong
var timeRemaining //
var score = 0; // starting off with a zero score
var questionsIndex = 0; // page starts off with zero questions before the button is pressed to start
var timer = document.querySelector("#start");
var wrapper = document.querySelector("#wrapper");
var questionsId = document.querySelector("#questionsId");
var currentTime = document.querySelector("#timer");
var correct;
var timerInterval;
var startQuizButton;


// create questions, we will use 5 questions for this quiz
var questions = [
    {
        title: "Javascript is an _____ language?",
        choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        answer: "Object-Oriented"
    },
    {
        title:"How do you stop an interval timer in Javascript?",
        choices: ["clearTimer", "intervalOver", "clearInterval", "None of the above"],
        answer: "clearInterval"
    },
    {
        title: "How do we write a comment in Javascript?",
        choices: ["/* */", "//", "#", "$ $"],
        answer: "//"
    },
    {
        title: "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    {
        title: "Which of the following methods can be used to display data in some form using Javascript?",
        choices: ["document.write()", "console.log()", "window.alert()", "All of the above"],
        answer: "All of the above"
    },
];

timer.addEventListener("click", function() {
    if
}