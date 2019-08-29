import Swiper from 'swiper';



var swiper2 = new Swiper('.swiper-reviews', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-reviews-next',
    prevEl: '.swiper-reviews-prev',
  },
  pagination: {
    el: '.swiper-pagination-reviews',
    clickable: true,
  },
  breakpoints: {
    767: {
      autoHeight: true,
    }
  }
});
