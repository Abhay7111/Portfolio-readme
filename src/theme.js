export function initTheme() {
  let stored = null;
  try {
    stored = localStorage.getItem('theme');
  } catch {
    // localStorage may not be available
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  const next = isDark ? 'light' : 'dark';
  applyTheme(next);
  try {
    localStorage.setItem('theme', next);
  } catch {
    // ignore
  }
  return next;
}

export function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}


