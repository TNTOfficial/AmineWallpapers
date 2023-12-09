function active() {
  var activate = document.getElementById("activate");
  console.log("Activate");
  activate.classList.toggle("active");
}

var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  slidesPerView: 3,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetweenSlides: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});


var swiper = new Swiper(".scroll_h", {
  direction: "vertical",
  effect: "fade",
  // parallax: true,
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
