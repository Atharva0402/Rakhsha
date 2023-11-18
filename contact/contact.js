// document.getElementById("contactForm").addEventListener("submit", function (event) {
//     event.preventDefault();
    
//     // You can add your logic here to handle form submission
//     // For example, sending data to a server, displaying a confirmation message, etc.
    
//     // After handling the form submission, you can reset the form fields
//     event.target.reset();
// });

// Sample data for contact list (you can replace this with actual data)
// const contacts = [];

// // Function to add a contact to the list
// function addContactToList(contact) {
//     const contactList = document.getElementById("contactList");
//     const listItem = document.createElement("li");
//     listItem.className = "contact-list-item";
//     listItem.textContent = contact.name;
//     contactList.appendChild(listItem);
// }

// // Handle form submission
// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     // Get form values
//     const name = document.getElementById("name").value;
//     const phone = document.getElementById("phone").value;
//     const email = document.getElementById("email").value;
//     const subject = document.getElementById("subject").value;
//     const message = document.getElementById("message").value;
    
//     // Create a contact object
//     const contact = {
//         name,
//         phone,
//         email,
//         subject,
//         message
//     };

//     // Add the contact to the list
//     addContactToList;
// }
    

      const backButton = document.getElementById("backButton");
    
      // Add a click event listener to the Back button
      backButton.addEventListener("click", function () {
        // Redirect to home.html
        window.location.href = "home.html";
      });

    
