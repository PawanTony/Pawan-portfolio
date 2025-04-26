AOS.init();

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// Scroll smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("active");
  });
});

// Contact form submit (basic)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! (Not really. You can hook this up with Formspree or EmailJS.)");
});

window.addEventListener('click', function () {
  const audio = document.getElementById('bg-music');
  audio.play().catch((err) => {
    console.log("Audio play failed:", err);
  });
}, { once: true });

