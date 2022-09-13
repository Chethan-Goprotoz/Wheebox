
// circular progress bar
(()=>{
  const progressBar = document.querySelectorAll('.circular-progress'),
  valueCon = document.querySelectorAll('.circular-progress .value h4');
  let speed = 10;
  progressBar.forEach((progress,ind)=>{
    let progressValue = +progress.getAttribute('start'), 
    progressEndValue = +progress.getAttribute('end');

    let progressTimer = setInterval(()=>{
      progressValue++;
      valueCon[ind].innerText = `${progressValue}%`;
      progress.style.background = `conic-gradient(
        #20776E ${progressValue * 3.6}deg, #EBF3F2 ${progressValue * 3.6}deg)`
      if(progressValue === progressEndValue){
        clearInterval(progressTimer);
      }
    }, speed);
  })

})();
