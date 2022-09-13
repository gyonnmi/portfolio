/* main.js */
'use strict';

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

navbar.addEventListener('click', ()=> {
  const target = event.target;
  const link = target.dataset.link;

  document.querySelector(link).scrollIntoView();
});

const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  if(window.scrollY > navHeight) {
    nav.classList.add('nav-dark');
  } else {
    nav.classList.remove('nav-dark');
  }
})

const contactBtn = document.querySelector('.home-contact');
contactBtn.addEventListener('click', ()=> {
  const contact = document.querySelector('#contact');
  contact.scrollIntoView();
});


