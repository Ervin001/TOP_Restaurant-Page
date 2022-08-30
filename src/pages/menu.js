import MyImage from '../assets/images/restaurant.jpg';
import burgerImage from '../assets/images/chad-montano-burger.jpg';
import piizaImage from '../assets/images/chad-montano-pizza.jpg';
import appetizerImage from '../assets/images/davide-cantelli-appetizer.jpg';

const menu = function () {
  const containerEl = document.createElement('section');
  document.body.appendChild(containerEl);
  const myImage = new Image();
  myImage.src = MyImage;
  console.log(myImage);

  const html = `
  <div class="container">
    <nav class="logo-container">
      <div class="title">Ozone</div>
      <div class="tabs-container">
        <a href="#" class="tab home-tab">Home</a>
        <a href="#" class="tab menu-tab">Menu</a>
        <a href="#" class="tab aboutUs-tab">About Us</a>
      </div>
    </nav>

   <div class="menu-container">
    <div class="items-container">
      <div class="item">
        <div class="food-image-container">
          <img src=${burgerImage} alt="some food here" class="food-img" />
        </div>
        <div class="food-info">
          <h4 class="food-name">Benedict Burger</h4>
          <p class="food-desc">Photo by: Chad Montano on <i>unsplash</i></p>
        </div>
      </div>
      <div class="item">
        <div class="food-image-container">
          <img src=${piizaImage} alt="some food here" class="food-img" />
        </div>
        <div class="food-info">
          <h4 class="food-name">Pizza on Chopping board</h4>
          <p class="food-desc">Photo by: Chad Montano on <i>unsplash</i></p>
        </div>
      </div>
      <div class="item">
        <div class="food-image-container">
          <img src=${appetizerImage} alt="some food here" class="food-img" />
        </div>
        <div class="food-info">
          <h4 class="food-name">Susshi in the plate</h4>
          <p class="food-desc">Photo by: Davide Cantelli on <i>unsplash</i></p>
        </div>
      </div>
    </div>
   </div>
    
    <footer>
    <div class="footer-info bl-b">
      <div class="created-by">Created by <strong>Ervin001</strong></div>
      <div class="extra-info"></div>
    </div>
  </footer>

  </div>
  `;

  containerEl.insertAdjacentHTML('beforeend', html);
};

export default menu;
