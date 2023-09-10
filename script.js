function currentDate() {
  const currentDayText = document.getElementById("currentDayOfTheWeek");
  const currentUTCTime = document.getElementById("currentUTCTime");
  const date = new Date();

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = date.getDay();
  const currentDay = daysOfTheWeek[dayOfWeek];
  const milliseconds = date.getTime();

  currentDayText.innerHTML = currentDay;
  currentUTCTime.innerHTML = `${milliseconds}`;
}

setInterval(currentDate, 1000);

currentDate();
