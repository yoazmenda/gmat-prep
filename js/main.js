
var questionDiv = document.getElementById("question");
var answerDiv = document.getElementById("answer");
var button = document.getElementById("button");
var timerDiv = document.getElementById("timer");
var scoreSpan = document.getElementById("score");
var bestSpan = document.getElementById("best");
var currentScore = 0;
var best = 0;
var isRunning = false;
var currentTimeout;
//read settings        
var options = document.querySelector("#options").getElementsByClassName("options");
var optionsArray = Array.from(options);
var currentQuestion;
var successAudio = document.getElementById("successAudio");
var doneAudio = document.getElementById("doneAudio");
reset();


//start button behaviour
button.addEventListener('click', (event) => {
    if (isRunning == true) {
        button.innerText = "Start";
        handleReset(event);
    } else {
        button.innerText = "Reset";
        handleStart(event);
    }
})

//enter key behavior
document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        if (isRunning) {
            event.preventDefault();
            handleUserAnswer(answerDiv.value);
        }
    }
});


function handleUserAnswer(userAnswerString) {
    let userAnswer = parseInt(userAnswerString);
    let actualAnswer = parseInt(currentQuestion.answer);

    if (userAnswer == actualAnswer) {
        //right answer
        currentScore++;
        scoreSpan.innerText = currentScore;
        successAudio.play()
        if (currentScore > best) {
            best = currentScore;
            bestSpan.innerText = best;
        }
        currentQuestion = Question.generate();
        questionDiv.innerText = currentQuestion.question;
        
        restartTimer();
        answerDiv.value = "";

    } 
    
}

function handleStart(event) {
    if (isRunning) {
        reset();
    }
    currentScore = 0;
    isRunning = true;
    answerDiv.focus();
    answerDiv.value = "";
    currentQuestion = Question.generate();
    questionDiv.innerText = currentQuestion.question;
    startTimer();
}

function restartTimer() {
    timerDiv.innerText = "07";
    startTimer();
}

function startTimer() {

    function pad(num, size) {
        var s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }


    let seconds = parseInt(timerDiv.innerText);

    var timerHandler = function () {
        seconds--;
        timerDiv.innerText = pad(seconds, 2);
        if (seconds > 0) {
            scoreSpan.innerText = currentScore;
            clearTimeout(currentTimeout);
            currentTimeout = setTimeout(timerHandler, 1000);
        } else {
            doneAudio.play();
            reset();
        }

    }

    timerDiv.innerText = pad(seconds, 2);
    scoreSpan.innerText = currentScore;
    clearTimeout(currentTimeout);
    currentTimeout = setTimeout(timerHandler, 1000);


}

function reset() {
    handleReset(null);
}

function handleReset(event) {
    clearTimeout(currentTimeout);
    doneAudio.play();
    button.innerText = "Start";
    questionDiv.innerHTML = "Press Start";
    scoreSpan.innerText = currentScore;

    bestSpan.innerText = best;

    answerDiv.value = "";
    isRunning = false;
    timerDiv.innerText = "07";
}




