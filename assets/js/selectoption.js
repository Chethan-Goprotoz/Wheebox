const wrapper = document.querySelector(".selectWrapper")
let selectBtn = wrapper.querySelector(".select-btn");
let options = wrapper.querySelector(".selectOptions");

selectBtn.addEventListener("click",()=>{
    wrapper.classList.toggle("active")
})


let countries = ["option1","option2","option3","option4"]

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();


function updateName(selectedLi) {
    console.log(selectedLi.innerText)
    
}