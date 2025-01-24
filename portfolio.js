
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// skills
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle-container");
  
    circles.forEach((circle) => {
      const percentage = circle.getAttribute("data-percentage");
      circle.style.setProperty("--percentage", percentage);
    });
  });


  // project

  