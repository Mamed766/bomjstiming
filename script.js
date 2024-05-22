let hours = 0;
let minutes = 0;
let seconds = 0;

const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");

function updateClock() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  if (hours === 24) {
    hours = 0;
  }

  hour.textContent = String(hours).padStart(2, "0");
  minute.textContent = String(minutes).padStart(2, "0");
  second.textContent = String(seconds).padStart(2, "0");
}

setInterval(updateClock, 1000);
