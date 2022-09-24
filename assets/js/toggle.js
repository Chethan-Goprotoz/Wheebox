// password hide/show
(()=>{
  const togglePword = document.querySelectorAll('form input[type="password"] + img');
  togglePword.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
      let input = e.target.closest('.position-relative').querySelector('input');
      (input.type==='password')? input.type='text': input.type='password';
    })
  })
})();