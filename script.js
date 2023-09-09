function updateClock() {
  var weekDayElement = document.getElementById("main_weekday");
  var UTCtimeElement = document.getElementById("currentUTCTime");

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
  const milliseconds = currentDate.getTime();

  weekDayElement.innerHTML = dayName;
  UTCtimeElement.innerHTML = `${milliseconds}`;
}

setInterval(updateClock, 1000);

updateClock();
