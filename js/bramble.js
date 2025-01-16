window.onload = function(){
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
}