// Projects Page Functionality with Modal
document.addEventListener('DOMContentLoaded', function() {
    // Project Data with detailed information
    const projectsData = [
        {
            id: 1,
            title: "SmartGear Online Store",
            description: "Designed and implemented a payment checkout system for a fictional e-commerce platform. Created intuitive UI/UX flows that ensured seamless customer experience and won first place in the Heidelberg Hub hackathon, UENR 2025.",
            detailedDescription: "This project involved creating a complete e-commerce solution with focus on user experience and secure payment processing. I led the UI/UX design team, creating wireframes, prototypes, and conducting user testing to ensure optimal checkout flow.",
            category: ["web", "design", "hackathon"],
            technologies: ["Figma", "UI/UX", "Payment Systems", "User Research"],
            date: "July 2025",
            role: "UI/UX Designer",
            badge: "Hackathon Winner",
            featured: true,
            githubUrl: "https://github.com/Elias512/Heidelberg_Hackathon_Smart-Gear.git",
            images: [ 
                "Account Page.jpg",
                "Checkout Page.jpg",
                "Landing Page.jpg",
                "Login Page.jpg",
                "Product Details Page.jpg",
                "Purchase State.jpg",
                "Shopping Cart Empty.jpg"

            ],
            features: [
                "Secure payment gateway integration",
                "Responsive design for all devices",
                "User-friendly checkout process",
                "Real-time inventory management"
            ]
        },
        {
            id: 2,
            title: "Employee Performance Management System",
            description: "Full-stack web application for managing employee performance assessments.",
            detailedDescription: "A comprehensive system that allows companies to track employee performance, set goals, and provide feedback. Features include automated reporting, performance analytics, and manager dashboards.",
            category: ["web", "database"],
            technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
            date: "Jun-Aug 2024",
            role: "Full-stack Developer",
            badge: "Full-stack Development",
            featured: true,
            githubUrl: "https://github.com/Elias512/Employee-Performance-Management-System.git",
            images: [
                "EPMS1.png",
                "EPMS2.png",
                "EPMS3.png"
            ],
            features: [
                "User authentication and authorization",
                "Performance tracking and reporting",
                "Feedback submission system",
                "Admin dashboard with analytics"
            ]
        },
        {
            id: 3,
            title: "Financial Aid Management System",
            description: "Led database design and implementation for a financial aid tracking system.",
            detailedDescription: "Database system designed to streamline financial aid processes for educational institutions. Includes applicant tracking, award management, and disbursement scheduling.",
            category: ["database"],
            technologies: ["MySQL", "Database Design", "ER Modeling", "Normalization"],
            date: "Feb-Apr 2024",
            role: "Database Lead",
            badge: "Database Design",
            featured: true,
            githubUrl: "https://github.com/yourusername/financial-aid-system",
            images: [
                "project3-image1.jpg",
                "project3-image2.jpg",
                "project3-image3.jpg"
            ],
            features: [
                "ER diagram design and implementation",
                "Database normalization",
                "Query optimization",
                "Data integrity constraints"
            ]
        },
        {
            id: 4,
            title: "Mobile & Web App Interfaces",
            description: "Professional UX/UI design work during internship.",
            detailedDescription: "Created user-centered designs for various client projects, focusing on usability and accessibility. Conducted user research and iterative testing to refine designs.",
            category: ["design"],
            technologies: ["Figma", "Adobe XD", "User Research", "Prototyping", "Photoshop"],
            date: "Oct-Dec 2023",
            role: "UX/UI Designer",
            badge: "Professional Internship",
            featured: true,
            githubUrl: "https://github.com/yourusername/design-portfolio",
            images: [
                "project4-image1.jpg",
                "project4-image2.jpg"
            ],
            features: [
                "Wireframing and prototyping",
                "User testing and feedback integration",
                "Design system creation",
                "Accessibility compliance"
            ]
        },
        {
            id: 5,
            title: "Ethical Hacking Toolkit",
            description: "A collection of Python scripts for network scanning and vulnerability assessment.",
            detailedDescription: "Educational toolkit designed for cybersecurity students to learn about network security, penetration testing, and vulnerability assessment in a controlled environment.",
            category: ["security"],
            technologies: ["Python", "Kali Linux", "Network Security", "Penetration Testing"],
            date: "Academic Project",
            role: "Security Developer",
            badge: "Security Tools",
            featured: false,
            githubUrl: "https://github.com/yourusername/ethical-hacking-toolkit",
            images: [
                "project5-image1.jpg",
                "project5-image2.jpg"
            ],
            features: [
                "Port scanning capabilities",
                "Vulnerability assessment",
                "Network mapping",
                "Educational documentation"
            ]
        },
        {
            id: 6,
            title: "SecureAuth Web App",
            description: "Full-stack web application demonstrating secure authentication practices.",
            detailedDescription: "A demonstration application showcasing modern security practices including JWT authentication, password hashing, CSRF protection, and secure session management.",
            category: ["web", "security"],
            technologies: ["Next.js", "Node.js", "JWT", "Web Security", "MongoDB"],
            date: "Security Project",
            role: "Full-stack Developer",
            badge: "Web Security",
            featured: false,
            githubUrl: "https://github.com/yourusername/secureauth-app",
            images: [
                "project6-image1.jpg",
                "project6-image2.jpg",
                "project6-image3.jpg"
            ],
            features: [
                "JWT-based authentication",
                "Password hashing with bcrypt",
                "CSRF protection",
                "Secure session management"
            ]
        }
    ];

    // Get DOM elements
    const projectsGrid = document.getElementById('projects-grid');
    const projectCount = document.getElementById('project-count');
    const searchInput = document.getElementById('project-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const techTags = document.querySelectorAll('.tech-tag');

    // Filter states
    let currentFilter = 'all';
    let currentSearch = '';
    let currentTechFilters = [];
    let currentImageIndex = 0;
    let imageInterval;

    // Initialize the page
    renderProjects(projectsData);
    addClearAllButton();
    createProjectModal();

    // Search functionality
    searchInput.addEventListener('input', function(e) {
        currentSearch = e.target.value.toLowerCase();
        filterProjects();
    });

    // Category filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            filterProjects();
        });
    });

    // Technology filter functionality
    techTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
            const tech = this.getAttribute('data-tech');
            
            if (this.classList.contains('active')) {
                if (!currentTechFilters.includes(tech)) {
                    currentTechFilters.push(tech);
                }
            } else {
                currentTechFilters = currentTechFilters.filter(t => t !== tech);
            }
            
            filterProjects();
        });
    });

    // Filter projects based on current criteria
    function filterProjects() {
        const filteredProjects = projectsData.filter(project => {
            const categoryMatch = currentFilter === 'all' || project.category.includes(currentFilter);
            const searchMatch = currentSearch === '' || 
                              project.title.toLowerCase().includes(currentSearch) ||
                              project.description.toLowerCase().includes(currentSearch) ||
                              project.technologies.some(tech => tech.toLowerCase().includes(currentSearch));
            const techMatch = currentTechFilters.length === 0 ||
                            currentTechFilters.some(selectedTech => 
                                project.technologies.some(projectTech => 
                                    projectTech.toLowerCase().includes(selectedTech)
                                )
                            );
            
            return categoryMatch && searchMatch && techMatch;
        });

        renderProjects(filteredProjects);
    }

    // Render projects to the grid
    function renderProjects(projects) {
        projectsGrid.innerHTML = '';
        projectCount.textContent = projects.length;
        
        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });

        // Add click event to view details buttons
        document.querySelectorAll('.btn-view-details').forEach(button => {
            button.addEventListener('click', function() {
                const projectId = parseInt(this.getAttribute('data-project'));
                openProjectModal(projectId);
            });
        });
    }

    // Create HTML for a project card
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category.join(' '));
        
        card.innerHTML = `
            <div class="project-image">
                <div class="project-badge">${project.badge}</div>
                ${project.featured ? '<div class="featured-badge">Featured</div>' : ''}
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
                </div>
                <div class="project-meta">
                    <span class="project-date">${project.date}</span>
                    <span class="project-role">${project.role}</span>
                </div>
                <div class="project-actions">
                    <button class="btn-view-details" data-project="${project.id}">View Details</button>
                </div>
            </div>
        `;

        return card;
    }

    // Create project modal HTML
    function createProjectModal() {
        const modalHTML = `
            <div id="project-modal" class="project-modal">
                <div class="modal-overlay"></div>
                <div class="modal-content">
                    <button class="modal-close">&times;</button>
                    <div class="modal-body">
                        <div class="modal-images">
                            <div class="image-carousel">
                                <img id="modal-main-image" src="" alt="Project Image">
                                <button class="carousel-prev">‹</button>
                                <button class="carousel-next">›</button>
                                <div class="carousel-indicators"></div>
                            </div>
                        </div>
                        <div class="modal-details">
                            <h2 id="modal-title"></h2>
                            <div class="modal-badge" id="modal-badge"></div>
                            <p id="modal-description"></p>
                            
                            <div class="modal-features">
                                <h3>Key Features</h3>
                                <ul id="modal-features-list"></ul>
                            </div>
                            
                            <div class="modal-technologies">
                                <h3>Technologies Used</h3>
                                <div id="modal-tech-list"></div>
                            </div>
                            
                            <div class="modal-meta">
                                <div class="meta-item">
                                    <strong>Date:</strong> <span id="modal-date"></span>
                                </div>
                                <div class="meta-item">
                                    <strong>Role:</strong> <span id="modal-role"></span>
                                </div>
                            </div>
                            
                            <div class="modal-actions">
                                <a href="#" id="modal-github-link" class="btn btn-primary" target="_blank">
                                    <i class="fab fa-github"></i> View on GitHub
                                </a>
                                <button class="btn btn-secondary modal-close-btn">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Add modal event listeners
        const modal = document.getElementById('project-modal');
        const closeButtons = document.querySelectorAll('.modal-close, .modal-close-btn, .modal-overlay');
        
        closeButtons.forEach(button => {
            button.addEventListener('click', closeProjectModal);
        });
        
        // Carousel controls
        document.querySelector('.carousel-prev').addEventListener('click', showPreviousImage);
        document.querySelector('.carousel-next').addEventListener('click', showNextImage);
        
        // Close modal on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeProjectModal();
            }
        });
    }

    // Open project modal with specific project data
    function openProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;
        
        const modal = document.getElementById('project-modal');
        currentImageIndex = 0;
        
        // Populate modal content
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-badge').textContent = project.badge;
        document.getElementById('modal-description').textContent = project.detailedDescription;
        document.getElementById('modal-date').textContent = project.date;
        document.getElementById('modal-role').textContent = project.role;
        document.getElementById('modal-github-link').href = project.githubUrl;
        
        // Populate features list
        const featuresList = document.getElementById('modal-features-list');
        featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
        
        // Populate technologies
        const techList = document.getElementById('modal-tech-list');
        techList.innerHTML = project.technologies.map(tech => `<span class="tech-pill">${tech}</span>`).join('');
        
        // Setup image carousel
        setupImageCarousel(project.images);
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Start automatic image rotation
        startImageRotation(project.images);
    }

    // Close project modal
    function closeProjectModal() {
        const modal = document.getElementById('project-modal');
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        clearInterval(imageInterval);
    }

    // Setup image carousel
    function setupImageCarousel(images) {
        const mainImage = document.getElementById('modal-main-image');
        const indicators = document.querySelector('.carousel-indicators');
        
        if (images && images.length > 0) {
            mainImage.src = `./Images/Projects/${images[0]}`;
            mainImage.alt = 'Project screenshot';
            
            // Create indicators
            indicators.innerHTML = '';
            images.forEach((_, index) => {
                const indicator = document.createElement('div');
                indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
                indicator.addEventListener('click', () => showImage(index, images));
                indicators.appendChild(indicator);
            });
        } else {
            // Use placeholder if no images
            mainImage.src = './Images/Projects/placeholder.jpg';
            mainImage.alt = 'Project placeholder';
            indicators.innerHTML = '';
        }
    }

    // Show specific image in carousel
    function showImage(index, images) {
        currentImageIndex = index;
        const mainImage = document.getElementById('modal-main-image');
        const indicators = document.querySelectorAll('.indicator');

        mainImage.src = `./Images/Projects/${images[index]}`;

        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    // Show next image
    function showNextImage() {
        const projectId = getCurrentProjectId();
        const project = projectsData.find(p => p.id === projectId);
        if (!project || !project.images) return;
        
        currentImageIndex = (currentImageIndex + 1) % project.images.length;
        showImage(currentImageIndex, project.images);
        resetImageRotation(project.images);
    }

    // Show previous image
    function showPreviousImage() {
        const projectId = getCurrentProjectId();
        const project = projectsData.find(p => p.id === projectId);
        if (!project || !project.images) return;
        
        currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
        showImage(currentImageIndex, project.images);
        resetImageRotation(project.images);
    }

    // Start automatic image rotation
    function startImageRotation(images) {
        if (images && images.length > 1) {
            imageInterval = setInterval(() => {
                showNextImage();
            }, 5000); // Change image every 5 seconds
        }
    }

    // Reset image rotation timer
    function resetImageRotation(images) {
        clearInterval(imageInterval);
        startImageRotation(images);
    }

    // Get current project ID from modal
    function getCurrentProjectId() {
        // This would need to be stored when opening the modal
        // For simplicity, we'll find it by title match
        const title = document.getElementById('modal-title').textContent;
        const project = projectsData.find(p => p.title === title);
        return project ? project.id : null;
    }

    // Add Clear All button for technology filters
    function addClearAllButton() {
        const techTagsContainer = document.querySelector('.tech-tags');
        const clearButton = document.createElement('span');
        
        clearButton.className = 'tech-tag clear-all';
        clearButton.textContent = 'Clear All';
        
        clearButton.addEventListener('click', function() {
            techTags.forEach(tag => tag.classList.remove('active'));
            currentTechFilters = [];
            filterProjects();
        });
        
        techTagsContainer.appendChild(clearButton);
    }
});


// Logo scroll to top
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Update footer year dynamically
// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

