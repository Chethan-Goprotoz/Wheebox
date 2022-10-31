// Start of Your Score (You vs Topper)

let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 30;
let speed = 10;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
    #826AF9 ${progressValue * 3.6}deg,
      #EDF0F4 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

// End of Your Score (You vs Topper)


// Start of Topper Score (You vs Topper)

let progressBar2 = document.querySelector(".circular-progress2");
let valueContainer2 = document.querySelector(".value-container2");

let progressValue2 = 0;
let progressEndValue2 = 70;
let speed2 = 10;

let progress2 = setInterval(() => {
    var prograssvalue = document.getElementById("progressvalue")
  progressValue2++;
  prograssvalue.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
    #2CD9C5 ${progressValue2 * 3.6}deg,
      #EDF0F4 ${progressValue2 * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed);



// End of Topper Score (You vs Topper)


function sidemenu(){
  var sidebar = document.getElementById("sidebar-menu")
  var icon = document.getElementById("menu-icon")
  sidebar.classList.toggle("sidebar-active")
  icon.classList.toggle("icon-rotate")
}


// Start of Phase 2 Charts data


// start of overall performance
var options = {
  series: [20,20,20],
  labels: ['Unattempted','Incorrect','Correct'],
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


var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42],
  color:'#FDDD33',

},
 {
  name: 'series2',
  data: [11, 32, 45, 32, 34],
  color: '#2CD9C5'
  
}],
fill: {
type: "solid",
fillOpacity: 10,
},

  chart: {
    width: '100%',
    
  
  type: 'area',
  
  toolbar:{
    show:false,
},
},

legend: {
  show: false,
},

dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
xaxis: { 
  categories: [["Pattern","Completion"], "Maths", ["Logical","Reasoning"], ["Attention","To Details"], "Articulation"],
  tickPlacement: 'between',
  tickAmount:10,
  labels: {
    rotate: 0,
  },
},
yaxis: {
  range: 10,
  labels: {
    formatter: function (value) {
  return value + "%";
}
  },
},
tooltip: {
 show:false,
},

};

var viewBenchmark = new ApexCharts(document.querySelector("#viewBenchmark"), options);
viewBenchmark.render();



// end of view benchmark

// start of view Improvements

const labels2 = [["Pattern","Completion"], "Maths", ["Logical "," Reasoning"],[ "Attention To","Details"], "Articulation"];
 const data2 = {
    labels: labels2,
    datasets: [{
     label: 'My First dataset',
     backgroundColor: 'rgb(255, 99, 132)',
     borderColor: 'rgb(255, 99, 132)',
     data: [40, 100, 80, 100, 65],
     tension: 0.4,
     borderColor: '#4791FF',
     pointBackgroundColor:'#4791FF'
   },
   {
     label: 'My First dataset',
     backgroundColor: 'rgb(255, 99, 132)',
     borderColor: 'rgb(255, 99, 132)',
     data: [20, 55, 24, 75, 100],
     tension: 0.4,
     borderColor: '#0CBF7D',
     pointBackgroundColor:'#0CBF7D'
     
   }]
 };
   
     const config2 = {
   type: 'line',
   data: data2,
   options: {
     responsive: true,
     plugins: {
       legend: {
        display: false,
       },
     },
     scales:{
      y:{
        ticks: {
        maxTicksLimit: 10,
        min: 0,
        max: this.max,
        callback: function (value) {
          return (value / this.max * 100).toFixed(0) + '%'; 
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
     labels: [["Pattern","Completion"], "Maths", ["Logical "," Reasoning"],[ "Attention To","Details"], "Articulation"],
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
   plugins: {
    legend: {
     display: false,
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

// end of view strengths


// End of Phase 2 Charts Data