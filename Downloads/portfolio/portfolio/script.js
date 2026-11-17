/* ==============================
   TYPING ANIMATION
================================ */

const typingText = document.getElementById("typingText");

const roles = [
    "Python Backend Developer",
    "AI Enthusiast",
    "Software Developer",
    "Problem Solver"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }

    typingText.textContent = currentRole.substring(
        0,
        characterIndex
    );

    let delay = deleting ? 45 : 90;

    if (!deleting && characterIndex === currentRole.length) {

        deleting = true;

        delay = 1400;

    }

    else if (deleting && characterIndex === 0) {

        deleting = false;

        roleIndex = (roleIndex + 1) % roles.length;

        delay = 400;

    }

    setTimeout(typeEffect, delay);

}

typeEffect();


/* ==============================
   MOBILE NAVIGATION
================================ */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


/* ==============================
   ACTIVE NAVIGATION
================================ */

const sections = document.querySelectorAll("main section[id]");

const navigationLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navigationLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") ===
                    `#${entry.target.id}`) {

                    link.classList.add("active");

                }

            });

        }

    });

}, {
    threshold: 0.25
});

sections.forEach(section => observer.observe(section));


/* ==============================
   PROJECT FILTERS
================================ */

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category = button.dataset.filter;

        projectCards.forEach(card => {

            const projectCategory = card.dataset.category;

            const shouldShow =
                category === "all" ||
                category === projectCategory;

            card.classList.toggle("hidden", !shouldShow);

        });

    });

});


/* ==============================
   CONTACT FORM
================================ */

const contactForm = document.getElementById("contactForm");

const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!contactForm.reportValidity()) {
        return;
    }

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    const recipient = "sharmanamah2005@gmail.com";

    const subject = encodeURIComponent(
        `Portfolio inquiry from ${name}`
    );

    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    formStatus.textContent = "Opening your email application...";

    window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;

});


/* ==============================
   BACK TO TOP
================================ */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==============================
   SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .certificate-card, .timeline-card"
);

const revealObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("revealed");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ==============================
   FOOTER YEAR
================================ */

document.getElementById("year").textContent =
    new Date().getFullYear();