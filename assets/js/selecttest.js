const nodata = document.querySelector('.selection .test_con .nothing');

//dropdown
(()=>{
  const dropTrigger = document.querySelector('.main_header .grid2 .profile'),
  dropBox = document.querySelector('.main_header .grid2 .dropdown');

  dropTrigger.addEventListener('click',()=>{
      dropBox.classList.toggle('active');
  })
})();

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
        case 'Expired':{
          btn.style.cssText = `opacity: 0.5; cursor: not-allowed;`;
          break;
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
      let filterText = filter.innerText;
      let filterTextlower = filterText.toLowerCase();
      let filterDiv = filter.closest('.test_con').querySelectorAll('.test-card');
      if(!filter.classList.contains('active')){
        active.classList.remove('active');
        filter.classList.add('active');
      }
      Array.from(filterDiv).forEach((elem)=>{
        let parentElem = elem.parentNode; 
        let elemlower = parentElem.getAttribute('filterValue').toLowerCase();
        if(elemlower.includes(filterTextlower) || filterTextlower==='all'){
          parentElem.classList.add('active');
          parentElem.style.display="";
        }
        else{
          parentElem.style.display="none";
        }
      })

      let activemember = document.querySelectorAll(`.test_con [filterValue = ${filterText}]`);
      if(filterTextlower!=='all'){
        if(activemember.length === 0){
          nodata.classList.add('active');
        }
        else{
          nodata.classList.remove('active');
        }
      }
      else{
        checkAllCard();
      }
    }
  })
})();

function checkAllCard(){
  const allCard = document.querySelectorAll('.selection .test_con .test-card');
  if(allCard.length === 0){
    nodata.classList.add('active');
  }
  else{
    nodata.classList.remove('active');
  }
}
checkAllCard();

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


// creating chart
const ctx = document.querySelector('#myCanvas').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: { 
    datasets: [{
      label: 'My First Dataset',
      data: [145, 110, 100],
      backgroundColor: [
        '#2DBF60',
        '#F1D42F',
        '#F01D1D '
      ],
      borderWidth: 0,
      borderColor: 'transparent',
      spacing: 0,
      cutout: '68%'
    }]
  }
});

// for 0 test
// const ctx = document.querySelector('#myCanvas').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: { 
//     datasets: [{
//       label: 'My First Dataset',
//       data: [100],
//       backgroundColor: [
//         '#F1D42F'
//       ],
//       borderWidth: 0,
//       borderColor: 'transparent',
//       spacing: 0,
//       cutout: '68%'
//     }]
//   }
// });