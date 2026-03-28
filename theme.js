// Toggle entre modo claro e escuro
(function () {
    const body = document.body;
    const toggle = document.getElementById('theme-toggle');

    if (!toggle) return;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    function setLightMode() {
        body.classList.add('light-mode');
        toggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }

    function setDarkMode() {
        body.classList.remove('light-mode');
        toggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }

    function applyTheme(theme) {
        if (theme === 'light') {
            setLightMode();
        } else {
            setDarkMode();
        }
    }

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    function animateToggle() {
        toggle.classList.add('animating');
        toggle.addEventListener('animationend', () => {
            toggle.classList.remove('animating');
        }, { once: true });
    }

    toggle.addEventListener('click', function () {
        animateToggle();

        if (body.classList.contains('light-mode')) {
            setDarkMode();
        } else {
            setLightMode();
        }
    });
})();