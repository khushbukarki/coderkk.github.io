// ----------------------------
// Global Dark Mode Toggle
// ----------------------------
const themeToggleBtns = document.querySelectorAll('#themeToggle, #themeBtn');
const body = document.body;

// Apply saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  body.setAttribute('data-theme', 'dark');
  themeToggleBtns.forEach(btn => {
    btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    btn.setAttribute('aria-pressed', 'true');
  });
}

themeToggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Update icon
    btn.innerHTML = isDark
      ? '<i class="bi bi-sun-fill"></i>'
      : '<i class="bi bi-moon-stars"></i>';
  });
});

// ----------------------------
// Navbar shadow on scroll
// ----------------------------
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ----------------------------
// Reveal Elements on Scroll
// ----------------------------
const reveals = document.querySelectorAll('.reveal, [data-animate]');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible', 'in');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ----------------------------
// Typing Effect (Home Page only)
// ----------------------------
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
  const roles = [
    'Software Developer 💻',
    'Machine Learning Enthusiast 🤖',
    'Data Engineer 📊',
    'Open to Graduate Roles 🚀'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const current = roles[roleIndex];
    typingElement.textContent = current.substring(0, charIndex);

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 60);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
      } else {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 200);
      }
    }
  }

  typeEffect();
}

// ----------------------------
// Contact Form (Validation feedback)
// ----------------------------
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message submitted successfully! (Demo only)');
    contactForm.reset();
  });
}
