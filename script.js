function updateClock() {
  var weekDayElement = document.getElementById("main_weekday");
  var timeElement = document.getElementById("mainUTCTime");

  const currentDate = new Date();
  const dayOfWeek = currentDate.getUTCDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[dayOfWeek];
  const hours = currentDate.getUTCHours().toString().padStart(2, "0");
  const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = currentDate.getTime();

  weekDayElement.innerHTML = dayName;
  timeElement.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

setInterval(updateClock, 1000);

updateClock();
