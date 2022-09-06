import PizzaPlate from '../assets/victoria-shes-UC0HZdUitWY-unsplash.jpg';
import PancakeStack from '../assets/chad-montano-eeqbbemH9-c-unsplash.jpg';
import SalmonPlate from '../assets/casey-lee-awj7sRviVXo-unsplash.jpg';

export default function menuFunc() {
  const contentEl = document.querySelector('#content');

  let html = `
<div class="menu-container main-container">
  <div class="main-menu-container">
    <div class="item-container">
      <div class="item-img">Image Here</div>
      <div class="item">Item Here</div>
    </div>
    <div class="item-container">
      <div class="item-img">Image Here</div>
      <div class="item">Item Here</div>
    </div>
    <div class="item-container">
      <div class="item-img">Image Here</div>
      <div class="item">Item Here</div>
    </div>
  </div>
</div>
  `;

  return html;
}
