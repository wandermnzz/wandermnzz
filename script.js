const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

/* MENU HAMBURGUER */
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('open');
});

/* FADE-IN */
const elements = document.querySelectorAll('.fade');

function animateOnScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

/* Executa ao carregar */
window.addEventListener('load', animateOnScroll);

/* Executa ao rolar */
window.addEventListener('scroll', animateOnScroll);
