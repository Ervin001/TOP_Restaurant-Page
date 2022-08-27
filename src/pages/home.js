const home = function () {
  const containerEl = document.createElement('section');
  document.body.appendChild(containerEl);

  const html = `
    <div class="container">
      <nav class="logo-container">
        <div class="title">Ozone</div>
        <div class="tabs-container">
          <div class="tab home-tab">Home</div>
          <div class="tab menu-tab">Menu</div>
          <div class="tab aboutUs-tab">About Us</div>
        </div>
      </nav>
      <div class="main-content-container">
        <div class="welcome-text">Welcome to Ozone</div>
        <div class="short-desc">    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto saepe modi omnis nulla quisquam quidem aliquid error voluptatibus ipsa in porro vitae culpa obcaecati reprehenderit fuga magnam, veniam consectetur doloremque.</div>
        <div class="image"></div>
      </div>
      <footer>
        <div class="footer-info">
          <div class="created-by">Created by <strong>Ervin001</strong></div>
          <div class="extra-info"></div>
        </div>
      </footer>
    </di>
  `;

  containerEl.insertAdjacentHTML('beforeend', html);
  containerEl;
};

export default home;
