// script.js
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  
      if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌞 Light Mode';
      } else {
        darkModeToggle.textContent = '🌓 Dark Mode';
      }
    });
  
    // Scroll To Top Button
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  