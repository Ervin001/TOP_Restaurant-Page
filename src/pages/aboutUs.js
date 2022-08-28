const aboutUs = function () {
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
  </div>
  `;

  containerEl.insertAdjacentHTML('beforeend', html);
};

export default aboutUs;
