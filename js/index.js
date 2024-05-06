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


