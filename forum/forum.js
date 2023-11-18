// JavaScript for handling user interactions and chatbot functionality
document.getElementById("send-button").addEventListener("click", sendMessage);

function sendMessage() {
    const userMessage = document.getElementById("user-message").value;
    if (userMessage.trim() !== "") {
        // Create a new message element and append it to the chat
        const chat = document.querySelector(".chat");
        const newMessage = document.createElement("div");
        newMessage.innerText = "User: " + userMessage;
        chat.appendChild(newMessage);
        // Clear the user input field
        document.getElementById("user-message").value = "";
    }
}


// ... (previous code) ...

// ... (previous code) ...

function sendMessage() {
    const userMessage = document.getElementById("user-message").value;
    if (userMessage.trim() !== "") {
        // Create a new message element and append it to the chat
        const chat = document.querySelector(".chat");
        const newMessage = document.createElement("div");
        newMessage.classList.add("message", "sent");
        newMessage.innerText = "User: " + userMessage;
        chat.appendChild(newMessage);

        // Simulate chatbot responses
        setTimeout(() => {
            const response = document.createElement("div");
            response.classList.add("message", "received");
            const randomResponse = getRandomChatbotResponse();
            response.innerText = "Chatbot: " + randomResponse;
            chat.appendChild(response);
        }, 1000);

        // Clear the user input field
        document.getElementById("user-message").value = "";
    }
}

// ... (previous code) ...

function getRandomChatbotResponse() {
    const responses = [
        "How can I assist you further?",
        "Let's talk about women's safety. What's on your mind?",
        "Your safety is important to us. Please feel free to ask anything.",
        "We're here to support you. Ask your questions or share your thoughts.",
        "Thank you for participating in our forum. What would you like to discuss?",
        "Have you heard about our upcoming safety workshop?",
        "Here are some tips for staying safe while walking alone at night: [Tips].",
        "You can also share your safety stories with our members.",
        "Would you like to join our upcoming webinar on self-defense techniques?",
        "We're always here to listen and provide guidance. Feel free to chat with us anytime.",
        "Tell us about your experiences related to women's safety. Your voice matters.",
        "Remember, your safety is a priority. We're here to help you stay informed and empowered.",
        "If you have any questions about self-defense tools, don't hesitate to ask.",
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// ... (rest of the JavaScript code) ...
// Get references to the buttons
const addPostButton = document.getElementById('add-post-button');
const removePostButtons = document.querySelectorAll('.remove-post-button');

// Function to add a new post
addPostButton.addEventListener('click', () => {
    // Replace this with your code to add a new post
    // You can create new HTML elements and append them to the forum-posts section
    // Example: Create a new post and append it to the forum-posts section
    const newPost = document.createElement('div');
    newPost.className = 'forum-post';
    newPost.innerHTML = `
        <!-- Post content here -->
        <!-- ... (similar to existing posts) ... -->
        <button class="remove-post-button">Remove Post</button> <!-- Remove Post button -->
    `;
    
    // Append the new post to the forum-posts section
    document.querySelector('.forum-posts').appendChild(newPost);

    // Display a success message
    alert('Post successfully added!');
});

// Function to remove a post
removePostButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Replace this with your code to remove the selected post
        // Example: Remove the parent element of the clicked button (the entire post)
        button.parentElement.remove();
        
        // Display a success message
        alert('Post successfully removed!');
    });
});

function addNewPost() {
    const newPost = document.createElement('div');
    newPost.className = 'forum-post';
    newPost.innerHTML = `
        <!-- New post content here -->
        <div class="post-header">
            <!-- Post header content -->
        </div>
        <div class="post-content">
            <!-- Post content content -->
        </div>
        <div class="post-comments">
            <!-- Post comments content -->
        </div>
        <button class="remove-post-button">Remove Post</button>
    `;

    // Append the new post to the forum posts section
    forumPosts.appendChild(newPost);

    // Display a success message
    alert('Post successfully added!');
}

// Event listener for the "Add Post" button
addPostButton.addEventListener('click', addNewPost);