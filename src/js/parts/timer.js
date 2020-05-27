const timer = () => {
  let deadline = "2020-06-30";

  const getTimeRemaining = (endtime) => {
    let dateRemaining = Date.parse(endtime) - Date.parse(new Date());
    // Hours in 24-hours format
    let days = Math.floor(dateRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateRemaining / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((dateRemaining / 1000 / 60) % 60);
    let seconds = Math.floor((dateRemaining / 1000) % 60);
    // let hours = Math.floor(t / (1000 * 60 * 60));

    return {
      total: dateRemaining,
      days,
      hours,
      seconds,
      minutes,
    };
  };

  const setClock = (endtime) => {
    const timer = document.querySelector(".timer"),
      timerDays = document.querySelector("#days"),
      timerHours = document.querySelector("#hours"),
      timerMinutes = document.querySelector("#minutes"),
      timerSeconds = document.querySelector("#seconds");
    const updateClock = () => {
      let dateRemaining = getTimeRemaining(endtime);
      timerDays.textContent = dateRemaining.days;
      timerHours.textContent = dateRemaining.hours;
      timerMinutes.textContent = dateRemaining.minutes;
      timerSeconds.textContent = dateRemaining.seconds;
      //Check days
      if (dateRemaining.days <= 0) {
        days.textContent = `00`;
      }
      //Check hours
      if (dateRemaining.hours < 10 && dateRemaining.hours > 0) {
        hours.textContent = `0${dateRemaining.hours}`;
      } else if (dateRemaining.hours < 0) {
        hours.textContent = `00`;
      } else if (dateRemaining.hours === 0) {
        hours.textContent = `00`;
      }

      //Check minutes
      if (dateRemaining.minutes < 10 && dateRemaining.minutes > 0) {
        minutes.textContent = `0${dateRemaining.minutes}`;
      } else if (dateRemaining.minutes < 0) {
        minutes.textContent = `00`;
      } else if (dateRemaining.minutes === 0) {
        minutes.textContent = `00`;
      }

      //Check seconds
      if (dateRemaining.seconds < 10 && dateRemaining.seconds > 0) {
        seconds.textContent = `0${dateRemaining.seconds}`;
      } else if (dateRemaining.seconds < 0) {
        seconds.textContent = `00`;
      } else if (dateRemaining.seconds === 0) {
        seconds.textContent = `00`;
      }
    };
    setInterval(() => {
      updateClock();
    }, 1000);
  };
  setClock(deadline);
};
export default timer;
