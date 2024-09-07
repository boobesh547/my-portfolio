// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission with EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    emailjs.sendForm('service_vhrajtd', 'template_708sfsd', this)
        .then(function() {
            console.log('SUCCESS!');
            document.getElementById('form-response').style.display = 'block';
            document.getElementById('form-response').innerHTML = 'Message sent successfully!';
            document.getElementById('contact-form').reset(); // Reset the form
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('form-response').style.display = 'block';
            document.getElementById('form-response').innerHTML = 'Failed to send the message. Please try again later.';
        });
});
