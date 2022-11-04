// Start of sidebar


function sidemenu(){
  var sidebar = document.getElementById("sidebar-menu")
  var icon = document.getElementById("menu-icon")
  sidebar.classList.toggle("sidebar-active")
  icon.classList.toggle("icon-rotate")
  icon.classList.toggle("fa-bars")
  icon.classList.toggle("fa-xmark")
}



// end of sidebar

// Start of Proctoring Score 

let proctoringscore = document.getElementById("riskwarning")
let proctoringvalue = document.getElementById("counter-report")
let proctoringRiskSign = document.getElementById("risksign")
let proctoringvalue_number = parseInt(progressId.dataset.progress)

if(proctoringvalue_number<10){
  proctoringvalue.style.transform = "translate(-60px,85px)"
}

proctoringvalue.textContent = (proctoringvalue_number + "%")



if(proctoringvalue_number>50){
  proctoringscore.style.display = "none"
  proctoringRiskSign.style.display = "none"
}


// end of proctoring score

var progressBarCircle = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};

window.onload = function(){
	var max = -219.99078369140625;
	progressBarCircle(document.querySelectorAll('.progressBar'), function (index, value) {
	percent = value.getAttribute('data-progress');
		value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
	});
}

// end of online reports



// Start of Phase 2 Charts data


// start of overall performance
var options = {
  series: [20,20,20],
  labels: ['Correct','Incorrect','Unattempted'],
  colors: ['#F6AB39', '#FF6C40', '#2D99FF'],
  chart: {
  type: 'polarArea',
  height: '200px'
},
stroke: {
  colors: ['#fff']
},

fill: {
colors: ['#F6AB39', '#FF6C40', '#2D99FF'],
opacity: 1,
}, 
    dataLabels: {
    enabled: true,
    textAnchor: 'middle',
    background: {
    enabled: true,
    foreColor: '#fff',
    padding: 4,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#fff',
    opacity: 0.9,
    dropShadow: {
      enabled: false,
      top: 1,
      left: 1,
      blur: 1,
      color: '#000',
      opacity: 0.45
},

},
style: {
fontSize: '10px',
fontFamily: 'Helvetica, Arial, sans-serif',
fontWeight: 'bold',
colors: ['#F6AB39', '#FF6C40', '#2D99FF'],
},
},
legend: {
  show: false,
},
grid:{
  show:false,
},
yaxis: {
  
show: false,
labels: {
show: false,
},
lines: {
    show: false
},


},
tooltip: {
enabled: true,
fillSeriesColor: true,
},

};

responsive: [{
breakpoint: 1000,
options: {
chart: {
  height: '100px'
},
},
}]
var OverallPerformance = new ApexCharts(document.querySelector("#OverallPerformance"), options);
OverallPerformance.render();


// end of overall performance


// start of view benchmark

var benchmark = document.getElementById('viewBenchmark').getContext('2d');

var benchmarkcolorone = benchmark.createLinearGradient(0, 0, 0, 400);
benchmarkcolorone.addColorStop(0, 'rgba(44, 217, 197, 0.9)');
benchmarkcolorone.addColorStop(1, '#166D63');

 var benchmarkcolortwo = benchmark.createLinearGradient(0, 0, 0, 900);
 benchmarkcolortwo.addColorStop(0, '#FDDD33');
 benchmarkcolortwo.addColorStop(1, '#7F6F1A');

 

 var bar_chart = new Chart(benchmark, {
  type: 'line',
  data: {
      labels: [["Pattern","Completion"], "Maths", ["Logical ","Reasoning"],[ "Attention To","Details"], "Articulation"],
      datasets: [{
          label: 'Percent',
          data: [25, 65, 70, 70, 70],
          backgroundColor: benchmarkcolorone,
          hoverBorderWidth: 2,
          hoverBorderColor: 'purple', 
          barThickness: 10,
          fill:true,
      },
      {
          label: 'Percent',
          data: [42, 20, 60, 100, 100],
          backgroundColor: benchmarkcolortwo,
          hoverBorderWidth: 2,
          hoverBorderColor: 'purple',
          barThickness: 10,
          fill:true,
      }
  ],
  
  },
  options: {
   maintainAspectRatio:false,
    plugins: {
     legend: {
      display: false,
     },
     tooltip:{
       callbacks:{
         title:(context)=>{
           console.log(context[0].label)
           return context[0].label.replaceAll(',',' ')
         }
       }
      },
   },
   scales:{
    y:{
      beginAtZero: true,
      ticks: {
        maxTicksLimit: 10,
      min: 0,
      max: this.max,// Your absolute max value
      callback: function (value) {
        return (value / this.max * 100).toFixed(0) + '%'; // convert it to percentage
      },
      
    },
    
    },
 
    x:{
      
      
      grid: {
          display:false,
          
      },
      font: {
       family: 'pop-normal', 
   },
    }
   },
   tooltips: {
          custom: function(tooltip) {
            if (!tooltip) return;
            tooltip.displayColors = false;
          },
          callbacks: {
            label: function(tooltipItem, data) {
              return tooltipItem.xLabel + " :" + tooltipItem.yLabel;
            },
            title: function(tooltipItem, data) {
              return;
            }
          },
        },
 },
 });
 



// end of view benchmark

// start of view Improvements

const labels2 = [["Pattern","Completion"], "Maths", ["Logical","Reasoning"],[ "Attention To","Details"], "Articulation"];
 const data2 = {
    labels: labels2,
    datasets: [{
     label: 'Data',
     backgroundColor: 'rgb(255, 99, 132)',
     borderColor: 'rgb(255, 99, 132)',
     data: [40, 100, 80, 100, 65],
     tension: 0.4,
     borderColor: '#4791FF',
     pointBackgroundColor:'#4791FF'
   },
   {
     label: 'Data',
     backgroundColor: 'rgb(255, 99, 132)',
     borderColor: 'rgb(255, 99, 132)',
     data: [20, 55, 24, 75, 100],
     tension: 0.4,
     borderColor: '#0CBF7D',
     pointBackgroundColor:'#0CBF7D',
     
   }]
 };
   
     const config2 = {
   type: 'line',
   data: data2,
   options: {
    maintainAspectRatio:false,
     responsive: true,
     plugins: {
       legend: {
        display: false,
       },
       tooltip:{
        callbacks:{
          title:(context)=>{
            console.log(context[0].label)
            return context[0].label.replaceAll(',',' ')
          }
        }
       },
     },
     scales:{
      y:{
        beginAtZero: true,
        ticks: {
        stepSize: 20,
        min: 0,
        max: this.max,
        callback: function (value) {
          return (value / this.max * 100).toFixed(0) + '%'; 
        },
        offset: true,
        
      },
      },
      x:{
        ticks: {
          font: {
            family: 'pop-normal', 
          
        },
        
          
        },
      }
     },
     
   },
 };


 const viewImprovements = new Chart(
  document.getElementById('viewImprovements'),
  config2
);
// end of view Improvements


// start of view strenghts

var bar_ctx = document.getElementById('viewStrengths').getContext('2d');

var Purplegradient = bar_ctx.createLinearGradient(0, 0, 0, 400);
         Purplegradient.addColorStop(0, '#8040FF');
         Purplegradient.addColorStop(1, '#402080');

 var pinkgradient = bar_ctx.createLinearGradient(0, 0, 0, 900);
 pinkgradient.addColorStop(0, '#F8009C');
 pinkgradient.addColorStop(1, '#7C004E');

 

var bar_chart = new Chart(bar_ctx, {
 type: 'bar',
 data: {
     labels: [["Pattern","Completion"], "Maths", ["Logical ","Reasoning"],[ "Attention To","Details"], "Articulation"],
     datasets: [{
         label: 'Percent',
         data: [75, 65, 70, 70, 70],
         backgroundColor: Purplegradient,
         hoverBorderWidth: 2,
         hoverBorderColor: 'purple', 
         barThickness: 10,
     },
     {
         label: 'Percent',
         data: [42, 100, 60, 100, 100],
         backgroundColor: pinkgradient,
         hoverBorderWidth: 2,
         hoverBorderColor: 'purple',
         barThickness: 10,
     }
 ],
 
 },
 options: {
  maintainAspectRatio:false,
   plugins: {
    legend: {
     display: false,
    },
    tooltip:{
      callbacks:{
        title:(context)=>{
          console.log(context[0].label)
          return context[0].label.replaceAll(',',' ')
        }
      }
     },
  },
  scales:{
   y:{
     ticks: {
       maxTicksLimit: 10,
     min: 0,
     max: this.max,// Your absolute max value
     callback: function (value) {
       return (value / this.max * 100).toFixed(0) + '%'; // convert it to percentage
     },
     
   },
   
   },

   x:{
     grid: {
         display:false
     },
     font: {
      family: 'pop-normal', 
  },
   }
  },
  tooltips: {
         custom: function(tooltip) {
           if (!tooltip) return;
           tooltip.displayColors = false;
         },
         callbacks: {
           label: function(tooltipItem, data) {
             return tooltipItem.xLabel + " :" + tooltipItem.yLabel;
           },
           title: function(tooltipItem, data) {
             return;
           }
         },
       },
},
},
);




// end of view strengths


// End of Phase 2 Charts Data
