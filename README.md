# **CSEC Portfolio**

README FILE


\[Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-success)
\[Firebase Hosting](https://img.shields.io/badge/Hosting-Firebase-orange)
\[Responsive Design](https://img.shields.io/badge/Design-Responsive-blue)
\[HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat\&logo=html5\&logoColor=white)
\[CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat\&logo=css3\&logoColor=white)
\[JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat\&logo=javascript\&logoColor=black)


A modern, responsive portfolio website showcasing my expertise in cybersecurity, web development, and software engineering.

Built with **HTML**, **CSS**, and J**avaScript**, and deployed seamlessly on **Firebase Hosting**.


**Live Demo**
Visit the live portfolio: \[https://myportfolio-404.web.app](https://myportfolio-404.web.app)


Features
---


- **Responsive Design** : Optimized for desktop, tablet, and mobile devices
- **Dark Theme** : Cybersecurity-focused dark color scheme
- **Interactive Skills Section** : Filterable skills with categories and show/hide functionality
- **Project Showcase** : Dedicated projects page with detailed modals and image carousels
- **Smooth Animations** : CSS transitions and hover effects
- **Contact Form** : Functional contact form with validation
- **SEO Optimized** : Proper meta tags and semantic HTML
- **Fast Loading** : Optimized performance and minimal dependencies


Technologies Used
---

* **Frontend**: HTML5, CSS3, JavaScript (ES6+)
* **Icons**: Font Awesome 6.4.0
* **Hosting**: Firebase Hosting
* **Domain**: Firebase Web App (.web.app)
* **Version Control**: Git \& GitHub


Project Structure
---



my-portfolio-website/

├── .firebaserc                 	# Firebase project configuration

├── firebase.json              	# Firebase hosting settings

├── package-lock.json          	# NPM dependency lock file

├── README.md                  	# Project documentation (this file)

├── public/                    	# Publicly accessible web assets

│   ├── index.html             	# Main landing page

│   ├── projects.html          	# Projects portfolio page

│   ├── style.css              	# Main stylesheet

│   ├── script.js              	# Main JavaScript functionality

│   ├── projects.js            	# Projects-specific JavaScript

│   ├── Images/                	# Image assets folder

│   │   └── (portfolio images, icons, screenshots, etc.)

│   └── Name                   	# (Likely a text file or personal branding asset)

├── .git/                      	# Git version control repository

├── .github/                   	# GitHub-specific configurations

│   └── (GitHub Actions, Issues templates, etc.)

├── .idx/                      	# Development environment configuration

└── .gitignore                 	# Git ignore rules



---



## **Quick Start**

#### **Prerequisites**

* Node.js (for Firebase CLI)
* Firebase account
* Git

##### 




**Local Development**
---


1. Clone the repository
   bash
   git clone https://github.com/Elias512/myportforlio.git
   cd my-portfolio-website



2. **Install Firebase CLI** (if not already installed)

&nbsp;  bash
   npm install -g firebase-tools



3. **Login to Firebase** (if not already logged in)

&nbsp;  bash
   firebase login



4. **Test locally with Firebase Emulators**

&nbsp;  bash
   firebase emulators:start --only hosting



   Visit `http://localhost:5000` to view the site locally.

   

   ##### 

   

   ##### **Deployment**

1. **Deploy to Firebase Hosting**

   bash
   firebase deploy --only hosting
      

2. **Your site will be live at**: `https://myportfolio-404.web.app`

   ## 

   ---

   

   ## **Sections**

   ##### **Homepage (`index.html`)**

* **Hero Section**: Introduction and call-to-action buttons with smooth scrolling
* **Featured Projects**: Highlighted projects with filtering capabilities
* **Skills**: Interactive skills section with category filtering and show/hide functionality
* **Blog**: Latest articles and cybersecurity insights
* **About**: Personal introduction with profile photo
* **Contact**: Contact form and social links

  ### 

  ##### **Projects Page (`projects.html`)**

* **Advanced Filtering**: Filter by category and technology with search functionality
* **Project Modals**: Detailed project views with image carousels and automatic rotation
* **GitHub Integration**: Direct links to project repositories
* **Project Counter**: Live count of filtered projects

  ## 

  ---

  

  ## **Customization**

  ##### **Colors (CSS Variables)**

  The portfolio uses a consistent cybersecurity color scheme:

  css
  :root {
      --primary: #0d1117;      	/\* Dark background \*/
      --secondary: #161b22;    	/\* Secondary dark \*/
      --accent: #238636;       	/\* Green accent \*/
      --accent-light: #2ea043; 	/\* Light green \*/
      --text: #f0f6fc;         	/\* Primary text \*/
      --text-secondary: #c9d1d9; 	/\* Secondary text \*/
      --card-bg: #161b22;      	/\* Card background \*/
      --border: #30363d;       	/\* Border color \*/
  }
  

  ##### **Adding New Projects**

  Edit the `projectsData` array in `projects.js`:

  javascript
  {
      id: 7,
      title: "New Project",
      description: "Project description",
      detailedDescription: "Detailed project description for the modal view",
      category: \["web", "security"],
      technologies: \["React", "Node.js", "MongoDB"],
      date: "Month Year",
      role: "Your Role",
      badge: "Project Type",
      featured: true,
      githubUrl: "https://github.com/yourusername/project",
      images: \["project-image1.jpg", "project-image2.jpg"],
      features: \[
          "Feature 1 description",
          "Feature 2 description",
          "Feature 3 description"
      ]
  }
  

  ### 

  ##### **Adding New Skills**

  Update the skills section in `index.html`:

  html
  <div class="skill-card" data-category="technical">
      <div class="skill-icon">
          <i class="fab fa-react"></i>
      </div>
      <h3>React</h3>
      <div class="skill-tags">
          <span class="skill-tag">Hooks</span>
          <span class="skill-tag">Components</span>
      </div>
      <span class="skill-category">Technical</span>
  </div>
  

  ## 

  ##### **Firebase Configuration**

  The `firebase.json` file includes:

  json
  {
    "hosting": {
      "public": "public",
      "ignore": \[
        "firebase.json",
        "/.\*",
        "/node\_modules/"
      ],
      "rewrites": \[
        {
          "source": "",
          "destination": "/index.html"
        }
      ]
    }
  }
  

  ## 

  ##### **SEO \& Performance**

* **Meta Tags**: Optimized for search engines
* **Open Graph**: Social media sharing support
* **Fast Loading**: Optimized images and efficient CSS/JS
* **Accessibility**: ARIA labels and semantic HTML
* **Mobile-First**: Responsive design approach

  ## 

  ---

  

  ## **Key Features Explained**

  ### 

  ##### **Skills Filtering System**

* Filter skills by category (Technical, Cybersecurity, Design, etc.)
* Show/hide functionality for better user experience
* Visual category badges and technology tags

  ### 

  ##### **Project Management**

* Dedicated projects page with advanced filtering
* Modal popups with image carousels
* GitHub integration for each project
* Search functionality across all projects

  ### 

  ##### **Responsive Design**

* Mobile-first approach
* Flexible grid layouts
* Optimized navigation for mobile devices
* Touch-friendly interface elements

  ## 

  ##### **Contact \& Social Links**

* **Email**: [eliatobaiden@outlook.com](mailto:eliatobaiden@outlook.com)
* **LinkedIn**: [Elijah Baiden](https://www.linkedin.com/in/elijah-baiden-0b795a247)
* **GitHub**: [Elias512](https://github.com/Elias512)
* **Portfolio**: [https://myportfolio-404.web.app](https://myportfolio-404.web.app)

  ## 

  ---

  

  ## **Troubleshooting**

  

  ##### **Common Issues**

1. **Firebase deployment fails**

   bash
   # Re-authenticate
   firebase logout
   firebase login

   # Check project configuration

   firebase use --add
      

2. **Local development issues**

   bash
   # Clear Firebase cache
   firebase cache:clean
      
   # Restart emulators
   firebase emulators:start --only hosting
      

3. **CSS/JS not loading**

   * Check file paths in HTML
   * Verify files are in `public/` directory
   * Check browser console for 404 errors

   ### 

   ##### **Browser Compatibility**

* Chrome (recommended)
* Firefox
* Safari
* Edge

  ## 

  ---

  

  ### **License**

  This project is open source and available under the [MIT License](LICENSE).

  ## 

  ### **Contributing**

  While this is a personal portfolio, feedback and suggestions are welcome! Please feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request with improvements

   ## 

   ### **Acknowledgments**

* **Font Awesome** for the beautiful icons
* **Firebase** for reliable hosting
* **Google Fonts** for typography

  

  ---

  **Built with ❤️ by Elijah Ato Baiden**

  Cybersecurity Student \& Software Developer | Passionate about building secure and resilient systems

  *BSc. Computer Science • University of Energy and Natural Resources • 2022–2026*

  


  


     

  

