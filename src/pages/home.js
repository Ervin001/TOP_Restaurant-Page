export default function homePagefunc() {
  const contentEl = document.querySelector('#content');

  let html = `
    <div class="header main-container">
      <div class="logo">Ozone</div>
      <div class="pages">
        <ul class="links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="home-content main-container">
      <div class="home-info-container">
        <div class="text-button-container">
          <div class="text">The comfort you crave</div>
          <button class="to-menu-button">Order now</button>
        </div>
      </div>
    </div>
    
    <footer class="footer main-container">
      <div class="created-by">Created by Ervin001</div>
    </footer>
  `;

  contentEl.insertAdjacentHTML('beforeend', html);
}
