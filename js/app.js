docReady(function () {
    // DOM is loaded and ready for manipulation here
    console.log("ready");
    document.getElementsByClassName("logo")[0].addEventListener('click', function () {
        window.location.reload(false);
    });
    renderAbout();
    var gamesBtn = document.getElementById("games");
    gamesBtn.addEventListener('click', renderGames);
    var aboutBtn = document.getElementById("about");
    aboutBtn.addEventListener('click', renderAbout);
});


function renderGames() {

    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h1>
        Games!!
        </h1>    
    `
}

function renderAbout() {

    var contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
    <p>
    Welcome to GMAT-PREP.
</p>
<p>
    Here you will find games that will help you practice the quantitative part of the GMAT test and improve
    your
    math skiils.
</p>
<br>
<p>Good Luck!</p>
    `
}


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 
