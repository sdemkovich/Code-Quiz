var quiz = 0;
var startQuiz = document.getElementById("startquiz")
var question = document.getElementById("question")
var q1Btn1 = document.getElementById("btn1");
var q1Btn2 = document.getElementById("btn2");
var q1Btn3 = document.getElementById("btn3");
var q1Btn4 = document.getElementById("btn4");
var timer = document.getElementById("time");
var line = document.getElementById("line-delimeter")


startQuiz.addEventListener("click", function(){
    goNext()
    startTimer()
    document.getElementById("quiz invitation").hidden = true;
    document.getElementById("quiz-questionary").hidden = false;
}, false);

q1Btn1.addEventListener("click", function () {
    if (quiz === 1) {
        hideWrong()
    }
    
    goNext()


});
q1Btn2.addEventListener("click", function () {
    goNext()

});
q1Btn3.addEventListener("click", function () {
    goNext()
});
q1Btn4.addEventListener("click", function () {
    goNext()
});

function goNext() {
    if (quiz === 0) {
        question.textContent = "Commonly used data types DO NOT Include:"
        q1Btn1.textContent = "1.string"
        q1Btn2.textContent = "2.booleans"
        q1Btn3.textContent = "3.alerts"
        q1Btn4.textContent = "4.numbers"
    }
    if (quiz === 1) {
        question.textContent = "The Condition in an if/else statement is enclosed within___."
        q1Btn1.textContent = "1.quotes"
        q1Btn2.textContent = "2.brackets"
        q1Btn3.textContent = "3.parameters"
        q1Btn4.textContent = "4.square brackets"
    }
    else if (quiz === 2) {
        question.textContent = "Arrays in JavaScript can be used to store___."
        q1Btn1.textContent = "1.numbers and strings"
        q1Btn2.textContent = "2.other arrays"
        q1Btn3.textContent = "3.booleans"
        q1Btn4.textContent = "4.all of the above"
    }
    else if (quiz === 3) {
        question.textContent = "String values must be enclosed within ___ when being assigned to variables."
        q1Btn1.textContent = "1.commas"
        q1Btn2.textContent = "2.curly brackets"
        q1Btn3.textContent = "3.quotes"
        q1Btn4.textContent = "4.parentheses"
    }
    else if (quiz === 4) {
        question.textContent = "Avery useful tool used during development and debugging for printing content to the debugger is:"
        q1Btn1.textContent = "1.JavaScript"
        q1Btn2.textContent = "2.terminal/bash"
        q1Btn3.textContent = "3.for loops"
        q1Btn4.textContent = "4.console.log"
    }
    quiz++
}

// Set up Timer for 75 seconds
var timeleft = 75;
var myTimer;

function startTimer() {
    myTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(myTimer);
    // stop your quiz here
  }
  timer.textContent = timeleft;
  timeleft -= 1;
}, 1000);
};


function hideWrong() {
    line.hidden = false;
    timeleft -= 10;
    
}


