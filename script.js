
// script.js - 4D Portfolio Interactions

// Responsive menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.getElementById("gmailForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const userEmail = document.getElementById("userEmail").value;
  
  // Your Gmail address
  const yourEmail = "yourname@gmail.com";  // <-- change this to your own email
  const subject = "Hello from " + userEmail;
  const body = "Hi, I wanted to reach out to you.";

  const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  window.location.href = mailtoLink;
});
