
/*----- Used to show/hide mobile menu button----*/ 
/*----  Used in CSS to control visibilty or appearence of menu---*/

const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar-menu")

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");

    console.log("it worked")
})


/*---------NewsLetter sign-up button active--------*/


document.addEventListener ('DOMContentLoaded', function() {
    const emailInput = document.getElementById ('footer-email');
    const submitButton = document.getElementById('footer-email-btn');


    submitButton.addEventListener('click',function(event) {
          event.preventDefault();

          const email =emailInput.value.trim();


        if(email ==='') {
           alert ('Please enter your email address.');  

        } else if (!isValidEmail (email)) {
           alert ('Please enter a valid email address.');  
        } else {
           alert ('Thank you for subscribing to our Scented Letter!');  
           emailInput.value ='';
        }

    });

/*------ for basic email validation ----------*/

    function isValidEmail (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

/*--------"Form registraion button WAS Working"---- added Cookies js code---- "it stopped working"!/ 
removed cookies jscode ---Still not working after many trys!!!           :-(     ---------------*/

document.addEventListener ('DOMContentLoaded',function() {
const registerButton = document.getElementById('registerButton');
const form = document.getElementById('registrationForm');

if(registerButton) {
    registerButton.addEventListener ('click',function(event) {
        event.preventDefault();
        console.log ('Register button clicked');

        if (form.checkValidity() ) {
        console.log ('Form is valid. Proceed with registration');

      } else {
        console.error('Form is invalid.');
        form.reportValidity();
      }
});

} else  {
        console.error ('Register button not found');

}

});
