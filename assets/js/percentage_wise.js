var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
var colorPalette = ['#9191F4', '#F16DAE'];

option = {
  
 
  tooltip: {
    trigger: 'item'
  },
  legend: {
   show:false,
  },
  series: [
    {
      name: 'Data',
      type: 'pie',
      radius: '60%',
      data: [
        { value: 65, name: 'Male',itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#7676D4' },
            { offset: 1, color: '#9191F4' }
          ])
        }, },
        { value: 25, name: 'Female',itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#D04C92' },
            { offset: 1, color: '#F16DAE ' }
          ])
        }, },
        { value: 10, name: 'Other',itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#eacda3' },
            { offset: 1, color: '#d6ae7b ' }
          ])
        }, },

      ],
      position: 'left',
      
      color:colorPalette,
      emphasis: {
        
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
            
        }
      },
      label: {
          formatter: '{b}: \n ({c}%)',
          
        },
        startAngle:270,
    }
  ]
};

option && myChart.setOption(option);



var bar_ctx = document.getElementById('percentage_wise').getContext('2d');

var Purplegradient = bar_ctx.createLinearGradient(0, 0, 0, 400);
         Purplegradient.addColorStop(0, '#2CD9C5');
         Purplegradient.addColorStop(1, '#5BB4A9');



 

var bar_chart = new Chart(bar_ctx, {
 type: 'bar',
 data: {
     labels: [["0% - 20%"], "21% - 40%", ["41% - 60%"],[ "61% - 80%"], "81% - 100%"],
     datasets: [{
        label: 'No of Applicants',
         data: [20, 150, 300, 400, 350],
         backgroundColor: Purplegradient,
         hoverBorderWidth: 4,
         hoverBorderColor: 'purple', 
         barThickness: 20,
     },
     
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
      },
      
      displayColors: false,
     },
  },
  scales:{
  

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