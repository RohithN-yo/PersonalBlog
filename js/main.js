// Smooth scroll for anchor links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in animation on scroll
function revealOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;
  fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.classList.add('animate');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  // Optionally, inject blog posts here in the future
});

// Add fade-in class to main sections
['about','skills','education','projects','contact','blog'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.classList.add('fade-in');
});

// --- Trailing Dots Cursor Effect ---
(function() {
  const DOTS = 12;
  const dots = [];
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  for (let i = 0; i < DOTS; i++) {
    const dot = document.createElement('div');
    dot.style.position = 'fixed';
    dot.style.left = '0px';
    dot.style.top = '0px';
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.borderRadius = '50%';
    dot.style.background = 'rgba(59,130,246,' + (0.7 - i * 0.05) + ')'; // blue, fading
    dot.style.pointerEvents = 'none';
    dot.style.zIndex = 9999;
    dot.style.transition = 'background 0.2s';
    dot.style.boxShadow = '0 0 8px rgba(59,130,246,0.2)';
    dot.style.opacity = 1 - i * 0.06;
    document.body.appendChild(dot);
    dots.push({ el: dot, x: mouse.x, y: mouse.y });
  }

  document.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animate() {
    let x = mouse.x, y = mouse.y;
    dots.forEach((dot, i) => {
      dot.x += (x - dot.x) * 0.25;
      dot.y += (y - dot.y) * 0.25;
      dot.el.style.left = (dot.x - 5) + 'px';
      dot.el.style.top = (dot.y - 5) + 'px';
      x = dot.x;
      y = dot.y;
    });
    requestAnimationFrame(animate);
  }
  animate();
})();

// Mobile nav menu logic
window.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-mobile-menu');
  if (menuBtn && menu && closeBtn) {
    menuBtn.addEventListener('click', () => {
      menu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
      menu.classList.add('hidden');
      document.body.style.overflow = '';
    });
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        document.body.style.overflow = '';
      });
    });
  }
}); 