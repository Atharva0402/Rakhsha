// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function() {
    // Simulated forum data
    const forumData = [
        { title: "Forum Thread 1", content: "Discussion content for thread 1" },
        { title: "Forum Thread 2", content: "Discussion content for thread 2" },
        // Add more forum threads here
    ];

    // Simulated user profile data
    const userProfileData = {
        name: "User Name",
        email: "user@example.com",
        bio: "This is a short bio about the user.",
        // Add more user profile information here
    };

    // Simulated blog post data
    const blogPostData = [
        { title: "Blog Post 1", content: "Content of blog post 1" },
        { title: "Blog Post 2", content: "Content of blog post 2" },
        // Add more blog posts here
    ];

    // Simulated community guidelines
    const communityGuidelines = "1. Be respectful\n2. No hate speech\n3. No spam";

    // Function to display forum threads
    function displayForumThreads() {
        const forumList = document.getElementById("forum-list");
        forumData.forEach(thread => {
            const threadElement = document.createElement("div");
            threadElement.innerHTML = `<h3>${thread.title}</h3><p>${thread.content}</p>`;
            forumList.appendChild(threadElement);
        });
    }

    // Function to display user profile
    function displayUserProfile() {
        const profile = document.getElementById("profile");
        profile.innerHTML = `<p>Name: ${userProfileData.name}</p><p>Email: ${userProfileData.email}</p><p>Bio: ${userProfileData.bio}</p>`;
    }

    // Function to display blog posts
    function displayBlogPosts() {
        const blogPosts = document.getElementById("blog-posts");
        blogPostData.forEach(post => {
            const postElement = document.createElement("div");
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
            blogPosts.appendChild(postElement);
        });
    }

    // Function to display community guidelines
    function displayCommunityGuidelines() {
        const communityGuidelinesSection = document.getElementById("community-guidelines");
        communityGuidelinesSection.querySelector("p").textContent = communityGuidelines;
    }

    // Initialize the page
    displayForumThreads();
    displayUserProfile();
    displayBlogPosts();
    displayCommunityGuidelines();
});


document.addEventListener("DOMContentLoaded", function () {
    const questionForm = document.getElementById("question-form");
    const questionInput = document.getElementById("question");
    const responseContainer = document.getElementById("response-container");
    const prevResponseButton = document.getElementById("prev-response");
    const nextResponseButton = document.getElementById("next-response");
    let responses = [];
    let currentResponseIndex = -1;

    questionForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get the user's question
        const userQuestion = questionInput.value.trim();

        if (!userQuestion) {
            alert("Please enter a question.");
            return;
        }

        // Simulate an expert response (replace with actual expert response logic)
        simulateExpertResponse(userQuestion);
    });

    prevResponseButton.addEventListener("click", function () {
        navigateResponses(-1);
    });

    nextResponseButton.addEventListener("click", function () {
        navigateResponses(1);
    });

    function simulateExpertResponse(question) {
        // Simulate a delay to make it seem like an expert is responding
        setTimeout(function () {
            const expertResponse = "This is an expert's response to your question. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
            responses.push(expertResponse);

            // Display the expert's response
            currentResponseIndex = responses.length - 1;
            displayExpertResponse(currentResponseIndex);

            // Clear the question input
            questionInput.value = "";

            // Enable navigation buttons
            prevResponseButton.removeAttribute("disabled");
            nextResponseButton.removeAttribute("disabled");
        }, 1500); // Simulated delay of 1.5 seconds
    }

    function displayExpertResponse(index) {
        if (index >= 0 && index < responses.length) {
            responseContainer.textContent = responses[index];
        }
    }

    function navigateResponses(offset) {
        const newIndex = currentResponseIndex + offset;

        if (newIndex >= 0 && newIndex < responses.length) {
            currentResponseIndex = newIndex;
            displayExpertResponse(currentResponseIndex);
        }

        // Disable navigation buttons if at the beginning or end
        if (currentResponseIndex === 0) {
            prevResponseButton.setAttribute("disabled", true);
        } else {
            prevResponseButton.removeAttribute("disabled");
        }

        if (currentResponseIndex === responses.length - 1) {
            nextResponseButton.setAttribute("disabled", true);
        } else {
            nextResponseButton.removeAttribute("disabled");
        }
    }
});


// Community blog

// Get all "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more');

// Add a click event listener to each button
readMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Get the corresponding blog post's content
        const blogContent = document.querySelector(`.blog-post:nth-child(${index + 1}) .blog-content`);

        // Toggle the visibility of the blog content
        if (blogContent.style.display === 'block') {
            blogContent.style.display = 'none';
        } else {
            blogContent.style.display = 'block';
        }
    });
});


// Community guidelines js

// Get the modal and the button to open it
const modal = document.getElementById("guidelines-modal");
const button = document.getElementById("read-guidelines-button");

// Get the close button
const closeBtn = document.getElementsByClassName("close")[0];

// Open the modal when the button is clicked
button.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


// User profile
// Get the "Edit Profile" and "Save" buttons
const editButton1 = document.getElementById("edit-profile-button");
const saveButton = document.getElementById("save-button");

// Get the "About Me" textarea
const aboutMeTextarea = document.querySelector("#profile-description textarea");

// Add an event listener to the "Edit Profile" button to enable editing
editButton.addEventListener("click", () => {
    aboutMeTextarea.removeAttribute("readonly");
    saveButton.style.display = "block";
});

// Add an event listener to the "Save" button to save changes
saveButton.addEventListener("click", () => {
    aboutMeTextarea.setAttribute("readonly", "readonly");
    saveButton.style.display = "none";
    // You can add code here to send the updated profile information to the server if needed
});


// Get the "Interests" and "Social Links" sections
const interestsSection = document.getElementById("interests");
const socialLinksSection = document.getElementById("social-links");

// Add an event listener to allow editing of interests
interestsSection.addEventListener("click", () => {
    const interestsList = interestsSection.querySelector("ul");
    interestsList.innerHTML += '<li><input type="text" placeholder="Add an interest"></li>';
});

// Add an event listener to allow editing of social links
socialLinksSection.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        const socialLink = prompt("Enter a new social link:", "");
        if (socialLink) {
            const newLinkItem = document.createElement("li");
            newLinkItem.innerHTML = `<a href="${socialLink}" target="_blank">${socialLink}</a>`;
            socialLinksSection.querySelector("ul").appendChild(newLinkItem);
        }
    }
});

// Get the "Edit Profile" button
const editButton = document.getElementById("edit-profile-button");

// Add an event listener to the "Edit Profile" button to enable editing
editButton.addEventListener("click", () => {
    // Add code here to open an edit profile modal or form
    alert("Editing profile...");
});

// header
// JavaScript for the dropdown menu
document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownContent = document.querySelector(".dropdown-content");

    // Toggle the dropdown menu when the button is clicked
    dropdownBtn.addEventListener("click", function () {
        dropdownContent.classList.toggle("open");
    });

    // Close the dropdown menu when clicking outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches(".dropdown-btn")) {
            if (dropdownContent.classList.contains("open")) {
                dropdownContent.classList.remove("open");
            }
        }
    });

    // Handle city selection
    const cityOptions = document.querySelectorAll(".dropdown-content li");
    cityOptions.forEach(function (cityOption) {
        cityOption.addEventListener("click", function () {
            const selectedCity = cityOption.textContent;
            dropdownBtn.textContent = selectedCity;
            dropdownContent.classList.remove("open");
        });
    });
});

