/* main.js */
'use strict';

// Nav 스크롤 이동
const navbar = document.querySelector('.navbar');
navbar.addEventListener('click', (event)=> {
  const target = event.target;
  const link = target.dataset.link;

  navbar.classList.remove('open');
  document.querySelector(link).scrollIntoView();
});

// 반응형 토글 버튼
const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', ()=> {
  navbar.classList.toggle('open');
});

// Nav Scroll Fixed
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  if(window.scrollY > navHeight) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
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
arrowUp.addEventListener('click', () => {
  const home = document.querySelector('.home-container');
  home.scrollIntoView();
});

// 프로젝트 필터링
const projectBtnContainer = document.querySelector('.project-menu');
const projectContainer = document.querySelector('.my-project');
const projects = document.querySelectorAll('.project');
projectBtnContainer.addEventListener('click', e => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  const active = document.querySelector('.project-btn.selected');
  active.classList.remove('selected');
  const target = 
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('ani-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if(filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('ani-out');
  }, 300)
});

// IntersectionObserver
const sectionIds = ['#home', '#about', '#skills', '#projects', '#contact'];

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => 
  document.querySelector(`[data-link="${id}"]`)
);

let selectedNavIndex;
let selectedNavItem = navItems[0];
function selectNavItem(selected) {
  selectedNavItem.classList.remove('active');
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
}

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      // 스크롤링이 아래로 되어서 페이지가 올라옴
      if(entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => {
  if(window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if(window.scrollY + window.innerHeight === document.body.clientHeight) {
    selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
});