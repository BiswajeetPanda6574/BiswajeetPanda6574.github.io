// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});


// ===== TYPING ANIMATION =====
const roles = [
  'Data Analyst',
  'Problem Solver',
  'Civil Engineer',
  'ML Enthusiast',
  'Analytics Enthusiast'
];

const typedEl  = document.querySelector('.typed-text');
let roleIndex  = 0;
let charIndex  = 0;
let isDeleting = false;

function type() {
  const current = roles[roleIndex];

  typedEl.textContent = isDeleting
    ? current.substring(0, charIndex - 1)
    : current.substring(0, charIndex + 1);

  isDeleting ? charIndex-- : charIndex++;

  let speed = isDeleting ? 55 : 95;

  if (!isDeleting && charIndex === current.length) {
    speed = 1800; isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex  = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(type, speed);
}

setTimeout(type, 1000);


// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.10 });

revealEls.forEach(el => observer.observe(el));
