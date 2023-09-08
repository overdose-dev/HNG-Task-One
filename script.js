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
  const milliseconds = currentDate.getUTCMilliseconds();
  const currentTimeAndDay = `Current UTC Time: ${hours}:${minutes}:${seconds}.${milliseconds}, Day of the Week: ${dayName}`;

  weekDayElement.innerHTML = dayName;
  timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();
