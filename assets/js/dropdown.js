const form_overlay = document.querySelector('.form_overlay'),
boxArrow = document.querySelectorAll('.box img'),
optContain = document.querySelectorAll('.option-container');

//dropdown JS
(() => {
  const boxTrigger = document.querySelectorAll('.box'),
    boxContent = document.querySelectorAll('.box p'),
    options = document.querySelectorAll('.option-container .option'),
    optionsCon = document.querySelectorAll('.option-container p');

  boxTrigger.forEach((box, ind) => {
    box.addEventListener('click', (e) => {
      pindex = ind;
      if (!optContain[ind].classList.contains('active')) {
        form_overlay.classList.add('active');
        optContain[ind].classList.add('active')
        boxArrow[ind].classList.add('active');
      }
      else {
        form_overlay.classList.remove('active');
        optContain[ind].classList.remove('active')
        boxArrow[ind].classList.remove('active');
      }
    })
  })
  options.forEach((option) => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      boxContent[pindex].style.color = "#010D0A";
      boxContent[pindex].innerText = e.target.querySelector('p').innerText;
      optContain[pindex].classList.remove('active')
      boxArrow[pindex].classList.remove('active');
      form_overlay.classList.remove('active');
    })
  })
  optionsCon.forEach((option) => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      boxContent[pindex].style.color = "#010D0A";
      boxContent[pindex].innerText = e.target.innerText;
      optContain[pindex].classList.remove('active')
      boxArrow[pindex].classList.remove('active');
      form_overlay.classList.remove('active');
    })
  })

})();

window.addEventListener('click', (e) => {
  if (e.target === form_overlay) {
    optContain[pindex].classList.remove('active');
    boxArrow[pindex].classList.remove('active');
    form_overlay.classList.remove('active');
  }
})