(function () {
    function applyTheme(name) {
        var theme = window.__THEMES[name];
        if (!theme) return;
        var root = document.documentElement.style;
        root.setProperty('--accent', theme.accent);
        root.setProperty('--accent-2', theme.accent2);
        root.setProperty('--dark', theme.dark);
        document.querySelectorAll('.theme-swatch').forEach(function (swatch) {
            swatch.classList.toggle('active', swatch.dataset.theme === name);
        });
    }

    function initThemeSwitcher() {
        applyTheme(localStorage.getItem('portfolio-theme') || 'ocean');

        var switcher = document.getElementById('themeSwitcher');
        var toggle = document.getElementById('themeToggle');
        if (!switcher || !toggle) return;

        toggle.addEventListener('click', function () {
            switcher.classList.toggle('open');
        });

        switcher.querySelectorAll('.theme-swatch').forEach(function (swatch) {
            swatch.addEventListener('click', function () {
                var name = swatch.dataset.theme;
                applyTheme(name);
                localStorage.setItem('portfolio-theme', name);
            });
        });

        document.addEventListener('click', function (e) {
            if (!switcher.contains(e.target)) switcher.classList.remove('open');
        });
    }

    function initReveals() {
        var revealEls = document.querySelectorAll('.reveal');
        var skillBars = document.querySelectorAll('.skill-level');

        if (!('IntersectionObserver' in window)) {
            revealEls.forEach(function (el) { el.classList.add('revealed'); });
            skillBars.forEach(function (bar) { bar.style.width = bar.dataset.level + '%'; });
            return;
        }

        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.15 });

        revealEls.forEach(function (el, i) {
            el.style.transitionDelay = (i % 6) * 0.08 + 's';
            revealObserver.observe(el);
        });

        var skillObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.style.width = entry.target.dataset.level + '%';
                skillObserver.unobserve(entry.target);
            });
        }, { threshold: 0.4 });

        skillBars.forEach(function (bar) { skillObserver.observe(bar); });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initThemeSwitcher();
        initReveals();
    });
})();
