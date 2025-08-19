// Filter skills
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter skills
            skillCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hide');
                    card.classList.add('show');
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.classList.remove('hide');
                        card.classList.add('show');
                    } else {
                        card.classList.remove('show');
                        card.classList.add('hide');
                    }
                }
            });
        });
    });
});


// Skills Filter and Show All/Show Less functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    const showAllBtn = document.getElementById('show-all-btn');
    const showLessBtn = document.getElementById('show-less-btn');
    let allSkillsRevealed = false;
    let currentFilter = 'all';
    
    // Store initial state of cards
    const initialVisibleCards = [];
    skillCards.forEach(card => {
        if (card.classList.contains('show')) {
            initialVisibleCards.push(card);
        }
    });
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            currentFilter = button.getAttribute('data-filter');
            
            // Filter skills
            skillCards.forEach(card => {
                if (currentFilter === 'all') {
                    if (allSkillsRevealed) {
                        card.classList.remove('hidden');
                    } else {
                        // Show only limited selection for "All Skills"
                        if (initialVisibleCards.includes(card)) {
                            card.classList.remove('hidden');
                        } else {
                            card.classList.add('hidden');
                        }
                    }
                } else {
                    if (card.getAttribute('data-category') === currentFilter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
            
            // Update button visibility
            updateButtonVisibility();
        });
    });
    
    // Show All functionality
    showAllBtn.addEventListener('click', () => {
        allSkillsRevealed = true;
        
        // Show all skills
        skillCards.forEach(card => {
            card.classList.remove('hidden');
        });
        
        // Toggle button visibility
        updateButtonVisibility();
    });
    
    // Show Less functionality
    showLessBtn.addEventListener('click', () => {
        allSkillsRevealed = false;
        
        // Hide skills that should be initially hidden
        skillCards.forEach(card => {
            if (!initialVisibleCards.includes(card)) {
                card.classList.add('hidden');
            }
        });
        
        // Toggle button visibility
        updateButtonVisibility();
        
        // Scroll to skills section for better UX
        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Function to update button visibility
    function updateButtonVisibility() {
        if (currentFilter === 'all') {
            if (allSkillsRevealed) {
                showAllBtn.style.display = 'none';
                showLessBtn.style.display = 'inline-block';
            } else {
                showAllBtn.style.display = 'inline-block';
                showLessBtn.style.display = 'none';
            }
        } else {
            showAllBtn.style.display = 'none';
            showLessBtn.style.display = 'none';
        }
    }
    
    // Initialize button visibility
    updateButtonVisibility();
});

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
