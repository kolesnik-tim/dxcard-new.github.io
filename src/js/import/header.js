//sledeDown
$('.menu__content .menu__item').on('click', function() {
  if($(this).hasClass('active')) {
    $(this).siblings('.menu__dropdown').slideUp();
    $(this).removeClass('active');
  } else{
    $('.menu__content .menu__item').removeClass('active');
    $('.menu__content .menu__item').siblings('.menu__dropdown').slideUp();
    $(this).siblings('.menu__dropdown').slideDown();
    $(this).addClass('active');
  }
});


//header
// var mywindow = $(window);
// var mypos = mywindow.scrollTop();
// var up = false;
// var newscroll;
// mywindow.scroll(function() {
//   if(mywindow.scrollTop() > 50) {
//     $('.header').addClass('active');
//     newscroll = mywindow.scrollTop();
//     if (newscroll > mypos && !up) {
//       $('.header').stop().removeClass('scroll');
//       $('.slider__header').css({'top': 0});
//       up = !up;
//     } else if(newscroll < mypos && up) {
//       $('.header').stop().addClass('scroll');
//       $('.slider__header').css({'top': $('.header').innerHeight()});
//       up = !up;
//     }
//     mypos = newscroll;
//   } else {
//     $('.header').removeClass('active');
//   }
// });
//dropdown
$('.header__nav li').hover(function() {
  $(this).toggleClass('active');
});


//open mobile menu
$('.menu-open').on('click', function() {
  $('.menu').addClass('active');
  $('.menu-bg').fadeIn();
});
//close mobile menu
$('.menu-bg').on('click', function() {
  $('.menu').removeClass('active');
  $(this).fadeOut();
});
