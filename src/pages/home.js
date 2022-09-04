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
        Here is where the Box will go
      </div>
    </div
    
    <div class="footer main-container">
      <div class="created-by">Created by Ervin001</div>
    </div>
  `;

  contentEl.insertAdjacentHTML('beforeend', html);
}
