// import '../lib/selectize.min.js';
// import AOS from 'aos';
// import skrollr from '../lib/skrollr.js';
// import '../lib/maskedinput.js';
// import modal from 'jquery-modal';

//select
// $('select').selectize();

// //pop-up
// $('[rel="modal:open"]').on('click', function(event) {
//   $(this).modal({
//     fadeDuration: 200
//   });
//   return false;
// });






//footer
$('.footer__nav__block h3').on('click', function() {
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).next('ul').slideUp();
  } else{
    $('.footer__nav__block h3').removeClass('active').next('ul').slideUp();
    $(this).addClass('active');
    $(this).next('ul').slideDown();
  }
});

$(window).scroll(function() {
  if($(this).scrollTop() >= ($(window).height() - $('.phone').outerHeight()) / 2) {
    $('.phone').addClass('active');
  } else{
    $('.phone').removeClass('active');
  }
});




import fullpage from 'fullpage.js';

var myFullpage = new fullpage('#fullpage', {
  //Navigation
  menu: '#menu',
  lockAnchors: false,
  anchors:['firstPage', 'secondPage', 'secondPage-1', 'secondPage-2'],
  navigation: true,
  navigationPosition: 'right',
  // navigationTooltips: ['firstSlide', 'secondSlide'],
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: 'bottom',
  

  //Scrolling
  // css3: true,
  scrollingSpeed: 1050,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 100,
  scrollBar: true,
  easing: 'easeInOutCubic',
  easingcss3: 'cubic-bezier(.43,.06,0,1.05)',
  // loopBottom: false,
  // loopTop: false,
  // loopHorizontal: true,
  // continuousVertical: false,
  // continuousHorizontal: false,
  // scrollHorizontally: false,
  // interlockedSlides: false,
  // dragAndMove: false,
  // offsetSections: false,
  // resetSliders: false,
  // fadingEffect: false,
  // scrollOverflow: true,
  // scrollOverflowReset: true,
  // scrollOverflowOptions: null,
  // touchSensitivity: 15,
  // bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: true,
  // sectionsColor : ['#ccc', '#fff'],
  // paddingTop: '3em',
  // paddingBottom: '10px',
  fixedElements: '.header, .phone',
  normalScrollElements: '#section4',
  // responsiveWidth: 0,
  // responsiveHeight: 0,
  // responsiveSlides: false,
  // parallax: false,
  // parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  // cards: false,
  // cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',
  lazyLoading: true,

  //events
  onLeave: function(origin, nextIndex, direction) {
    if(direction ==='down' && origin.index - 1 >= 0) {
      $('.phone img').eq(origin.index).addClass('active');
      $('.phone img').eq(origin.index - 1).removeClass('active').addClass('down');
    } else if(direction ==='down' && origin.index - 1 <= 0) {
      $('.phone img').eq(origin.index).addClass('active');
    }
    if(direction ==='up' && origin.index - 2 >= 0) {
      setTimeout(function() {
        $('.phone img').eq(origin.index - 2).removeClass().addClass('active');
        $('.phone img').eq(origin.index - 1).removeClass();
      }, 300); 
    }else if(direction ==='up' && origin.index === 1) {
      setTimeout(function() {
        $('.phone img').removeClass();
      }, 300); 
    }
    
    // if(origin.index === 0 && direction ==='down') {
    //   $('.phone img').eq(origin.index).addClass('active');
    // }else if(origin.index === 1 && direction ==='up') {
    //   $('.phone img').removeClass('active');
    // }
  },
  // afterLoad: function(origin, destination, direction) {},
  // afterRender: function() {},
  // afterResize: function(width, height) {},
  // afterReBuild: function() {},
  // afterResponsive: function(isResponsive) {},
  // afterSlideLoad: function(section, origin, destination, direction) {},
  // onSlideLeave: function(section, origin, destination, direction) {}
});



