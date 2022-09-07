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

linksEl.forEach((btn) => {
  const secondChild = contentEl.children[1];
  btn.addEventListener('click', (e) => {
    // console.log(e.target.innerText);
    if (e.target.innerText === 'Menu') {
      headerContentEl.insertAdjacentHTML('afterend', menuFunc());
    } else if (e.target.innerText === 'About Us') {
      headerContentEl.insertAdjacentHTML('afterend', aboutUsFunc());
    } else if (e.target.innerText === 'Home') {
      secondChild.remove();
      headerContentEl.insertAdjacentHTML('afterend', homePagefunc());
    }
  });
});
