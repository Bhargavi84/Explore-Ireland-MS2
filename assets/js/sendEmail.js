function sendMail(contactForm) {
    emailjs.send("gmail", "template_u6x0vpa" ,{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "info_message": contactForm.message.value,
        "newsletter_request": contactForm.newsletter.value
    })
    then(
            function () {           
            Swal.fire(
            'Thank you for contacting us!',
            'Message sent!',
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
    return false;  
}