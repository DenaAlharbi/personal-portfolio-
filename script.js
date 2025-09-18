document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content.style.maxHeight;

        // Collapse all sections first
        document.querySelectorAll('.section-content').forEach(c => {
            c.style.maxHeight = null;
            c.style.opacity = 0;
        });

        // Expand clicked section
        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.opacity = 1;
        }
    });
});

