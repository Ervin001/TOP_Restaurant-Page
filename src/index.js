import startPageFunc from './pages/startPage.js';
import homePagefunc from './pages/home.js';
import aboutUsFunc from './pages/aboutUs.js';
import menuFunc from './pages/menu.js';
import './style.css';
import { head, remove } from 'lodash';

const contentEl = document.querySelector('#content');
startPageFunc();

const homeContentEl = document.querySelector('.home-content');
const headerContentEl = document.querySelector('.header');

// homeContentEl.remove();
// headerContentEl.insertAdjacentHTML('afterend', menuFunc());

const linksEl = document.querySelectorAll('.links');
const menuBtn = document.querySelector('.to-menu-button');
const logoEl = document.querySelector('.logo');

linksEl.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(e.target.innerText);
    if (e.target.innerText === 'Menu') {
      let secondChild = contentEl.children[1];
      secondChild.remove();
      headerContentEl.insertAdjacentHTML('afterend', menuFunc());
    } else if (e.target.innerText === 'About Us') {
      let secondChild = contentEl.children[1];
      secondChild.remove();
      headerContentEl.insertAdjacentHTML('afterend', aboutUsFunc());
    } else if (e.target.innerText === 'Home') {
      let secondChild = contentEl.children[1];

      secondChild.remove();
      headerContentEl.insertAdjacentHTML('afterend', homePagefunc());
    }
  });
});

menuBtn.addEventListener('click', (e) => {
  if (e.target.innerText === 'Order Now') {
    let secondChild = contentEl.children[1];
    secondChild.remove();
    headerContentEl.insertAdjacentHTML('afterend', menuFunc());
  }
});

logoEl.addEventListener('click', (e) => {
  if (e.target.innerText === 'Ozone') {
    let secondChild = contentEl.children[1];

    secondChild.remove();
    headerContentEl.insertAdjacentHTML('afterend', homePagefunc());
  }
});
