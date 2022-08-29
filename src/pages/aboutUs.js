const about = function () {
  const containerEl = document.createElement('section');
  document.body.appendChild(containerEl);
  // const myImage = new Image();
  // myImage.src = MyImage;
  // console.log(myImage);

  const html = `
  <div class="container ">
    <nav class="logo-container">
      <div class="title">Ozone</div>
      <div class="tabs-container">
        <a href="#" class="tab home-tab">Home</a>
        <a href="#" class="tab menu-tab">Menu</a>
        <a href="#" class="tab aboutUs-tab">About Us</a>
      </div>
    </nav>

    <div class="about-us-container">
      <div class="about-us-content">
        <h1 class="header-contact-us">Contact Us</h1>
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

export default about;
