function calcTime(sec) {
let timerMinutes = Math.floor(sec / 60);
let timerSeconds = sec % 60;

if (timerMinutes.toString().length === 1) {
    timerMinutes = '0' + timerMinutes
}
return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(40));