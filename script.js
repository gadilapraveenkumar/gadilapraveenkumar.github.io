const nav = document.querySelector('nav');
const menuBtn = document.getElementById('menuBtn');
menuBtn?.addEventListener('click', () => document.querySelector('.topbar').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => document.querySelector('.topbar').classList.remove('open')));

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('nav a')];
const progress = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${h ? (y / h) * 100 : 0}%`;

  let current = 'home';
  sections.forEach(section => {
    if (y >= section.offsetTop - 160) current = section.id;
  });
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
});

document.getElementById('year').textContent = new Date().getFullYear();
