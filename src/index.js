import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js';
import contactUs from './contactUsPage.js';
import homePage from './homePage.js';
import menuPage from './menuPage.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const homeTab = document.createElement('div');
  const menuTab = document.createElement('div');
  const contactUs = document.createElement('div');

  element.textContent = _.join(['Ozone Foods']);
  element.classList.add('title');

  homeTab.textContent = _.join(['Home']);
  homeTab.classList.add('title');
  element.appendChild(homeTab);

  menuTab.textContent = _.join(['Menu']);
  menuTab.classList.add('title');
  element.appendChild(menuTab);

  contactUs.textContent = _.join(['Contact Us']);
  contactUs.classList.add('title');
  element.appendChild(contactUs);

  btn.textContent = 'click me';
  btn.onclick = menuPage;
  element.appendChild(btn);
  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
