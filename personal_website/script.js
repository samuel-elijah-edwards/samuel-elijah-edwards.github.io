
document.getElementById('contact-form').addEventListener('submit', function (event) {
    'use strict';
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comments')

    const name = nameInput.value;
    const email = emailInput.value;
    const comments = commentInput.value

    // You can save the contact information to a server or perform other actions here
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Comment/Question: ' + comments)

    // Optionally, you can clear the form fields after submission
    nameInput.value = '';
    emailInput.value = '';
});
