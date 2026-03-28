// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// Form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    alert("Message sent successfully!");

    form.reset();
});

// project Card Animation on Scroll
document.addEventListener("DOMContentLoaded", function () {

    // Project animation
    const cards = document.querySelectorAll(".project-card");

    if (cards.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.2 });

        cards.forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(40px)";
            card.style.transition = "0.6s ease";
            observer.observe(card);
        });
    }

    // Button smooth scroll
    const btn = document.querySelector(".btn");

    if (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const section = document.querySelector("#projects");
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

});