// Start of Proctoring Score 

var proctoringscore = document.getElementById("riskwarning")
var proctoringvalue = document.getElementById("counter-report")
var proctoringRiskSign = document.getElementById("risksign")
var proctoringvalue_number = parseInt(progressId.dataset.progress)

if(proctoringvalue_number<10){
  proctoringvalue.style.transform = "translate(-60px,85px)"
}

proctoringvalue.textContent = (proctoringvalue_number + "%")



if(proctoringvalue_number>50){
  proctoringscore.style.display = "none"
  proctoringRiskSign.style.display = "none"
}


// end of proctoring score