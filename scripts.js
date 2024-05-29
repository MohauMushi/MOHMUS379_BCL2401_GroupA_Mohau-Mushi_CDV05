const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".links");

// Toggle the "show-links" class on navLinks container when the hamburger is clicked
hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("show-links");
  });