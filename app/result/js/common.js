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



  const header__current = $('.header__current span');

  $('.header__total span').html($(".header__slider").slick("getSlick").slideCount);


  

  $('.header__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    header__current.html(currentSlide + 1)

  });

  /************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');  

});*/

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

