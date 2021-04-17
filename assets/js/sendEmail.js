function sendMail(contactForm) {
    console.log(contactForm);
    emailjs.send("MS2", "template_u6x0vpa" ,{
        "from_name": contactForm.name.value,
        "reply_to": contactForm.email.value,
        "message": contactForm.message.value,
        "newsletter_request": contactForm.newsletter.value
    })
    .then(
            function () {           
            Swal.fire(
            'Message sent!',
            'Thank you, We will get back to you soon',
            'success'
            );
        },        
                   
        function () {
            Swal.fire(
            'Oops...',
            'Something went wrong!',
            'error'
            );
        });               
     document.getElementById("contact-form").reset();
    return false;    
}                 