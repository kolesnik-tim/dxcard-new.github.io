// import '../lib/selectize.min.js';
// import AOS from 'aos';
// import skrollr from '../lib/skrollr.js';
// import '../lib/maskedinput.js';
// import modal from 'jquery-modal';
import fullpage from 'fullpage.js';

//select
// $('select').selectize();

// //pop-up
// $('[rel="modal:open"]').on('click', function(event) {
//   $(this).modal({
//     fadeDuration: 200
//   });
//   return false;
// });




if($(window).width() > 767 && $('div').hasClass('phone')) {
  var myFullpage = new fullpage('#fullpage', {
  //Navigation
    menu: '#menu',
    // lockAnchors: false,
    // anchors:['firstPage', 'secondPage', 'secondPage-1', 'secondPage-2'],
    navigation: true,
    navigationPosition: 'right',
    // navigationTooltips: ['firstSlide', 'secondSlide'],
  
    //Scrolling
    css3: true,
    scrollingSpeed: 1050,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 100,
    scrollBar: true,
    easing: 'easeInOutCubic',
    easingcss3: 'cubic-bezier(.43,.06,0,1.05)',

    //Design
    normalScrollElements: '#section11',
    responsiveWidth: 767,
    responsiveHeight: 600,

    //events
    onLeave: function(origin, nextIndex, direction) {
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
        $('#fp-nav').fadeOut();
      }else if(nextIndex.index >= 1 && nextIndex.index <= 8) {
        $('.phone').addClass('active');
        $('#fp-nav').fadeIn();
      }else if(nextIndex.index >= 10) {
        $('#fp-nav').fadeOut();
      }
    },
    afterLoad: function(origin, destination, direction) {
      if(destination.index === 0) {
        $('.phone').removeClass('active');
        $('#fp-nav').fadeOut();
      }else if(destination.index >= 1 && destination.index <= 8) {
        $('.phone').addClass('active');
      }
    },
  });


  //when scrolling a fixed block
  $(window).on('scroll', function() {
    activeBlock();
  });
  $(document).ready(function() {
    activeBlock();
  });

  function activeBlock() {
    let blockPhone = $('.description__fixed');
    if($(window).scrollTop() < $('#section4 .description').offset().top) {
      blockPhone.removeClass('fixed').removeClass('absolute');
    } else if($(window).scrollTop() >= $('#section4 .description').offset().top && $(window).scrollTop() < $('#section8 .description').offset().top) {
      blockPhone.removeClass('absolute');
      blockPhone.addClass('fixed').css({'top': '50%'});
    }else if($(window).scrollTop() >= $('#section8 .description').offset().top) {
      let top = $('#section8 .description').offset().top - $('#section4 .description').offset().top + (($(window).height() - blockPhone.outerHeight()) / 2);
      blockPhone.addClass('absolute').css({'top': top});
    }
  }



  //fixed phone #section9
  $(window).on('scroll', function() {
    if($(window).scrollTop() < $('#section9 .description').offset().top && $(window).scrollTop() > $('#section6 .description').offset().top) {
      $('.phone').removeClass('stop').addClass('active').css({'top': '50vh', 'transition': 'none'});
    }else if($(window).scrollTop() >= $('#section8 .description').offset().top) {
      let top = $('#section9').offset().top + ($(window).height() - $('.phone').outerHeight()) / 2;
      $('.phone').removeClass('active').addClass('stop').css({'top': top, 'transition': 'none'});
    } else if($(window).scrollTop() <= $('#section6 .description').offset().top && $(window).scrollTop() > $('#section4 .description').offset().top) {
      $('.phone').css({'transition': 'all 1s cubic-bezier(.43,.06,0,1.05)', 'transition-delay': '0.3s'});
    }
  });


}


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
