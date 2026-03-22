// Theme + Nav + Mobile Layout
(function() {

  var STORAGE_KEY = 'tl-theme';

  // ── Theme ──────────────────────────────────────────────────────────────────
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    // Update ALL theme-toggle buttons on the page (desktop + mobile drawer)
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

  // Apply immediately to prevent flash
  applyTheme(localStorage.getItem(STORAGE_KEY) || 'light');


  // ── Nav + Mobile Layout ────────────────────────────────────────────────────
  function initNav() {
    var h  = document.getElementById('nav-hamburger');
    var m  = document.getElementById('nav-mobile');
    var nl = document.querySelector('.nav-links');
    var nr = document.querySelector('.nav-right');
    if (!h || !m) return;

    function setLayoutMode() {
      var mobile = window.innerWidth <= 900;

      // Nav visibility
      if (mobile) {
        h.style.cssText = 'display:flex!important;flex-direction:column!important;justify-content:center!important;align-items:center!important;gap:5px!important;width:40px!important;height:40px!important;background:none!important;border:none!important;cursor:pointer!important;padding:8px!important;border-radius:4px!important;margin-left:auto!important;flex-shrink:0!important;';
        if (nl) nl.style.cssText = 'display:none!important';
        if (nr) nr.style.cssText = 'display:none!important';
      } else {
        h.style.cssText = 'display:none!important';
        m.style.display = 'none';
        if (nl) nl.style.cssText = '';
        if (nr) nr.style.cssText = '';
        h.classList.remove('open');
      }

      // Collapse wide grids on mobile
      document.querySelectorAll('.hero-grid').forEach(function(el) {
        el.style.gridTemplateColumns = mobile ? '1fr' : '';
      });
      document.querySelectorAll('.hero-terminal').forEach(function(el) {
        el.style.display = mobile ? 'none' : '';
      });
      document.querySelectorAll('.pricing-grid').forEach(function(el) {
        el.style.gridTemplateColumns = mobile ? '1fr' : '';
      });
      document.querySelectorAll('.evidence-chain').forEach(function(el) {
        el.style.gridTemplateColumns = mobile ? '1fr 1fr' : '';
      });
      document.querySelectorAll('.coverage-grid, .threat-grid, .ba-grid').forEach(function(el) {
        el.style.gridTemplateColumns = mobile ? '1fr' : '';
      });
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
    // Close on nav links — but NOT on the theme toggle
    m.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', closeMenu);
    });

    setLayoutMode();
    window.addEventListener('resize', setLayoutMode);
  }


  // ── Boot ───────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function() {
    applyTheme(localStorage.getItem(STORAGE_KEY) || 'light');
    // Wire up ALL theme toggles — desktop nav + mobile drawer
    document.querySelectorAll('.theme-toggle').forEach(function(btn) {
      btn.addEventListener('click', toggleTheme);
    });
    initNav();
  });

})();
