window.onload = function () {
  // VISUAL
  var swiper = new Swiper(".visual-slide", {
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2900,
      disableOnInteraction: false,
    },
  });
  //  EARRING-SLIDE
  var swiper = new Swiper(".earring-slide", {
    loop: true,
    // centeredSlides: true,/
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  // review
  var swiper = new Swiper(".review-slide", {
    slidesPerView: 1.7,
    spaceBetween: 30,
    freeMode: true,
  
    breakpoints: {
      768: {
        slidesPerView: 2.6,
      },
      1900: {
        slidesPerView: 3.4,
      },
    },
  });

  // go to top
  const topBtn = document.querySelector(".top-btn");
  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
