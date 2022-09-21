(()=>{
  const uploadDesc = document.querySelector('.system-diagnosis .upload2 .desc'),
  overlay = document.querySelector('.system-diagnosis .overlay');

  const event = ['load','click'];
  event.forEach((e)=>{
    window.addEventListener(e, performAction);
  })

  function performAction(e){
    if(e.type === 'load'){
      if(!uploadDesc.classList.contains('active')){
        uploadDesc.classList.add('active');
        overlay.classList.add('active');
      }
    }
    else if(e.type === 'click' && e.target === overlay){
      if(uploadDesc.classList.contains('active')){
        uploadDesc.classList.remove('active');
        overlay.classList.remove('active');
      }
    }
  }
})();