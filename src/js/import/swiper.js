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



var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    767: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 2,
    }
  }
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-success-next',
    prevEl: '.swiper-success-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
