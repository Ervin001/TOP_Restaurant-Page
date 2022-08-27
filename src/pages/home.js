const home = function () {
  const containerEl = document.createElement('div');
  document.body.appendChild(containerEl);

  const html = `
    <div class="container">
      <div class="logo-container">
        <div class="title">Ozone</div>
        <div class="tabs-container">
          <div class="tab home-tab">Home</div>
          <div class="tab menu-tab">Menu</div>
          <div class="tab aboutUs-tab">About Us</div>
        </div>
      </div>
    </di>
  `;

  containerEl.insertAdjacentHTML('afterend', html);
};

export default home;
