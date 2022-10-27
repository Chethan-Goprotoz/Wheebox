let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 70;
let speed = 10;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
    #826AF9 ${progressValue * 3.6}deg,
      #EDF0F4 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);



let progressBar2 = document.querySelector(".circular-progress2");
let valueContainer2 = document.querySelector(".value-container2");

let progressValue2 = 0;
let progressEndValue2 = 70;
let speed2 = 10;

let progress2 = setInterval(() => {
    var prograssvalue = document.getElementById("progressvalue")
  progressValue2++;
  prograssvalue.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
    #2CD9C5 ${progressValue2 * 3.6}deg,
      #EDF0F4 ${progressValue2 * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed);

