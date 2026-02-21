document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Language Toggle
  const langToggle = document.getElementById('langToggle');
  const body = document.body;

  langToggle.addEventListener('click', () => {
    if (body.classList.contains('lang-en')) {
      body.classList.replace('lang-en', 'lang-ar');
      langToggle.textContent = 'English';
    } else {
      body.classList.replace('lang-ar', 'lang-en');
      langToggle.textContent = 'عربي';
    }
    
    // Slight flash animation for text swap
    body.style.opacity = 0;
    setTimeout(() => {
      body.style.transition = 'opacity 0.4s ease-in-out';
      body.style.opacity = 1;
    }, 100);
  });

  // Simple scroll parallax effect for background orbs
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const mesh = document.querySelector('.background-mesh');
    mesh.style.transform = `translateY(${scrollY * 0.2}px)`;
  });

  // Add click ripple effect to buttons
  const buttons = document.querySelectorAll('.glass-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'translateY(-2px)';
      }, 150);
    });
  });
});
