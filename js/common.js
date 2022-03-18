$(document).ready(function () {
  $('.best-slider').on('init', function(event, slick){
    AOS.init();
  });
  jQuery(function($){
    $(document).mouseup( function(e){ // событие клика по веб-документу
      let div = $("#qwiz-modal-inner"); // тут указываем ID элемента
      if ( !div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
          $('.qwiz-modal').removeClass('qwiz-modal-active');
          $('html').removeClass('overflow-body');
      }
    });
  });

  $('.header-final-form-messagers_wrapper').on('click', function() {
  	$('.header-final-form-messagers_wrapper').removeClass('messager-active');
  	$(this).addClass('messager-active');
  	return false;
  })

 if ($(window).width() <= '968'){
    //$('.nav-soc, .nav-phone').wrapAll('<div class="nav-mobile-wrapper">_/div>');
  }

  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.btn-open').on('click', function() {
    $('.qwiz-modal').addClass('qwiz-modal-active');
    $('html').addClass('overflow-body');
  	return false;
  })

  $('.qwiz-modal-slide-item').on('click', function() {
    let parent = $(this).parent('.qwiz-modal-slide-row');
    parent = $(parent).children('.qwiz-modal-slide-item');
    $(parent).removeClass('qwiz-modal-slide-item_active');
    $(this).addClass('qwiz-modal-slide-item_active');
    $('.qwiz-modal-slider-all_slide').removeClass('slider-not-select');

    let parent_final = $(this).closest('.qwiz-modal-slider-all_slide')
    //let parent_all = $(this).closest('.slick-track')
    let count = $(parent_final).attr('data-slick-index');
    if (count == 4) {
      $('.qwiz-modal').removeClass('qwiz-modal-active');
      $('html').removeClass('overflow-body');

      $('.final-modal').addClass('final-modal-active');
      $('.dark-window').addClass('dark-window-active');

      let selects_elements = $('.qwiz-modal-slider-all_slide').find('.qwiz-modal-slide-item_active');

      let answer_1 = selects_elements[0]
      answer_1 = $(answer_1).text();
      answer_1 = answer_1.replace(/ +/g, ' ').trim();

      let answer_2 = selects_elements[1]
      answer_2 = $(answer_2).text();
      answer_2 = answer_2.replace(/ +/g, ' ').trim();

      let answer_3 = selects_elements[2]
      answer_3 = $(answer_3).text();
      answer_3 = answer_3.replace(/ +/g, ' ').trim();

      let answer_4 = selects_elements[3]
      answer_4 = $(answer_4).text();
      answer_4 = answer_4.replace(/ +/g, ' ').trim();

      let answer_5 = selects_elements[4]
      answer_5 = $(answer_5).text();
      answer_5 = answer_5.replace(/ +/g, ' ').trim();
      
      
      if ($('body').hasClass('main-page')) {
        localStorage.setItem('answer_1', answer_1);
        localStorage.setItem('answer_2', answer_2);
        localStorage.setItem('answer_3', answer_3);
        localStorage.setItem('answer_4', answer_4);
        localStorage.setItem('answer_5', answer_5);
      }
      setTimeout(time_1, 1000);
    }
    else{
      setTimeout(explode, 500);
    }

  })

  $(".phone").mask("+7 (999) 999-9999");
  $('.best-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      speed: 700,
      fade: true,
      cssEase: 'linear',
      prevArrow: $('.best-slider-arrow__l a'),
      nextArrow: $('.best-slider-arrow__r a'),
   });

  $('.reviews-slider').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      speed: 1000,
      swipe: false,
      prevArrow: $('.best-slider-arrow__l a'),
      nextArrow: $('.best-slider-arrow__r a'),
   });

  $('.qwiz-modal-slider-all').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed: 700,
      fade: true,
      cssEase: 'linear',
      swipe: true,
      asNavFor: '.qwiz-modal-text-slider',
      responsive: [
          {
            breakpoint: 969,
            settings: {
              adaptiveHeight: true,
            }
          }
        ]
   });

  $('.qwiz-modal-text-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed: 700,
      fade: true,
      cssEase: 'linear',
      swipe: true,
      asNavFor: '.qwiz-modal-slider-all',
   });

  function explode(){
    $('.qwiz-modal-slider-all').slick('slickNext');
  }
  
  let text_timer = $('.final-modal__enter');

  function time_1() {
    $(text_timer).text('Поиск свободного специалиста . . .');
    setTimeout(time_2, 900);
  }
  function time_2() {
    $(text_timer).text('Отправка ответов . . .');
    setTimeout(time_3, 900);
  }
  function time_3() {
    $(text_timer).text('Юрист получил анкету . . .');
    setTimeout(time_4, 900);
  }
  function time_4() {
    $(text_timer).text('готово!');
    location.href = "final-1.html";
  }

  $('.qwiz-modal-slide-arrow__prev').on('click', function() {
    $('.qwiz-modal-slider-all').slick('slickPrev');
    return false;
  })

  $('.qwiz-modal-slide-arrow__next').on('click', function() {
    let slide_parent = $(this).closest('.qwiz-modal-left').find('.slick-active');
    slide = $(slide_parent).find('.qwiz-modal-slide-item_active');
    if (slide[0] != undefined) {
      //$('.qwiz-modal-slider-all').slick('slickNext');
    }
    else{
      $(slide_parent).addClass('slider-not-select');
    }
    //
    return false;
  })

  $('.qwiz-modal-slider-all').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    let counter = nextSlide;
    let ele = $('.qwiz-modal-slider-all_slide')[counter]
    let element = $(ele).find('.qwiz-modal-slide-item_active');
    $(element).removeClass('qwiz-modal-slide-item_active');
  });
  
})