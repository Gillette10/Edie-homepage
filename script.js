const menuBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click' , () => {
  menuBtn.classList.toggle('active');
  mobileNav.classList.toggle('active');
})