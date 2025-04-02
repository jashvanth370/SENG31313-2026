// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Project filtering
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Form validation
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
