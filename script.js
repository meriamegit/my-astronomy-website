// Contact Form Validation & Submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out! Your message has been sent.');
        // Add code to send the message to a server if needed.
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
