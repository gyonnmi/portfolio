/* main.js */
'use strict';

// 반응형 토글 버튼
const toggleBtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');
let navActive = false;
toggleBtn.addEventListener('click', ()=> {
  navActive = !navActive
  if(navActive) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});

// Nav 스크롤 이동
navbar.addEventListener('click', ()=> {
  const target = event.target;
  const link = target.dataset.link;

  document.querySelector(link).scrollIntoView();
});

// Nav Scroll Fixed
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  if(window.scrollY > navHeight) {
    nav.classList.add('nav-dark');
  } else {
    nav.classList.remove('nav-dark');
  }
})

// Contact Btn
const contactBtn = document.querySelector('.home-contact');
contactBtn.addEventListener('click', ()=> {
  const contact = document.querySelector('#contact');
  contact.scrollIntoView();
});

// Home Scroll Opacity
const home = document.querySelector('.home-inner-container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show Arrow up
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=> {
  if(window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});
arrowUp.addEventListener('click', ()=> {
  const home = document.querySelector('.home-container');
  home.scrollIntoView();
});


