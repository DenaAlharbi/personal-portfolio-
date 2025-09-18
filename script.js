document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        document.querySelectorAll('.section-content').forEach(c => {
            if (c !== content) {
                c.style.maxHeight = null;
                c.style.opacity = 0;
            }
        });

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.opacity = 0;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.opacity = 1;
        }
    });
});

// Smooth scroll feature
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}


