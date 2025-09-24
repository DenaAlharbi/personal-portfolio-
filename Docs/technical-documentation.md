# 📚 Technical Documentation

### Project: Personal Portfolio Website
**Author:** Dena Alharbi  
**Date:** 24 September 2025

---

## 🧩 Project Structure

```
assignment-1/
├── README.md
├── index.html
├── script.js
├── css/
│   └── styles.css
│   └── projectstyle.css
├── assets/
│   └── images/
│   └── Projects Attachments
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── HTML/
│   ├── project1.html
│   ├── project2.html
│   └── project3.html
└── .gitignore

```

---

## 🖼️ UI Components

### Navbar
- Fixed top navigation bar with anchor links to each section
- Smooth scroll behavior using `scrollIntoView`
- Responsive layout using Flexbox

### Sections
- Each section (`.section-block`) includes a `.section-header` and `.section-content`
- Content expands with CSS transitions (`max-height`, `opacity`)
- Honors section auto-scrolls into view after opening for better UX

### Modals & Dropdowns
- Custom modal for contact form
- Dropdowns styled with SCSS and animated using `transform` and `opacity`

---

## 🎨 Styling Approach

- **SCSS Modularization**: Styles are split into reusable components for maintainability
- **Responsive Design**: Uses Flexbox, media queries, and `max-width` constraints
- **Transitions**: Smooth opening effects via `transition` and `.open` class toggling
- **Typography**: Balanced font pairings with emphasis on readability and branding

---

## 🧠 JavaScript Logic

### Section Toggle

```javascript
document.querySelectorAll('.section-header').forEach(header => {
  header.addEventListener('click', () => {
    const section = header.closest('.section-block');
    const content = section.querySelector('.section-content');

    // Collapse others
    document.querySelectorAll('.section-content').forEach(c => c.classList.remove('open'));

    // Expand selected
    content.classList.add('open');

    // Scroll into view
    setTimeout(() => {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
  });
});

```
## 🔗 Navigation Link Behavior

- Anchor links (`href="#section-id"`) scroll to target sections
- Honors section auto-expands when clicked via delayed JavaScript trigger

---

## 🛠️ Technologies Used

| Category     | Tools & Libraries               |
|--------------|----------------------------------|
| Markup       | HTML5                            |
| Styling      | CSS3, SCSS                       |
| Scripting    | Vanilla JavaScript               |
| Design       | Figma (for mockups), custom branding |
| Deployment   | GitHub Pages                     |

---
## 🔍 Known Issues

- Honors section may require scroll adjustment on smaller screens
- Modal responsiveness may vary on older browsers

---

## 🧠 Future Enhancements

- Add dark mode toggle
- Integrate contact form with backend (e.g., Formspree or Firebase)
- Add project filtering with JavaScript
- Improve accessibility with ARIA attributes
