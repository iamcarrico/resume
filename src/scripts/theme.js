const STORAGE_KEY = 'theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

// Set theme immediately to prevent flash of unstyled content.
const stored = localStorage.getItem(STORAGE_KEY);
const theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(theme);

// Toggle button handler.
const btn = document.getElementById('toggle-theme');
if (btn) {
  btn.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });
}

// Respond to system preference changes when no manual override is set.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
  if (!localStorage.getItem(STORAGE_KEY)) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});
