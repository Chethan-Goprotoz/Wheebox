(()=>{
  const uploadDesc = document.querySelector('.system-diagnosis .upload2 .desc'),
  overlay = document.querySelector('.system-diagnosis .overlay');

  const event = ['load','click'];
  event.forEach((e)=>{
    window.addEventListener(e, performAction);
  })

  function performAction(e){
    if(e.type === 'load'){
      if(uploadDesc!==null && !uploadDesc.classList.contains('active')){
        uploadDesc.classList.add('active');
        overlay.classList.add('active');
      }
    }
    else if(e.type === 'click' && e.target === overlay){
      if(uploadDesc!==null && uploadDesc.classList.contains('active')){
        uploadDesc.classList.remove('active');
        overlay.classList.remove('active');
      }
    }
  }
})();

//dropdown
(()=>{
  const dropTrigger = document.querySelector('.main_header .grid2 .profile'),
  dropBox = document.querySelector('.main_header .grid2 .dropdown');

  dropTrigger.addEventListener('click',()=>{
      dropBox.classList.toggle('active');
  })
})();

// mobile slider
(()=>{
  const sliderrow = document.querySelector('.system-div .row.no-wrap'),
  stepper = document.querySelectorAll('.system-div .stepper');

  window.addEventListener('load', (e)=>{
    stepper.forEach((elem,ind)=>{
      if(elem.querySelector('.progress2.active') && e.target.scrollingElement.clientWidth < 768){
        sliderrow.style.transform = "translateX(" + (ind * -53) + "%)";
      }
    })
  })
})();