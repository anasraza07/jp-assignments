const mSecs = document.getElementById("m-secs");
const secs = document.getElementById("secs");
const mins = document.getElementById("mins");
const hoursElem = document.getElementById("hours");
const dayWrapper = document.getElementById("day-wrapper");
const daysElem = document.getElementById("days");

let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
let intervalId;

function start() {
    if (intervalId) {
        return;
    }

    intervalId = setInterval(() => {
        milliSeconds += 10;

        if (milliSeconds > 999) {
            milliSeconds = 0;
            seconds += 1;
        }

        if (seconds > 59) {
            seconds = 0;
            minutes += 1;
        }

        if (minutes > 59) {
            minutes = 0;
            hours += 1;
        }

        if (hours > 23) {
            hours = 0;
            days += 1;
            dayWrapper.style.display = "flex";
        }

        mSecs.innerText =
            milliSeconds < 10 ? "00" + milliSeconds
                : milliSeconds < 100 ? "0" + milliSeconds : milliSeconds;
        secs.innerText = seconds < 10 ? "0" + seconds : seconds;
        mins.innerText = minutes < 10 ? "0" + minutes : minutes;
        hoursElem.innerText = hours < 10 ? "0" + hours : hours;
        daysElem.innerText = days < 10 ? "0" + days : days;
    }, 10)

}

function stop() {
    clearInterval(intervalId);
    intervalId = null;
}

function reset() {
    clearInterval(intervalId);

    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    days = 0;
    intervalId = null;

    mSecs.innerText =
        milliSeconds < 10 ? "00" + milliSeconds
            : milliSeconds < 100 ? "0" + milliSeconds : milliSeconds;
    secs.innerText = seconds < 10 ? "0" + seconds : seconds;
    mins.innerText = minutes < 10 ? "0" + minutes : minutes;
    hoursElem.innerText = hours < 10 ? "0" + hours : hours;
    daysElem.innerText = days < 10 ? "0" + days : days;
    dayWrapper.style.display = "none";
}