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

const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  if(window.scrollY > navHeight) {
    nav.classList.add('nav-dark');
  } else {
    nav.classList.remove('nav-dark');
  }
})
