// Select Buttons
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// select display screen
const displayTime = document.getElementById("displayTime");


let startTime = 0;
let elapsedTime = 0;
let currentTime =0;
let paused = true;

let ıntervalId;
let hours = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () =>{

    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        ıntervalId = setInterval(updateTime, 1000);

        startBtn.textContent = "START"

    }

});

stopBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(ıntervalId);


        startBtn.textContent = "RESUME"
    }
});


resetBtn.addEventListener("click", () =>{
    paused = true;
    clearInterval(ıntervalId);

    startTime = 0;
    elapsedTime = 0;
    currentTime =0;

    hours = 0;
    mins = 0;
    secs = 0;

    displayTime.textContent = "00:00:00"

    startBtn.textContent = "START"

})



function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((elapsedTime / (1000 *60 *60) / 60));

    secs = arrangeTimeScreen(secs);
    mins = arrangeTimeScreen(mins);
    hours = arrangeTimeScreen(hours);
    

    displayTime.textContent = `${hours}:${mins}:${secs}`


    function arrangeTimeScreen(unit){
        return (("0" + unit ).length > 2 ? unit : "0" + unit)
    }

}



