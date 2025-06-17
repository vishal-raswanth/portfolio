// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";

  // Reveal on scroll both directions
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    // Only reveal if element is within viewport
    if (elementTop < windowHeight - 100 && elementBottom > 100) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});

// Scroll to top button click
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }
  