(function() {
  const STORAGE_KEY = 'tl-theme';
  function getPreferred() {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  }
  function apply(theme) {
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
  function toggle() {
    var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  }
  apply(getPreferred());
  document.addEventListener('DOMContentLoaded', function() {
    apply(getPreferred());
    document.querySelectorAll('.theme-toggle').forEach(function(btn) {
      btn.addEventListener('click', toggle);
    });
  });
})();
