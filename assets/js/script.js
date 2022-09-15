
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

////show Hide///////
$(document).ready(function(){
  $(".start").click(function(){
    $("#camera").slideToggle("slow");
  });
});
