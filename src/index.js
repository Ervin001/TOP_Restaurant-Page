import homePagefunc from './pages/home.js';
import aboutUsFunc from './pages/aboutUs.js';
import menuFunc from './pages/menu.js';
import './style.css';
import { remove } from 'lodash';

const contentEl = document.querySelector('#content');
homePagefunc();

const homeContentEl = document.querySelector('.home-content');
const headerContentEl = document.querySelector('.header');

homeContentEl.remove();
headerContentEl.insertAdjacentHTML('afterend', menuFunc());

const secondChild = contentEl.children[1];

console.log(secondChild);
