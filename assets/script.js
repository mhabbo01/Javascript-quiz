// we want to create a quiz where the player will be presented with 5 questions
// this quiz will be timed, the player will get a total time of 15 seconds per question
// when the player hits the start button the timer starts and first question presents
// when the player answer a questions they are then presented with a new question
// when the player gets an answer wrong, a 10 second penalty is then applied
// when the quiz is over, the player is presented with their score and can save their score along with their intiials 


var startTime = 75 // the player will get 15 seconds per question which equals to 75 seconds
var timePenalty = 10; // the player will get a 10 second penalty for answering a question wrong
var score = 0; // starting off with a zero score
var questionIndex = 0; // page starts off with zero questions before the button is pressed to start
var timeLeft = document.querySelector("#timer")
var startBtn = document.querySelector("#startBtn");
var wrapper = document.querySelector("#wrapper");
var questionsId = document.querySelector("#questionsId");
var choicesUl = document.querySelector("#choices");
var timerInterval = 0; //setting interval time to zero for inbetween events



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

startBtn.addEventListener("click", function() {
    console.log("click")
    if (timerInterval === 0) {
        timerInterval = setInterval(function () {
            startTime--;
            timeLeft.textContent = "Remaining time: " + startTime;
            
            if (startTime <= 0) {
                finished();
                timeLeft.textContent = "TIME'S UP!";
            }
        }, 1000)
    }
    startQuestions(questionIndex)
});



//this function will show questions on the page
function startQuestions(questionIndex) {
    questionsId.innerHTML = ""; //resets 
    choicesUl.innerHTML = ""; //resets

    for (var i = 0; i < questions.length; i++) {
        var questionList = questions[questionIndex].title;
        var choiceList = questions[questionIndex].choices;
        questionsId.textContent = questionList
    }
    // for each is a callbackFn for each array element
    choiceList.forEach(function (newQuestion) {
        var listItem = document.createElement("li");
        listItem.textContent = newQuestion
        questionsId.appendChild(choicesUl);
        choicesUl.appendChild(listItem);
        listItem.addEventListener("click", (userAnswer));
    })
}

// this event will compare answers to see if they are right or wrong
function userAnswer(event) {
    var element = event.target;
    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        // createDiv.setAttribute("id", "createDiv");
        if (element.textContent == questions[questionIndex].answer) {
            score = score + 20;
            createDiv.textContent = "Correct!"
        } else {
            startTime -= timePenalty;
            createDiv.textContent = "Incorrect!  The answer is: " + questions[questionIndex].answer;
        }

    }
    questionIndex++;

    if (questionIndex >= questions.length) {
        finished();
        createDiv.textContent = "All Done!" + " your score is " + score + " !"
    } else {
        startQuestions(questionIndex);
    }
    questionsId.appendChild(createDiv);

}

function finished() {
    clearInterval(timerInterval);
    questionsId.innerHTML= "";
    timeLeft.innerHTML = "";

    var createH1 = document.createElement("h1");
    // createH1.setAttribute()
    createH1.textContent = "FINISHED!"

    questionsId.append(createH1);

    var createP = document.createElement("p");
    // createP.setAttribute();

    questionsId.appendChild(createP);



    //creating a label to enter initial
    var label = document.createElement("label");
    label.textContent = "Enter your initials: ";

    questionsId.appendChild(label);

    //creating input
    var input = document.createElement("input");
    input.textContent = "";

    questionsId.appendChild(input);

    //submitting highscore
    var submit = document.createElement("button");
    submit.textContent = "Submit Score";

    questionsId.appendChild(submit);

    submit.addEventListener("click", function () {
        var initials = input.value;

        if (initials === null) {
            alert("Please enter your initials!")
        } else {
            var finalScore = {
                initials: initials,
                score: score
            }
            var scores = localStorage.getItem("scores");
            if (scores === null) {
                scores = [];
            } else {
                scores = JSON.parse(scores);
            }
            scores.push(finalScore);
            var newScore = JSON.stringify(scores);
            localStorage.setItem("scores", newScore);
            window.location.replace("./highscores.html");
        }
    });

    }

