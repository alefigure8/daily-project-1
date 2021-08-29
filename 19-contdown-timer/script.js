//GLOBAL VARIABLES
let final = '';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const input = document.getElementById('date');

//SET DEFAULT DATE
if (final === '') final = '01 01 2022';

//LISTENER
input.addEventListener('change', readDay);

//FUNCTIONS
function readDay(e) {
    const date = e.target.value.split('-');
    final = `${date[1]} ${date[2]} ${date[0]}`;
    console.log(final)

    countdown();
}

function countdown() {
    const finalDate = new Date(final);
    const currentDate = new Date();

    const totalSeconds = (finalDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

}

//INIT CALL
countdown()

//EVERY SECONDS
setInterval(countdown, 1000);