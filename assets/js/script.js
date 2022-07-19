const hoursToShow = document.getElementById("hours");
const minutesToShow = document.getElementById("minutes");
const secondsToShow = document.getElementById("seconds");

const clock = setInterval(function time() {
  let dateToday = new Date();
  let hourNow = dateToday.getHours();
  let minuteNow = dateToday.getMinutes();
  let secondNow = dateToday.getSeconds();

  if (hourNow < 10) hourNow = "0" + hourNow;
  if (minuteNow < 10) minuteNow = "0" + minuteNow;
  if (secondNow < 10) secondNow = "0" + secondNow;

  hoursToShow.textContent = hourNow;
  minutesToShow.textContent = minuteNow;
  secondsToShow.textContent = secondNow;
});
