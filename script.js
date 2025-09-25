// === Section Toggle Logic ===
// When a section header is clicked, it toggles its content open/closed.
// All other sections close automatically.
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


// === Smooth Scroll to Section ===
// Scrolls smoothly to a section with the given ID.
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({behavior: 'smooth'});
}


// === Navbar Reveal on Page Load ===
// Adds a 'visible' class to the navbar after a short delay for a fade-in effect.
window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    setTimeout(() => {
        navbar.classList.add('visible');
    }, 300);
});


// === Project Card Transition ===
// When a project card is clicked, fades out the page before navigating.
document.querySelectorAll('.project-card').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = this.href;
        }, 500);
    });
});


// === Back Arrow Transition ===
// Same fade-out effect when clicking a back arrow link.
const backArrow = document.getElementById('backArrow');

backArrow.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = this.href;
    }, 500);
});


document.querySelector('.section-header').addEventListener('click', function () {
    const section = this.closest('.section-block');
    const content = section.querySelector('.section-content');

    // Toggle open class
    content.classList.toggle('open');

    // Wait for transition to finish, then scroll
    setTimeout(() => {
        section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 500); // match your CSS transition duration
});


function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

// Auto-close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('show');
    });
});

function toggleIcons() {
    const icons = document.querySelector('.floating-icons');
    icons.classList.toggle('show');
}


// Get the actual viewport height and set it as a CSS variable
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


