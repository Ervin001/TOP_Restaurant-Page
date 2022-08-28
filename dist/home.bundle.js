"use strict";
(self["webpackChunktop_restaurant_page"] = self["webpackChunktop_restaurant_page"] || []).push([["home"],{

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IE15SW1hZ2UgZnJvbSAnLi4vcmVzb3VyY2VzL3Jlc3RhdXJhbnQuanBnJztcblxuY29uc3QgaG9tZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyRWwpO1xuICAvLyBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4gIC8vIG15SW1hZ2Uuc3JjID0gTXlJbWFnZTtcbiAgLy8gY29uc29sZS5sb2cobXlJbWFnZSk7XG5cbiAgY29uc3QgaHRtbCA9IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPG5hdiBjbGFzcz1cImxvZ28tY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+T3pvbmU8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFicy1jb250YWluZXJcIj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0YWIgaG9tZS10YWJcIj5Ib21lPC9hPlxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRhYiBtZW51LXRhYlwiPk1lbnU8L2E+XG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGFiIGFib3V0VXMtdGFiXCI+QWJvdXQgVXM8L2E+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuXG4gIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwid2VsY29tZS10ZXh0XCI+V2VsY29tZSB0byBPem9uZTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJ0blwiPlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIEl1c3RvXG4gICAgICAgIHNhZXBlIG1vZGkgb21uaXMgbnVsbGEgcXVpc3F1YW0gcXVpZGVtIGFsaXF1aWQgZXJyb3Igdm9sdXB0YXRpYnVzXG4gICAgICAgIGlwc2EgaW4gcG9ycm8gdml0YWUgY3VscGEgb2JjYWVjYXRpIHJlcHJlaGVuZGVyaXQgZnVnYSBtYWduYW0sXG4gICAgICAgIHZlbmlhbSBjb25zZWN0ZXR1ciBkb2xvcmVtcXVlLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ib3hcIj5cbiAgICAgICAgPGJ1dHRvbj5NZW51PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxmb290ZXI+XG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlci1pbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3JlYXRlZC1ieVwiPkNyZWF0ZWQgYnkgPHN0cm9uZz5FcnZpbjAwMTwvc3Ryb25nPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWluZm9cIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG48L2Rpdj5cbiAgYDtcblxuICBjb250YWluZXJFbC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==