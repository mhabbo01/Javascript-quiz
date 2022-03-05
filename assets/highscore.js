var highScore = document.querySelector("#highScore");
var back = document.querySelector("#back");

//local storage
var scores = localStorage.getItem("scores");
scores = JSON.parse(scores);

if (scores !== null) {
    for (var i =0; i < scores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = scores[i].initials + " " + scores[i].score;
        highScore.appendChild(createLi);
    }
}

back.addEventListener("click", function () {
    window.location.replace("./index.html");
});

