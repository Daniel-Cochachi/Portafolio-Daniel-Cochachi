/* Toggle Menu Logic */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll Spy & Sticky Navbar */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) activeLink.classList.add('active');
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Typewriter Effect */
const typingText = document.querySelector('.typing-text');
const words = ["Freelancer", "Creador de Landing Pages", "Soluciones para Negocios", "Desarrollador Web"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    if (!typingText) return;
    const currentChar = currentWord.substring(0, charIndex);
    typingText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;

        if (!isDeleting) {
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        }

        setTimeout(typeEffect, isDeleting ? 100 : 1200);
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);


/* Animation on Scroll using Intersection Observer */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        } else {
            entry.target.classList.remove('show-animate');
        }
    });
}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll('.animate-scroll');
hiddenElements.forEach((el) => observer.observe(el));
