// Mobile menu toggle
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    // Show/hide scroll to top button
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    
    // Reveal animations
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;

        if (elementTop < windowHeight - revealPoint && elementBottom > revealPoint) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
});

// Scroll to top functionality
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuIcon = document.querySelector(".menu-icon");
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("change");
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("navLinks").classList.remove("active");
    document.querySelector(".menu-icon").classList.remove("change");
  });
});
