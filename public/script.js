// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Add scroll functionality to hero buttons
document.getElementById('viewProjectsBtn').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('contactMeBtn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// Update footer year dynamically
// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Logo scroll to top functionality
document.getElementById('logo').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll to top button functionality
const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

scrollTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});