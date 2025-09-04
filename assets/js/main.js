//pre loader
// =====================================================================


/* ================================
   🚀 Built by Abhinav Kumar P A  
   ✨ Portfolio Project | 2025  
================================  */


const greetings = [
    "Hello", // English
    "नमस्ते" , // Hindi
    "Hola", // Spanish
    "Bonjour", // French
    "Ciao", // Italian
    "Hallo", // German
    "Olá", // Portuguese
    "Привет", // Russian
    "你好", // Chinese (Mandarin)
    "こんにちは", // Japanese
    "ഹലോ" , // Malayalam
     "नमस्ते", // Hindi
    "வணக்கம்", // Tamil
    "নমস্কার", // Bengali
    "నమస్కారం", // Telugu
    "ನಮಸ್ಕಾರ", // Kannada
    "नमस्कार", // Marathi

];


// Target the loading text
const loadingText = document.getElementById('loading-text');
let currentGreeting = 0;

// Change greeting every .1 seconds
const changeGreeting = () => {
    loadingText.textContent = greetings[currentGreeting];
    currentGreeting = (currentGreeting + 1) % greetings.length;
};

// Call the function every .1 seconds (matching the CSS animation)
setInterval(changeGreeting, 100);

// Hide the preloader and show content after 2 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000);
});


// Hamburger Menu Toggle
// ========================================================================================
const mobileMenu = document.getElementById('mobile-menu');
const navLink = document.querySelector('.nav-links ul');

// Toggle mobile menu open/close
mobileMenu.addEventListener('click', () => {
    navLink.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});

// Optional: Close menu when a link is clicked (better UX)
navLink.querySelectorAll('li').forEach(link => {
    link.addEventListener('click', () => {
        navLink.classList.remove('active');
        mobileMenu.classList.remove('is-active');
    });
});


// Smooth Scroll Effect for Navbar Links with Page Load Support
// =========================================================================================================

// Select all navbar links and sections
const navLinks = document.querySelectorAll(".nav-links li");
const sections = document.querySelectorAll("section");

// Function to highlight the active link
function highlightActiveLink() {
    let currentSection = "";

    // Find which section is currently in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust for navbar height
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    // Loop through each link and apply/remove 'active' class
    navLinks.forEach((link) => {
        const anchor = link.querySelector("a");
        link.classList.remove("active");

        if (anchor.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
}

// Smooth scroll behavior for clicking on nav links
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.querySelector("a").getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: "smooth"
        });
    });
});

// Ensure the active link is highlighted on scroll and on page load
window.addEventListener("scroll", highlightActiveLink);
window.addEventListener("load", () => {
    highlightActiveLink();

    // Smooth scroll to the section if loaded with a hash
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });
        }
    }
});


// model pop template for portfolio
// =========================================================================================================


document.querySelectorAll('.folio-list__item-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetModal = document.querySelector(link.getAttribute('href'));
        targetModal.style.display = 'block';
    });
});

document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = closeBtn.closest('.bgmodal-popup');
        modal.style.display = 'none';
    });
});



// ================================
//    🚀 Built by Abhinav Kumar P A  
//    ✨ Portfolio Project | 2025  
// ================================