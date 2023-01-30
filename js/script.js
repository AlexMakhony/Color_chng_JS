function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const body = document.querySelector(`body`);
  const startBtn = document.getElementById(`startBtn`);
  const stopBtn = document.getElementById(`stopBtn`);
  let timerId = null;

// ЗАПУСК ____________________

  startBtn.addEventListener(`click`, event => {
    timerId = setInterval(() => {let color = getRandomHexColor();
        body.style.backgroundColor = color;}, 1000);
        startBtn.setAttribute('disabled', true);
  });


// Остановка ____________________

  stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled', true);
});


