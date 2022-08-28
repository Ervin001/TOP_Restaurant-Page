// import MyImage from '../resources/restaurant.jpg';

const home = function () {
  const containerEl = document.createElement('section');
  document.body.appendChild(containerEl);
  // const myImage = new Image();
  // myImage.src = MyImage;
  // console.log(myImage);

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

  <div class="main-content-container">
    <div class="content">
    <div class="welcome-text">Welcome to Ozone</div>
    <div class="info-btn">
      <div class="info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
        saepe modi omnis nulla quisquam quidem aliquid error voluptatibus
        ipsa in porro vitae culpa obcaecati reprehenderit fuga magnam,
        veniam consectetur doloremque. Lorem ipsum dolor sit amet 
      </div>
      <div class="btn-box">
        <button>Menu</button>
      </div>
    </div>
    </div>
  </div>
  <footer>
    <div class="footer-info">
      <div class="created-by">Created by <strong>Ervin001</strong></div>
      <div class="extra-info"></div>
    </div>
  </footer>
</div>
  `;

  containerEl.insertAdjacentHTML('beforeend', html);
};

export default home;
