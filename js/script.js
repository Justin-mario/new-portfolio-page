// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
        
// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real scenario, you would send this data to a server
    // For this demo, we'll just show an alert
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    
    // Reset form
    document.getElementById('contactForm').reset();
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

const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalIcon = document.getElementById('modalIcon');
    const modalRole = document.getElementById('modalRole');
    const modalDuration = document.getElementById('modalDuration');
    const modalClient = document.getElementById('modalClient');
    const modalTeam = document.getElementById('modalTeam');
    const modalTech = document.getElementById('modalTech');
    
    // Project data
    const projects = {
        1: {
            title: "Lecturer in Computing",
            description: "As the lead instructor for T-Level Digital Production & Design at Milton Keynes College, I designed and implemented a curriculum that bridges academic concepts with real-world industry needs...",
            iconClass: "fas fa-chalkboard-teacher",
            role: "Lead Instructor",
            duration: "Sept 2024 - Present",
            client: "Milton Keynes College",
            team: "12 students per cohort",
            technologies: ["Curriculum Design", "Agile Methodologies", "STEM Education"]
        },
        2: {
            title: "Coding Club Instructor",
            description: "At U Teach Mi, I facilitated engaging hands-on coding sessions, digital art workshops, and game development projects for diverse student groups...",
            iconClass: "fas fa-laptop-code",
            role: "Instructor",
            duration: "Apr 2024 - Aug 2024",
            client: "U Teach Mi",
            team: "15-20 students per session",
            technologies: ["Python", "Scratch", "Game Development"]
        },
        3: {
            title: "Software Engineer",
            description: "At RoadPadi, I developed scalable web applications and RESTful APIs for enterprise clients in the transportation sector...",
            iconClass: "fas fa-server",
            role: "Backend Developer",
            duration: "Mar 2021 - Jul 2023",
            client: "RoadPadi",
            team: "8 members",
            technologies: ["Node.js", "Express", "MongoDB", "AWS"]
        },
        4: {
            title: "Professional Certifications",
            description: "I hold multiple Microsoft certifications including Azure AI Engineer Associate and Azure AI Fundamentals...",
            iconClass: "fas fa-certificate",
            role: "Candidate",
            duration: "Ongoing",
            client: "Personal Development",
            team: "Individual",
            technologies: ["Azure AI", "Prompt Engineering", "AgilePM", "PMP"]
        }
    };
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const projectCard = this.closest('.project-card');
            const projectId = projectCard.getAttribute('data-id');
            const project = projects[projectId];
            
            // Populate modal with project data
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalIcon.className = project.iconClass;
            modalRole.textContent = project.role;
            modalDuration.textContent = project.duration;
            modalClient.textContent = project.client;
            modalTeam.textContent = project.team;
            
            // Clear and repopulate technologies
            modalTech.innerHTML = '';
            project.technologies.forEach(tech => {
                const tag = document.createElement('span');
                tag.className = 'tech-tag';
                tag.textContent = tech;
                modalTech.appendChild(tag);
            });
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close modal functionality
    document.querySelector('.close-modal').addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close modal when clicking outside content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // NEW: CV Download functionality
    document.querySelector('.download-cv').addEventListener('click', function(e) {
        e.preventDefault();
        // In a real implementation, this would download your PDF file:
        // window.location.href = 'path/to/your-cv.pdf';
        
        // For demo purposes, show a message
        alert('CV download would start here. In a real implementation, this would download your PDF file.');
    });