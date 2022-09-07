export default function homePagefunc() {
  const contentEl = document.querySelector('#content');

  let html = `
  <div class="home-content main-container">
    <div class="home-info-container">
      <div class="text-button-container">
        <div class="text">The comfort you crave</div>
        <button class="to-menu-button">Order Now</button>
      </div>
    </div>
  </div>
  `;

  return html;
}
