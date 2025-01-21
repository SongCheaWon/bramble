$(document).ready(function () {
  // 메뉴 hover
  $(".menu span").click(function () {
    $(".menu-list").slideToggle(800);
  });
});

// Js
// // go to top
// window.onload = function () {
//   const topBtn = document.querySelector(".top-btn");
//   topBtn.addEventListener("click", function () {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
// };
