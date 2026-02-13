document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;

    // Check for saved theme preference or default to day
    const savedTheme = localStorage.getItem('theme') || 'day';
    root.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        let newTheme;

        if (currentTheme === 'day') {
            newTheme = 'night';
        } else {
            newTheme = 'day';
        }

        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Fade sections in as they enter viewport
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.fade-in-scroll').forEach(el => {
        observer.observe(el);
    });
});
