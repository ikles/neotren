jQuery(document).ready(function( $ ) {


  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $('.burger').click(function () {
    $('.open').addClass('show');
    $('body').addClass('ohi');
  });


  $('.mnu__close').click(function () {
    $('.open').removeClass('show');
    $('body').removeClass('ohi');
  });

  $(".equipment__slider").slick({
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 3,
    speed: 1400
  });

  $(".equipment__nav a").click(function(e){
    e.preventDefault();
    slideIndex = $(this).index();
    $('.equipment__slider').slick('slickGoTo', parseInt(slideIndex))
  });

  $('.equipment__nav-item').click(function () {
    $('.equipment__nav-item').removeClass('active');
    $(this).addClass('active');
  });


  if ($('.header__slider').length) {
    $('.header__slider').slick({
      infinite: true,    
      speed: 400,
      slidesToScroll: 1,
      autoplay: false,    
      slidesToShow: 1,
      cssEase: 'linear',  
      autoplaySpeed: 0,  
      arrows: true,
      dots: true,
      pauseOnHover: true,  
      vertical: false,
      verticalSwiping: false,
    });  
  }

  if ($('.proj-sl').length) {
    $('.proj-sl').slick({
      infinite: true,    
      speed: 400,
      slidesToScroll: 1,
      autoplay: false,    
      slidesToShow: 2,
      cssEase: 'linear',  
      autoplaySpeed: 0,  
      arrows: true,
      dots: false,
      pauseOnHover: true,  
      vertical: false,
      verticalSwiping: false,
    });  
  }



  const header__current = $('.header__current span');

  $('.header__total span').html($(".header__slider").slick("getSlick").slideCount);


  

  $('.header__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    header__current.html(currentSlide + 1)

  });

  /************************************/

$('.wrapper').prepend('<span class="eye-3"></span>');
$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');  

});

/************************************/



function popup(openLink, windowEl, closeEl) {  
  $(openLink).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeIn();
    $('body').addClass('ohi');
  });
  $(closeEl).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-overlay').click(function () {
    $(this).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-form__block').click(function (e) {
    e.stopPropagation();  
  });
  
}

popup('.link2', '.modal-overlay_2', '.modal-close_2');
popup('.link', '.modal-overlay_1', '.modal-close_1');


$('.equipment__nav-selected')


$('.calculate__start, .top__btn').click(function () {
  $('.calc').addClass('show');
});


$('.select-nav').each(function () {
  const self = $(this);
  const list = $(this).find('.select-nav__list');
  const item = list.find('a');
  const selected = $(this).find('.nav-selected');
  selected.click(function () {
    self.toggleClass('open');
  });
  item.click(function () {
    selected.text($(this).find('span').text());
    self.removeClass('open');
  });
})


function calc2() {
  let i = 1;
  const countOfStages = $('.calc__stage').length;  
  $('.calc__nav-btn').click(function () {
    //next
    if ($(this).hasClass('_next') && i < (countOfStages - 1)) {
      i++;
      $('.calc__stage').hide();
      $('.calc__stage').each(function () {
        if ($(this).attr('data-stage') == i) {
          $(this).fadeIn();
        }
      });
      $('.calc__nav-btn._prev').addClass('show');


      if (i == (countOfStages - 1)) {
        $('.calc__nav').hide();
        $('.calc__submit-wrap').addClass('show');
      }
      
    }
    //prev
    else if ($(this).hasClass('_prev') && i >= 2) {
      i--;      
      $('.calc__stage').hide();
      $('.calc__stage').each(function () {
        if ($(this).attr('data-stage') == i) {
          $(this).fadeIn();
        }
      });
      if (i == 1) {
        $('.calc__nav-btn._prev').removeClass('show');
      }                    
    }
  });


  $('.calc__submit').click(function (e) {
    e.preventDefault();
    $('.calc__submit-wrap').hide();
    $('.calc__stage').hide();
    $('.calc__stage-final').fadeIn();
    setTimeout(function () {
      $('.calc').removeClass('show');
      $('.calc__stage-final').fadeOut();
      $('.calc__nav-btn._prev').removeClass('show');
      $('.calc__stage-1').fadeIn();
      $('.calc__form').get(0).reset();
      $('.calc__nav').addClass('show').attr('style','');
      i = 1;
      $('.calc__submit-wrap').removeClass('show').attr('style','');

    }, 1500);

  });

}

calc2();





$('.calc__close').click(function () {
  $('.calc').removeClass('show');
});



$('a[href*=\\#]:not([href=\\#])').click(function () {
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
  return false;
});


$(window).scroll(function(){
  var wt = $(window).scrollTop();  
  var wh = $(window).height();    
  if (wt > 600) {
    $('.serv-arr-up').show(400);
  }
  else {
   $('.serv-arr-up').hide();
 }
});

if($('select').length) {
  $('select').select2({
    minimumResultsForSearch: -1
  });
}

}); //ready

