
$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });


//   Validation Script

function GEEKFORGEEKS() {
   
    var email =
        document.forms.RegForm.EMail.value;
    var password =
        document.forms.RegForm.Password.value;

    var otp =
        document.forms.RegForm.Otp.value;

    var mobile =
        document.forms.RegForm.Telephone.value;

    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
 
    var regmobile=/^\d{10}$/;


     
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
      
    if (password == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }

    if(password.length <6){
        alert("Password should be atleast 6 character long");
        password.focus();
        return false;

    }

    if (otp == "") {
        alert("Please enter Corect OTP");
        otp.focus();
        return false;
    }

    if (mobile == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }
  


    return true;
}

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



var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "3",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
      watchOverflow : false,
      slidesPerColumnFill: 'row'
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  });

// ////show Hide///////
// $(document).ready(function(){
//   $(".start").click(function(){
//     $("#camera").slideToggle("slow");
//   });
// });


// Select code
const select = document.querySelectorAll(".form-elem .custom-select .box p"),
inserror = document.querySelector("#insError"),
proerror = document.querySelector("#proError"),
form = document.querySelector("#contactForm"),
btnValidate = document.querySelector("form .form-check > button"),
username = document.querySelector("form #firstName"),
email = document.querySelector("form #email"),
phone = document.querySelector("form #phoneNumber"),
insname = document.querySelector("form #institution");
let usernameVal;
btnValidate.addEventListener("click", a => {
a.preventDefault(), validate(), validateselect()
});
const successmsg = a => {
    let b = document.querySelectorAll(".form-elem");
    if (!Array.from(b).every(a => a.classList.contains("success"))) return !1;
    swal("Welcome! " + a, "Your response has been recorded")
},
isEmail = a => {
    let b = a.indexOf("@");
    if (b < 1) return !1;
    let c = a.lastIndexOf(".");
    return !(c <= b + 2) && c !== a.length - 1
},
validate = () => {
    usernameVal = username.value.trim();
    let a = email.value.trim(),
        b = phone.value.trim(),
        c = insname.value.trim();
    "" === usernameVal ? setErrorMsg(username, "Username cannot be blank") : usernameVal.length < 2 ? setErrorMsg(username, "Username must be minumum of 2 character") : setSuccessMsg(username), "" === a ? setErrorMsg(email, "Email cannot be blank") : isEmail(a) ? setSuccessMsg(email) : setErrorMsg(email, "Provide valid email"), "" === b ? setErrorMsg(phone, "Phone number cannot be blank") : 10 != b.length ? setErrorMsg(phone, "Phone number must contain 10 number") : setSuccessMsg(phone), "" === c ? setErrorMsg(insname, "Institute/Organization name cannot be blank") : c.length < 2 ? setErrorMsg(insname, "Institute/Organization name must be minumum of 2 character") : setSuccessMsg(insname), successmsg(usernameVal)
},
setErrorMsg = (b, c) => {
    let a = b.parentElement,
        d = a.querySelector(".invalid-feedback");
    a.className = "form-elem error", d.innerText = c
},
setSuccessMsg = b => {
    let a = b.parentElement,
        c = a.querySelector(".invalid-feedback");
    a.className = "form-elem success", c.innerText = ""
};

function validateselect() {
let b = 0;
for (let a = 0; a < select.length; a++) "Institute/Organization type*" === select[a].innerText ? (inserror.innerText = "Please Select Institute", b++) : "Which Product you are Interested in*" === select[a].innerText ? (proerror.innerText = "Please Choose Product", b++) : (select[a].closest(".form-elem").classList.add("success"), select[a].closest(".form-elem").parentNode.querySelector("span.selerror").innerText = "");
if (1 === b || 2 === b) return !1;
successmsg(usernameVal)
}
form.addEventListener("click", a => {
a.preventDefault()
});

const boxTrigger = document.querySelectorAll(".form-elem .box"),
boxContent = document.querySelectorAll(".form-elem .box p"),
options = document.querySelectorAll(".form-elem .option-container .option"),
optOverlay = document.querySelector(".formoverlay");
boxTrigger.forEach((a, b) => {
a.addEventListener("click", c => {
    pindex = b;
    let a = c.target.closest(".custom-select").querySelector(".option-container"),
        d = c.target.closest(".custom-select").querySelector(".box img");
    a.classList.contains("active") ? (d.style.transform = "rotate(0deg)", optOverlay.classList.remove("active"), a.classList.remove("active")) : (d.style.transform = "rotate(180deg)", optOverlay.classList.add("active"), a.classList.add("active"))
})
}), 
options.forEach(a => {
a.addEventListener("click", a => {
    a.stopPropagation();
    let b = a.target.closest(".option-container"),
        c = a.target.closest(".custom-select").querySelector(".box img");
    optOverlay.classList.remove("active"), 
    c.style.transform = "rotate(0deg)", boxContent[pindex].innerText = a.target.innerText, b.classList.remove("active")
})
}), optOverlay.addEventListener("click", function() {
let a = document.querySelector(".option-container.active");
a.closest(".custom-select").querySelector(".box img").style.transform = "rotate(0deg)", a.classList.remove("active"), this.classList.remove("active")
})
// Select code
