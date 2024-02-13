// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Dummy code to handle form submission
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Message: ' + message);
  
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  
    // Show a confirmation message (this could be replaced with actual logic)
    alert('Message sent successfully!');
  });
  