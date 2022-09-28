(()=>{
  const inc_font = document.querySelector('.btnInce .fontDec'),
  dec_font = document.querySelector('.btnInce .fontInc'),
  mcq_que = document.querySelector('.bgQuestion p'),
  mcq_opt = document.querySelectorAll('.radiodiv label');
  let fsize = 13;

  inc_font.addEventListener('click',()=>{
    if(fsize<17){
      fsize+=2;
      mcq_que.style.fontSize = `${fsize}px`;
      mcq_opt.forEach((opt)=>{
        opt.style.fontSize = `${fsize}px`;
      })
    }
  })

  dec_font.addEventListener('click',()=>{
    if(fsize>11){
      fsize-=2;
      mcq_que.style.fontSize = `${fsize}px`;
      mcq_opt.forEach((opt)=>{
        opt.style.fontSize = `${fsize}px`;
      })
    }
  })

})();

(()=>{
  const dot = document.querySelector('.dotgreen1'),
  mcq_panel = document.querySelector('.quePannelDisplay'),
  cross = document.querySelector('.crossgreen1');

  dot.addEventListener('click',()=>{
    if(!mcq_panel.classList.contains('active')){
      mcq_panel.classList.add('active');
      dot.style.display = 'none';
      cross.style.display = 'block';
    }
  })

  cross.addEventListener('click',()=>{
    if(mcq_panel.classList.contains('active')){
      mcq_panel.classList.remove('active');
      cross.style.display = 'none';
      dot.style.display = 'block';
    }
  })
})();