let timerId; // переменная, которая будет хранить ID таймера

let firstClick = true; // создаём и присваиваем значение true. См. стр.8 и 19

const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  
  if (firstClick) { // проверка, чтоб исключить повторный запуск: если true, значит ещё не запускалось (запуск ведёт за собой смену true на false, см.следующую стр.)
    firstClick = false;
    timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
  }
});

firstClick = true;

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
  clearInterval(timerId); // останавливаем таймер
	firstClick = true; // присваеваем значение true, чтоб можно было опять запустить часы
});

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  clock.textContent = hours + ":" + minutes + ":" + seconds;
}
