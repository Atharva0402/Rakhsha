// document.getElementById("signUpButton").addEventListener("click", function() {
//     validateForm();
// });

// function validateForm() {
//     // Clear previous errors
//     ["username", "email", "phone", "password"].forEach(id => {
//         document.getElementById(id + "Error").textContent = "";
//     });

//     // Validate username
//     var username = document.getElementById("username").value.trim();
//     if (!username) {
//         document.getElementById("usernameError").textContent = "Username is required!";
//         return;
//     }

//     // Validate email
//     var email = document.getElementById("email").value.trim();
//     if (!validateEmail(email)) {
//         document.getElementById("emailError").textContent = "Please provide a valid email address!";
//         return;
//     }

//     // Validate phone
//     var phone = document.getElementById("phone").value.trim();
//     if (!validatePhone(phone)) {
//         document.getElementById("phoneError").textContent = "Please provide a valid phone number!";
//         return;
//     }

//     // Validate password
//     var password = document.getElementById("password").value.trim();
//     if (password.length < 8) {
//         document.getElementById("passwordError").textContent = "Password should be at least 8 characters long!";
//         return;
//     }

//     // If all validations pass, proceed with signup logic
//     console.log("All fields are valid. Proceed with signup logic.");

//      // If all validations pass, redirect to home.html
//     if(allFieldsAreValid) {  // This is a hypothetical condition. You should determine when all fields are validated successfully.
//     window.location.href = 'home.html';
// }
// }

// function validateEmail(email) {
//     var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return regex.test(email);
// }

// function validatePhone(phone) {
//     var regex = /^\d{10}$/; // This assumes a 10-digit phone number.
//     return regex.test(phone);
// }

document.getElementById("newPageButton").addEventListener("click", function(event) {
  event.preventDefault();
  registerUser();
});

document.getElementById("newPageButton").addEventListener("click", function() {
    window.location.href = "home.html"; // Replace with the actual page URL
  });

  
document.getElementById("panicButton").addEventListener("click", function() {
    sendPanicSignal();
  });
  
  function sendPanicSignal() {
    // Simulate sending a panic signal to authorities or contacts.
    // You can replace this with actual API calls or notifications.
    alert("Panic signal sent! Help is on the way.");
    
    // Simulate getting user's location.
    getUserLocation();
  }
  
  function getUserLocation() {
    // Simulate retrieving user's location using browser's Geolocation API.
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        displayLocation(latitude, longitude);
      },
      function(error) {
        console.error("Error getting location: " + error.message);
      }
    );
  }
  
  function displayLocation(latitude, longitude) {
    var locationDisplay = document.getElementById("locationDisplay");
    locationDisplay.innerHTML = `User's Location: Latitude ${latitude}, Longitude ${longitude}`;
  }
  
  document.getElementById("newPageButton").addEventListener("click", function(event) {
    event.preventDefault();
    registerUser();
  });
  
  document.getElementById("panicButton").addEventListener("click", function() {
    sendPanicSignal();
  });
  
  function registerUser() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

      if (!name) {
          alert("Name is required!");
          return;
      }
  
      if (!validateEmail(email)) {
          alert("Please provide a valid email address!");
          return;
      }
  
      if (!validatePhone(phone)) {
          alert("Please provide a valid phone number!");
          return;
      }
  
      // If all validations pass, you can proceed with the registration
      console.log("User registered:", name, email, phone);
  }
  
  function validateEmail(email) {
      var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(email);
  }
  
  function validatePhone(phone) {
      // This is a basic validation for a 10-digit phone number.
      // Adjust the pattern according to your country or requirements.
      var regex = /^\d{10}$/;
      return regex.test(phone);

  
    // You can implement code here to send the user's registration information to a server.
    console.log("User registered:", name, email, phone);
  }

  document.getElementById("newPageButton").addEventListener("click", function() {
    window.location.href = "new.html"; // Replace with the actual page URL
  });
  
  // ... (rest of the script)
  
  
// //////////////////////////

// ... (previous code)

// Example for handling emergency contacts
const contactList = document.querySelector('.contact-list');

contactList.addEventListener('click', function(event) {
  if (event.target.classList.contains('edit-button')) {
    // Handle edit button click
    console.log('Edit contact:', event.target.parentElement.textContent);
  } else if (event.target.classList.contains('delete-button')) {
    // Handle delete button click
    console.log('Delete contact:', event.target.parentElement.textContent);
    event.target.parentElement.remove();
  }
});

// ... (rest of the code)


// ... (previous code)

// Example for handling forum posts
const forumPosts = document.querySelectorAll('.forum-post');

forumPosts.forEach(post => {
  const replyButton = post.querySelector('.reply-button');
  
  replyButton.addEventListener('click', function() {
    // Handle reply button click for each post
    console.log('Reply to post:', post.querySelector('h3').textContent);
  });
});

// ... (rest of the code)


// ... (previous code)

// Example for handling real-time location sharing
document.getElementById('shareLocationButton').addEventListener('click', function() {
    // Simulate sharing location with selected contacts
    console.log('Location shared with contacts');
    // You can implement actual location sharing functionality here
  });
  
  // ... (rest of the code)
  
  // ... (previous code)


// Example for handling personal safety plan
document.getElementById('safetyPlanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Process the safety plan form data here
    // You can access form fields using document.querySelector or other methods
    console.log('Safety plan form submitted');
  });
  
  // ... (rest of the code)
  

  // ... (previous code)

// Example for handling feedback form
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Process the feedback form data here
    // You can access form fields using document.querySelector or other methods
    console.log('Feedback form submitted');
  });
  
  // ... (rest of the code)
  



