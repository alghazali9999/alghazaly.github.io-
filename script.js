

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
