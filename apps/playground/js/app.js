/*
  app.js
  Main JavaScript file for playground interactivity.
*/

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle-btn');
  const contentArea = document.getElementById('content-area');
  const pageTitle = document.getElementById('page-title');
  const navLinks = document.querySelectorAll('.nav-link');

  // --- Theme Switcher ---
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  themeToggleButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
      theme = 'dark';
    } else {
      theme = 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });

  // --- Page Loader (SPA-like behavior) ---
  const loadPage = async (url, pageName) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Page not found');
      }
      const content = await response.text();
      contentArea.innerHTML = content;
      pageTitle.textContent = pageName;

      // Update active link
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[data-page="${url.split('.')[0]}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    } catch (error) {
      contentArea.innerHTML = `<div class="page-content"><h1>Error</h1><p>${error.message}</p></div>`;
    }
  };

  // --- Navigation Handling ---
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const pageName = link.textContent;
      history.pushState({ path: href }, '', href);
      loadPage(href, pageName);
    });
  });

  // Handle browser back/forward
  window.addEventListener('popstate', (e) => {
    const path = location.pathname.split('/').pop();
    if (path) loadPage(path, '');
  });
});