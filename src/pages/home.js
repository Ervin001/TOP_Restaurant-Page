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
    <div class="home-content main-container">Main content here</div>
    <div class="footer main-container">This is the footer</div>
  `;

  contentEl.insertAdjacentHTML('beforeend', html);
}
