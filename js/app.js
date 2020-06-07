docReady(function() {
    // DOM is loaded and ready for manipulation here
    console.log("ready");
    document.getElementsByClassName("logo")[0].addEventListener('click', function(){
        window.location.reload(false); 
    });
    
    
});


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 
