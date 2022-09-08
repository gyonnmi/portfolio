/* main.js */

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

