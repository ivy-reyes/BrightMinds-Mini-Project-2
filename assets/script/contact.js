// inputs
let contactForm = document.querySelector("#contactForm");
let serviceSelected = document.querySelector("#serviceSelected");
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userMessage = document.querySelector("#userMessage");

// button
let contactSendBtn = document.querySelector("#contactSendBtn");

// attributes
// userName.required = true;
// userEmail.required = true;
userName.setAttribute("required", "");
userEmail.setAttribute("required", "");

// event listener
contactForm.addEventListener("submit", sendEmail);

// send email (working) *************************************************************
let pubKey = "VcIAqcxCb5BlhsJKw";
let serviceID = "service_ukzjjro";
let templateID = "template_hmfkn1u";

function sendEmail(e){
    e.preventDefault();
    
    contactForm.setAttribute("method", "post");
    emailjs.sendForm(serviceID, templateID, contactForm, pubKey)
    .then(function() {
        console.log('SUCCESS!');
        alert("mail sent successfully");
    }, function(error) {
        console.log('FAILED...', error);
        alert('FAILED...', error);
    });

    contactForm.reset();
}
// send email (working) *************************************************************

