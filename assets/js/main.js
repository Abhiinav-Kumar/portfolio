// lpre loader

const greetings = [
    "Hello", // English
    "ഹലോ" , // Malayalam
    "नमस्ते" , // Hindi
    "வணக்கம்" , // Tamil
    "নমস্কার" , // Bengali
    "నమస్కారం" , // Telugu
    "ನಮಸ್ಕಾರ" , // Kannada
    "नमस्कार" , // Marathi
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ" , // Punjabi
    "નમસ્તે" , // Gujarati
    "ନମସ୍କାର" , // Odia
    "नमस्कार" , // Sanskrit
    "ஹலோ" , // Tamil (alternative)
    "খোদা হাফেজ" , // Assamese
    "जय जिनेंद्र" , // Jain (Hindi dialect)
    "राम राम" , // Rajasthani
    "खम्मा घणी" , // Marwari
    "আদাব" , // Urdu (Bengal dialect)
    "ସୁନ୍ଦର ଦିନ" , // Odia (alternative)

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
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links ul');

// Toggle mobile menu open/close
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});

// Optional: Close menu when a link is clicked (better UX)
navLinks.querySelectorAll('li').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('is-active');
    });
});



// Smooth Scroll Effect for Navbar Links
// ========================================================
// Select all navbar links and sections
const navLink = document.querySelectorAll(".nav-links li");
const sections = document.querySelectorAll("section");

// Function to highlight the active link
function highlightActiveLink() {
    let currentSection = "";

    // Find which section is currently in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    // Loop through each link and apply/remove 'active' class
    navLink.forEach((link) => {
        const anchor = link.querySelector("a");
        link.classList.remove("active");

        if (anchor.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
}

// Run on scroll and on page load
window.addEventListener("scroll", highlightActiveLink);
window.addEventListener("load", highlightActiveLink);


