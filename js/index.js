// Create a variable to store the current date
const today = new Date();

// Get the current year
const thisYear = today.getFullYear();

// Select the footer element
const footer = document.querySelector("footer");

// Create a new paragraph element for the copyright text
const copyright = document.createElement("p");

// Set the inner HTML of the copyright element
copyright.innerHTML = `© Your Name ${thisYear}`;

// Append the copyright element to the footer
footer.appendChild(copyright);

// Select the skills section
const skillsSection = document.getElementById("Skills");

// Create an array of skills
const skills = ["UX Research", "Human-centered Design", "JavaScript", "HTML", "CSS", "GitHub"];

// Select the skills list
const skillsList = skillsSection.querySelector("ul");

// Loop through the skills array and create list items
skills.forEach(skill => {
    // Create a new list item element
    const skillItem = document.createElement("li");
    // Set the inner text of the list item to the current skill
    skillItem.innerText = skill;
    // Append the list item to the skills list
    skillsList.appendChild(skillItem);
});

//code to handle form submission and display messages in the list:

document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.forms.leave_message;

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Retrieve form field values
        const userName = messageForm.usersName.value;
        const userEmail = messageForm.usersEmail.value;
        const userMessage = messageForm.usersMessage.value;

        // Clear the form
        messageForm.reset();

        // Display messages in list
        const messageSection = document.querySelector('#messages');
        const messageList = messageSection.querySelector('ul');

        const newMessage = document.createElement('li');
        newMessage.innerHTML = `
            <span>${userName}:</span>
            <span>${userMessage}</span>
        `;

        const editButton = document.createElement('button');
        editButton.innerText = "edit";
        editButton.type = "button";
        editButton.addEventListener('click', function() {
            const newMessageText = prompt("Enter the new message:");
            if (newMessageText) {
                newMessage.querySelector('span:nth-child(2)').textContent = newMessageText;
            }
        });

        newMessage.appendChild(editButton);
        messageList.appendChild(newMessage);

        // Show the messages section
        messageSection.style.display = 'block';
    });
});
