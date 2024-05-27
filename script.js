const buttons = [
    { label: "Infrastructure Classification", link: "https://code.earthengine.google.co.in/?accept_repo=users/vishalmaurya850/Real_Time_Monitoring_Land" },
    { label: "Building Detection", link: "https://code.earthengine.google.com/977fc67720636b77911611d6e12fd5ca" },
    { label: "Hospitals Infrastructure Area", link: "hospitalarea.html" },
    { label: "One-Tap Emergency Button", link: "hospital.html" }
  ];

const buttonContainer = document.getElementById('button-container');

// Function to generate dynamic buttons
buttons.forEach((button, index) => {
    const btn = document.createElement("button");
    btn.textContent = button.label;
    btn.onclick = () => {
      window.open(button.link, "_blank");
    };
    buttonContainer.appendChild(btn);
  });
window.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const links = navbar.getElementsByTagName("a");
  
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function(event) {
        const currentActive = document.getElementsByClassName("active")[0];
        currentActive.className = currentActive.className.replace(" active", "");
        this.className += " active";
        event.preventDefault();
      });
    }
  });
// server.js
const express = require("express");
const app = express();

app.post("/submit-feedback", function(req, res) {
  // Process form data
  var formData = req.body;
  console.log(formData);
  // Store form data in database or send to email
  res.send("Feedback submitted successfully!");
});

app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
// script.js
const footer = document.getElementById("footer");

// generate footer content dynamically
const date = new Date();
const yearElement = document.getElementById('current-year');
const timeElement = document.getElementById('current-time');

yearElement.textContent = date.getFullYear();