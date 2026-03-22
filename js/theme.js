// Theme + Nav — loaded in <head> on every page
(function() {

  // ── Theme ──────────────────────────────────────────────────
  var STORAGE_KEY = 'tl-theme';
  function getPreferred() { return localStorage.getItem(STORAGE_KEY) || 'light'; }
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    document.querySelectorAll('.theme-toggle').forEach(function(btn) {
      var icon  = btn.querySelector('.theme-toggle-icon');
      var label = btn.querySelector('.theme-toggle-label');
      if (theme === 'dark') {
        if (icon)  icon.textContent = '☀️';
        if (label) label.textContent = 'Light';
      } else {
        if (icon)  icon.textContent = '🌙';
        if (label) label.textContent = 'Dark';
      }
    });
  }
  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }
  applyTheme(getPreferred());

  // ── Nav ────────────────────────────────────────────────────
  function initNav() {
    var h  = document.getElementById('nav-hamburger');
    var m  = document.getElementById('nav-mobile');
    var nl = document.querySelector('.nav-links');
    var nr = document.querySelector('.nav-right');
    if (!h || !m) return;

    // Show/hide hamburger vs desktop nav based on window width
    function setNavMode() {
      if (window.innerWidth <= 900) {
        h.style.cssText = [
          'display:flex',
          'flex-direction:column',
          'justify-content:center',
          'align-items:center',
          'gap:5px',
          'width:40px',
          'height:40px',
          'background:none',
          'border:none',
          'cursor:pointer',
          'padding:8px',
          'border-radius:4px',
          'margin-left:auto',
          'flex-shrink:0'
        ].join('!important;') + '!important';
        if (nl) nl.style.cssText = 'display:none!important';
        if (nr) nr.style.cssText = 'display:none!important';
      } else {
        h.style.cssText = 'display:none!important';
        m.style.display = 'none';
        if (nl) nl.style.cssText = '';
        if (nr) nr.style.cssText = '';
        h.classList.remove('open');
      }
    }

    // Drawer open/close
    function closeMenu() { m.style.display = 'none'; h.classList.remove('open'); }
    function openMenu()  { m.style.display = 'block'; h.classList.add('open'); }

    h.addEventListener('click', function(e) {
      e.stopPropagation();
      m.style.display === 'block' ? closeMenu() : openMenu();
    });
    document.addEventListener('click', function(e) {
      if (!h.contains(e.target) && !m.contains(e.target)) closeMenu();
    });
    m.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', closeMenu);
    });

    setNavMode();
    window.addEventListener('resize', setNavMode);
  }

  // ── Init both on DOMContentLoaded ──────────────────────────
  document.addEventListener('DOMContentLoaded', function() {
    applyTheme(getPreferred());
    document.querySelectorAll('.theme-toggle').forEach(function(btn) {
      btn.addEventListener('click', toggleTheme);
    });
    initNav();
  });

})();
