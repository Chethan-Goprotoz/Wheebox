
const form_overlay = document.querySelector('.form_overlay'),
bulb_overlay = document.querySelector('.bulb_overlay'),
boxArrow = document.querySelectorAll('.box11 img'),
optContain = document.querySelectorAll('.option-container'),
bulbform = document.querySelector('.reg_form .bulb_info');
let pindex;

// open bulb form
(()=>{
  const bulbformTrigger = document.querySelector('.main_div .formhead button'),
  closeBulbForm = document.querySelector('.reg_form .bulb_info div.close');
  
  bulbformTrigger.addEventListener('click',()=>{
    if(!bulbform.classList.contains('active')){
      bulbform.classList.add('active');
      bulb_overlay.classList.add('active');
    }
  })

  closeBulbForm.addEventListener('click',()=>{
    if(bulbform.classList.contains('active')){
      bulbform.classList.remove('active');
      bulb_overlay.classList.remove('active');
    }
  })
})();


// stepper form
(()=>{
  const nextbtn = document.querySelector('.reg_form .step_wise button.active'),
  border_fill = document.querySelector('.reg_form .step_wise .border_step'),
  step_number = document.querySelector('.reg_form .step_wise .center_step span.active'),
  datacontent = document.querySelectorAll('.reg_form .form-detail'),
  goback = document.querySelector('.reg_form .step_wise #goback');
  let ind = 0, newind, step_num = 1;

  nextbtn.addEventListener('click', () => {
    if (ind >= 3) {
        location.href = `thank-you.html`;
    }
    ind++;
    step_num++;
    performactive(ind, step_num);
  });

  goback.addEventListener('click', () => {
      if (ind > 0) {
          ind--;
          step_num--;
          performactive(ind, step_num);
      }

  });
  function performactive(ind, step_num) {
    let dataactive = document.querySelector('.reg_form .form-detail.active');
    dataactive.classList.remove('active');
    datacontent[ind].classList.add('active');
    step_number.innerText = step_num;
    switch (ind) {
        case 0:
            goback.classList.remove('enable');
            newind = ind + 1;
            nextbtn.innerText = "Next";
            break;
        case 1:
            goback.classList.add('enable');
            newind = ind + 1;
            nextbtn.innerText = "Next";
            break;
        case 2:
            nextbtn.innerText = "Next";
            newind = ind + 1;
            break;
        case 3:
          nextbtn.innerText = "Submit";
          nextbtn.setAttribute('type', 'submit');
          newind = ind + 1;
          break;
    }
    border_fill.style.width = `calc( ${newind} / 4 * 100%)`;
  }
})();


//dropdown JS
(() => {
  const boxTrigger = document.querySelectorAll('.box11'),
    boxContent = document.querySelectorAll('.box11 p'),
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
  if(e.target === bulb_overlay){
      bulb_overlay.classList.remove('active');
      bulbform.classList.remove('active');
  }
})