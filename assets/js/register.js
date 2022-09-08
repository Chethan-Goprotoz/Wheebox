
const form_overlay = document.querySelector('.form_overlay'),
bulb_overlay = document.querySelector('.bulb_overlay'),
boxArrow = document.querySelectorAll('.box11 img'),
optContain = document.querySelectorAll('.option-container'),
bulbform = document.querySelector('.reg_form .bulb_info');
let pindex;

// change color of a date picker
(()=>{
const allDate = document.querySelectorAll(".reg_form input[type='date']");

allDate.forEach((elem)=>{
  elem.addEventListener('change',()=>{
      if(elem.value === ''){
        elem.classList.add('chg_color');
      }
      else{
        elem.classList.remove('chg_color');
      }
    })
  })
})();

// password hide/show
(()=>{
  const togglePword = document.querySelectorAll('.form-detail input[type="password"] + img');
  console.log(togglePword);
  togglePword.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
      let input = e.target.closest('.position-relative').querySelector('input');
      (input.type==='password')? input.type='text': input.type='password';
    })
  })
})();

// open bulb form
(()=>{
  const bulbformTrigger = document.querySelector('.main_div .formhead .bulk_regis button'),
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
    options = document.querySelectorAll('.wout_checkbox .option-container .option'),
    cboption = document.querySelectorAll('.inside_option .option'),
    optionsCon = document.querySelectorAll('.wout_checkbox .option-container p');
  let testArray = [];

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

  cboption.forEach((option)=>{
    option.addEventListener('click',(e)=>{
      e.preventDefault();
      let mergeCon = '';
      let selectBox = e.target.closest('.custom-select').querySelector('.box11 p');
      let mainoption = e.target.closest('.mainoption');
      let checkbox = mainoption.querySelector('input');
      if(checkbox.checked==true){
        checkbox.checked = false;
        let optionVal = mainoption.querySelector('label').innerText;
        let check = testArray.includes(optionVal);
        if(check){
          let index = testArray.indexOf(optionVal);
          testArray.splice(index, 1);
          if(testArray.length===0){
            selectBox.style.color = "#879290";
            selectBox.innerText='Select your Test';
          }
        }
        loopArrayValues(testArray,selectBox,mergeCon);
      }
      else if(checkbox.checked==false){
        checkbox.checked = true;
        let optionVal = mainoption.querySelector('label').innerText;
        testArray.push(optionVal);
        loopArrayValues(testArray,selectBox,mergeCon);    
      }
    })
  })

  function loopArrayValues(Array,selectBox,mergeCon){
    for(let i=0; i<Array.length; i++){
      selectBox.style.color = "#010D0A";
      if(i>2){
        mergeCon+=`....`;
        selectBox.innerText=`${mergeCon}`;
        return;
      }
      mergeCon+=`${Array[i]}, `;
      selectBox.innerText=`${mergeCon}`;
    }
  }
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