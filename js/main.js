
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
        button.classList.add("inactive");
        button.classList.remove("active");
        handleReset(event);
    } else {
        button.innerText = "Reset";
        button.classList.add("active");
        button.classList.remove("inactive");
        handleStart(event);
    }
})

//enter key behavior
answerDiv.addEventListener('keypress', (event) => {
    if (isRunning) {
        if (isAnswerKey(event.keyCode)) {
            setTimeout(function(){handleUserAnswer(answerDiv.value);}, 100);            
        }
    }
});

function isAnswerKey(keyCode) {
    if (keyCode <= 57 && keyCode >= 48) {
        //is number
        return true;
    }
    if (keyCode === 110 || keyCode === 190 || keyCode === 46 || keyCode === 1509) {
        //is period OR decimal point
        return false;
    }
    return false;
}
function handleUserAnswer(userAnswerString) {
    if (userAnswerString === currentQuestion.answer.toString()) {
        //right answer
        clearTimeout(currentTimeout);
        currentScore++;
        scoreSpan.innerText = currentScore;
        successAudio.play()
        if (currentScore > best) {
            best = currentScore;
            bestSpan.innerText = best;
        }
        questionDiv.innerHTML = "Correct: " + currentQuestion.answer;        
        setTimeout(() => {
            currentQuestion = Question.generate();
            questionDiv.innerHTML = currentQuestion.question;            
            restartTimer();
            answerDiv.value = "";
        }, 1100);        
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
    timerDiv.innerText = "10";
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
    button.classList.add("inactive");
    button.classList.remove("active");
    questionDiv.innerHTML = "Press Start";
    scoreSpan.innerText = currentScore;

    bestSpan.innerText = best;

    answerDiv.value = "";
    isRunning = false;
    timerDiv.innerText = "10";
}




