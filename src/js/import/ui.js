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
  // fixedElements: '.header, .phone',
  normalScrollElements: '#section11',
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
    console.log(nextIndex);
    $('.phone__block').each(function(i,elem) {
      if(i < nextIndex.index) {
        $(elem).removeClass('active').addClass('down');
      } else if(i === nextIndex.index) {
        $(elem).removeClass('down').addClass('active');
      } else{
        $(elem).removeClass('active').removeClass('down');
      }
    });
    if(nextIndex.index === 0) {
      $('.phone').removeClass('active');
    }else if(nextIndex.index >= 1 && nextIndex.index <= 8) {
      $('.phone').addClass('active');
    }
  },
  afterLoad: function(origin, destination, direction) {
    if(destination.index === 8 && direction === 'down') {
      let top = $('#section9').offset().top + ($(window).height() - $('.phone').outerHeight()) / 2;
      $('.phone').removeClass('active').addClass('stop').css({'top': top, 'transition': 'none'});
    } else if(destination.index <= 4) {
      $('.phone').css({'transition': 'all 1s cubic-bezier(.43,.06,0,1.05)', 'transition-delay': '0.3s'});
    } else if(destination.index === 8 && direction === 'up') {
      $('.phone').removeClass('stop').addClass('active').css({'top': '50vh', 'transition': 'none'});
    }
  },
  // afterRender: function() {},
  // afterResize: function(width, height) {},
  // afterReBuild: function() {},
  // afterResponsive: function(isResponsive) {},
  // afterSlideLoad: function(section, origin, destination, direction) {},
  // onSlideLeave: function(section, origin, destination, direction) {}
});


//when scrolling a fixed block
$(window).on('scroll', function() {
  activeBlock();
});
$(document).ready(function() {
  activeBlock();
});

function activeBlock() {
  if($(window).scrollTop() < $('#section4 .description').offset().top) {
    $('.description__fixed').removeClass('fixed').removeClass('absolute');
  } else if($(window).scrollTop() >= $('#section4 .description').offset().top && $(window).scrollTop() < $('#section8 .description').offset().top) {
    $('.description__fixed').removeClass('absolute');
    $('.description__fixed').addClass('fixed').css({'top': '50%'});
  }else if($(window).scrollTop() >= $('#section8 .description').offset().top) {
    let top = $('.description__fixed').offset().top - $('#section4 .description').offset().top;
    $('.description__fixed').addClass('absolute').css({'top': top});
  }
}



