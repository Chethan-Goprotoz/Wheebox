<<<<<<< HEAD
$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
=======

// $('.loginslider').owlCarousel({
//     center: true,
//     items:3,
//     smartspeed: 1000,
//     loop:false,
//     dots: true,
//     margin:10,
//     // responsive:{
//     //     600:{
//     //         items:4
//     //     }
//     // }
// });


// Slick Slider


$('.loginslider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true,
    arrows: false,
    dots: true,
    speed: 300,
    centerPadding: '0px',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    margin: '-20px'
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

<<<<<<< HEAD
>>>>>>> bb3ccd5324fc977f37d790bff9427968e0449ae9
=======



>>>>>>> 180fb418f9d7e5042c498c698247043118eb4f79
