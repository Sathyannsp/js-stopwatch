var sec = document.getElementById("seconds");
var millisec = document.getElementById("milliseconds");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var seconds = 0;
var milliseconds = 0;
var timeinterval;

const timer = () => {
  milliseconds++;

  if (milliseconds < 9) millisec.innerHTML = "0" + milliseconds;
  if (milliseconds > 9) millisec.innerHTML = milliseconds;
  if (milliseconds > 99) {
    seconds++;
    sec.innerHTML = "0" + seconds;
    milliseconds = 0;
    millisec.innerHTML = "0" + 0;
  }
  if (seconds < 9) sec.innerHTML = "0" + seconds;
  if (seconds > 9) sec.innerHTML = seconds;
};

start.addEventListener("click", () => {
  timeinterval = setInterval(timer, 10);
});

stop.addEventListener("click", () => {
  clearInterval(timeinterval);
});

reset.addEventListener("click", () => {
  clearInterval(timeinterval);
  seconds = 0;
  milliseconds = 0;
  sec.innerHTML = "00";
  millisec.innerHTML = "00";
});
