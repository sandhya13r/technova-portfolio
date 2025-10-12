document.querySelectorAll('a[href^="#"]').forEach(a=>
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))
      .scrollIntoView({behavior:'smooth'});
  })
);

const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll=()=>{
  revealElements.forEach(el=>{
    el.classList.toggle('active',el.getBoundingClientRect().top<innerHeight-150);
  });
};
addEventListener('scroll',revealOnScroll);
revealOnScroll();

