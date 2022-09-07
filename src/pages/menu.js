import AppPlate from '../assets/victoria-shes.jpg';
import PancakeStack from '../assets/chad-montano.jpg';
import SalmonPlate from '../assets/casey-lee.jpg';

export default function menuFunc() {
  const contentEl = document.querySelector('#content');

  let html = `
<div class="menu-container main-container">
  <div class="main-menu-container">
    <div class="item-container">
      <div class="item-img">
        <img src="${AppPlate}" />
      </div>
      <div class="item">Photo by Victoria Shes on Unsplash</div>
    </div>
    <div class="item-container">
      <div class="item-img">
        <img src="${PancakeStack}" />
      </div>
      <div class="item">Photo by Chad Montano on Unsplash</div>
    </div>
    <div class="item-container">
      <div class="item-img">
        <img src="${SalmonPlate}" />
      </div>
      <div class="item">Photo by Casey Lee on Unsplash</div>
    </div>
  </div>
</div>
  `;

  return html;
}
