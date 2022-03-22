jQuery(document).ready(function( $ ) {


  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
    $('.select-nav').removeClass('open');
  });


  $('.burger').click(function () {
    $('.open-mnu-w').addClass('show');
    $('body').addClass('ohi');
  });


  $('.mnu__close').click(function () {
    $('.open-mnu-w').removeClass('show');
    $('body').removeClass('ohi');
  });


  $('.select-nav').click(function (e) {
    e.stopPropagation();  
  });



  $(".tabs__content").slick({
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 1,
    speed: 200,
    swipe: false,     
    cssEase: 'ease'
  });

  $(".showrooms__actions a").click(function(e){
    e.preventDefault();
    $(this).addClass('active')
    .siblings()
    .removeClass('active');
    slideIndex = $(this).index();
    $('.tabs__content').slick('slickGoTo', parseInt(slideIndex))
  });


  $(".openclub__slider").slick({
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 1,
    speed: 600,
    swipe: false,     
    cssEase: 'ease'
  });

  $(".openclub__actions a").click(function(e){
    e.preventDefault();
    $(this).addClass('active')
    .siblings()
    .removeClass('active');
    slideIndex = $(this).index();
    $('.openclub__slider').slick('slickGoTo', parseInt(slideIndex))
  });



  $(".equipment__slider").slick({
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 3,
    speed: 600,
    responsive: [

    {
      breakpoint: 641,
      settings: {
        slidesToShow: 2
      }
    },    
    ]
  });


  $('.openclub__slide').each(function () {    
    const control = $(this).find('.tab__list-item');
    const content = $(this).find('.openclub__it');

    control.click(function () {
      itemPosition = $(this).index();
      $(this).addClass('active')
      .siblings()
      .removeClass('active');
      content.eq(itemPosition)
      .addClass('active')
      .siblings()
      .removeClass('active');
    })
  });


  $(".equipment__nav a").click(function(e){
    e.preventDefault();
    $(this).addClass('active')
    .siblings()
    .removeClass('active');
    slideIndex = $(this).index();
    $('.equipment__slider').slick('slickGoTo', parseInt(slideIndex))
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

/*  $('.wrapper').prepend('<span class="eye-3"></span>');
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


  


  $('.calculate__start, .top__btn, .open__btn').click(function () {
    $('.calc').addClass('show');
  });


  $('.select-nav').each(function () {
    const self = $(this);
    const list = $(this).find('.select-nav__list');
    const item = list.find('a');
    const selected = $(this).find('.nav-selected');
    const selected_span = $(this).find('.nav-selected span');
    
    selected.click(function () {
      self.toggleClass('open');
    });

    item.click(function () {
      selected_span.text($(this).find('span').text());
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
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 1100);
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

  
  $('.marquee-1').marquee({
    duration: 17000,
    startVisible: true,
    duplicated: true
  });

  $('.marquee-2').marquee({
    duration: 17000,
    startVisible: true,
    duplicated: true
  });

  $('.marquee-3').marquee({
    duration: 27000,
    startVisible: true,
    duplicated: true
  });
  







  $(".showrooms__slider").each(function () {
    $(this).slick({
      dots: false,
      arrows: false,
      slidesToScroll: 1,
      autoplay: false,    
      slidesToShow: 2,
      speed: 1400
    });
  })


$('.animate').each(function () {
  let self = $(this);
  function scrollShow() {
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = self.offset().top;
    var eh = self.outerHeight();
    var dh = $(document).height();   
    if (wt + wh >= et || wh + wt == dh || eh + et < wh){
      self.addClass('show');
    }
  }
  $(window).scroll(function(){
    scrollShow();  
  });

  setTimeout(scrollShow, 300);
});  


$('img.lazy').lazy({
    effect: "fadeIn",
    effectTime: 200,
    threshold: 0,  
  });

}); //ready




'use strict';
window.addEventListener('DOMContentLoaded', () => {

  function submitForm(formClass) {

    const form = document.querySelector(formClass);
    const row = form.querySelector('.snform__row');    

    form.addEventListener('submit', formSend);
    async function formSend(e) {
      e.preventDefault();      
      let error = formValidate(form);

      if (error === 0) {

      //Отправить форму
    }
    else {

    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);            
      if (input.getAttribute("type") === "text" && input.value === '') {
        formAddError(input);        
        error++;
      }      
      else if ( input.getAttribute("type") === "checkbox" && input.checked === false ) {
        formAddError(input);

        error++;
      }
    }
    return error;
  }


  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
}

submitForm('.getcat__form');


});