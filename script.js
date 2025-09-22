// Section toggle logic using class-based transitions
document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        document.querySelectorAll('.section-content').forEach(c => {
            if (c !== content) {
                c.classList.remove('open');
            }
        });

        content.classList.toggle('open');
    });
});


// Smooth scroll to section
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Toggle dropdown menu
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Smooth page transition for project links
document.querySelectorAll('.project-link, #backArrow').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = this.href;
        }, 500); // match transition duration
    });
});

// Auto-open section if hash is present (e.g. #projects)
window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;
    if (hash) {
        const section = document.querySelector(hash);
        const header = section?.querySelector('.section-header');
        if (header) {
            header.click(); // simulate click to expand section
        }
    }
});

    window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    setTimeout(() => {
    navbar.classList.add('visible');
}, 300); // delay for dramatic effect
});
