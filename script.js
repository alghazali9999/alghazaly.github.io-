// Hero Section //
const textElement = document.getElementById('typing-text');
const texts = ['UI/UX Design', 'Mobile Design', 'Web Design'];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1000;

function type() {
    if (index >= texts.length) index = 0;
    const currentText = texts[index];
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            index++;
            setTimeout(type, pauseTime);
        } else {
            setTimeout(type, deletingSpeed);
        }
    } else {
        textElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(type, pauseTime);
        } else {
            setTimeout(type, typingSpeed);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});
const image = document.querySelector('.image-3d');
const container = document.querySelector('.image-container');

container.addEventListener('mousemove', (e) => {
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const xAxis = (width / 2 - e.offsetX) / 25;
    const yAxis = (height / 2 - e.offsetY) / 25;

    image.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseleave', () => {
    image.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// And Hero Section //

// Hamburger menu //
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const slideMenu = document.getElementById("slide-menu");
    const overlay = document.getElementById("overlay");
    const closeMenu = document.getElementById("close-menu");

    function closeSlideMenu() {
        slideMenu.classList.add("translate-x-full");
        slideMenu.classList.remove("translate-x-0");
        overlay.classList.add("opacity-0");
        overlay.classList.remove("opacity-50");
        overlay.classList.add("pointer-events-none");
        overlay.classList.remove("pointer-events-auto");
    }

    menuToggle.addEventListener("click", function () {
        slideMenu.classList.toggle("translate-x-full");
        slideMenu.classList.toggle("translate-x-0");
        overlay.classList.toggle("opacity-0");
        overlay.classList.toggle("opacity-50");
        overlay.classList.toggle("pointer-events-none");
        overlay.classList.toggle("pointer-events-auto");
    });

    closeMenu.addEventListener("click", closeSlideMenu);
    overlay.addEventListener("click", closeSlideMenu);

    document.addEventListener("click", function (event) {
        if (!slideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            closeSlideMenu();
        }
    });
});

// And Hamburger menu //

// Parralax effect //
window.addEventListener('scroll', function() {
    const parallaxBackground = document.getElementById('parallax-background');
    let scrollPosition = window.pageYOffset;

    // Gerakan latar belakang parallax (semakin besar faktor, semakin kuat efeknya)
    parallaxBackground.style.backgroundPositionX = `${scrollPosition * 0.5}px`;
});

window.addEventListener('scroll', function () {
    const image = document.getElementById('image-wrapper');
    let scrollPosition = window.pageYOffset;
    
    // Atur efek parallax kiri-kanan, angka 0.3 bisa disesuaikan untuk memperhalus efek
    image.style.transform = `translateY(${scrollPosition * 0.1}px)`;
});

// And Parralax effect //

// Header //
window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("bg-zinc-950-transparent");
        header.classList.remove("bg-transparent");
    } else {
        header.classList.add("bg-transparent");
        header.classList.remove("bg-zinc-950-transparent");
    }
});
// And Header //
