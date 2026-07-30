const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const navLinks = [...document.querySelectorAll('.nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 16);
});

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const matches = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', matches);
      });
    });
  },
  { rootMargin: '-35% 0px -55% 0px' }
);

sections.forEach(section => sectionObserver.observe(section));

document.querySelectorAll('.case-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.case-card');
    const isOpen = card.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.firstChild.textContent = isOpen ? 'Hide case summary ' : 'View case summary ';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
