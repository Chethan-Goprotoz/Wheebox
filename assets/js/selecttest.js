
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

//disabling button
(()=>{
  const state = document.querySelectorAll('.selection .test-maincon span.state');
  state.forEach((elem)=>{
    let btn = elem.closest('.test-card').querySelector('.btn-test button');
    let elemtext = elem.innerText;
    switch(elemtext){
        case 'EXPIRED':
        case 'COMPLETED':
        case 'Expired':
        case 'Completed':{
          btn.style.cssText = `opacity: 0.5; cursor: not-allowed;`;
          break;
        }
        default:{
          btn.style.cssText = `opaicty: 1; cursor: pointer;`;
        }
    }
  })
})();


//filtering data
(()=>{
  const filterBtn = document.querySelectorAll('.selection .filter-btn button');

  filterBtn.forEach((filter)=>{
    filter.addEventListener('click', ()=>{
      filterData(filter);
    })

    function filterData(filter){
      let active = filter.closest('.filter-btn').querySelector('button.active');
      let filterText = filter.innerText.toLowerCase();
      let filterDiv = filter.closest('.test_con').querySelectorAll('.test-card');
      if(!filter.classList.contains('active')){
        active.classList.remove('active');
        filter.classList.add('active');
      }
      Array.from(filterDiv).forEach((elem)=>{
        let parentElem = elem.parentNode; 
        let elemlower = parentElem.getAttribute('filterValue').toLowerCase();
        if(elemlower.includes(filterText) || filterText==='all'){
          parentElem.classList.add('active');
          parentElem.style.display="";
        }
        else{
          parentElem.style.display="none";
        }
      })
    }
  })
})();

//search demo test
(()=>{
  const search = document.querySelector('.selection .test_con #search');
  search.addEventListener('keyup', ()=>{
    let value = search.value;
    filterTest(value);
  })
  
  function filterTest(searchWord){
    searchWord = searchWord.toLowerCase();
    let testvalue = document.querySelectorAll('.selection .test-maincon h6');

    Array.from(testvalue).forEach((value)=>{
      let valuelower = value.innerText.toLowerCase();
      let card = value.closest('.test-card').parentNode;
      if(valuelower.includes(searchWord)){
        card.style.display="";
      }
      else{
        card.style.display="none";
      }
    })
  }
})();
