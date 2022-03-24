$(document).ready(function () {
  $('.best-slider').on('init', function(event, slick){
    AOS.init();
  });

  $
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

  $('.btn').on('click', function() {
    $(this).addClass('active-click');
    let btn = this;
    setTimeout (function() {
 
      $(btn).removeClass('active-click');
    }, 600)
    
  })

  let qwiz_cnt_5 = true;
 

  $('.header-final-form-messagers_wrapper').on('click', function() {
  	$('.header-final-form-messagers_wrapper').removeClass('messager-active');
  	$(this).addClass('messager-active');
    $('.header-final-form-messagers').removeClass('messager-red');
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
    ym(87972804,'reachGoal','quiz-start')

    $('.qwiz-modal').addClass('qwiz-modal-active');
    $('html').addClass('overflow-body');
  	return false;
  })
  console.log()

  let yes_to_next = false;

  $('.qwiz-modal-slide-item').on('click', function() {
    //yes_to_next = true;
    yes_to_next = false;
    let parent = $(this).parent('.qwiz-modal-slide-row');
    parent = $(parent).children('.qwiz-modal-slide-item');
    $(parent).removeClass('qwiz-modal-slide-item_active');
    $(this).addClass('qwiz-modal-slide-item_active');
    $('.qwiz-modal-slider-all_slide').removeClass('slider-not-select');

    let parent_final = $(this).closest('.qwiz-modal-slider-all_slide')
    //let parent_all = $(this).closest('.slick-track')
    let count = $(parent_final).attr('data-slick-index');
    if (count == 4) {

      if (qwiz_cnt_5) {
        ym(87972804,'reachGoal','quiz_step_5');
        qwiz_cnt_5 = false;
        
      }

      if ($('.qwiz-modal-slide-item_no').hasClass('qwiz-modal-slide-item_active')) {
        let elemets = $('.qwiz-modal-slider-all_slide')[1];
        let element = $(elemets).find('.qwiz-modal-slide-item');
        element = element[2];
        $(element).addClass('qwiz-modal-slide-item_active')
      }

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
      if ($(this).hasClass('qwiz-modal-slide-item_no')) {
        setTimeout(explode2, 500);
      }
      else{
        setTimeout(explode, 500);
      }
      
    }

  })

  $('.qwiz-modal__close').on('click', function() {
    $('.qwiz-modal').removeClass('qwiz-modal-active');
    $('html').removeClass('overflow-body');
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
      responsive: [
          {
            breakpoint: 1168,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 968,
            settings: {
              slidesToShow: 1,
              fade: true,
              cssEase: 'linear',
            }
          }
        ]
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
  
  function explode2(){
      $('.qwiz-modal-slider-all').slick('slickGoTo', 2);
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
    let slide_now = $('.qwiz-modal-slider-all').find('.slick-current');
    slide_now = slide_now.attr('data-slick-index');
    if (slide_now == 2 && $('.qwiz-modal-slide-item_no').hasClass('qwiz-modal-slide-item_active')) {
      $('.qwiz-modal-slider-all').slick('slickGoTo', 0);
    }
    else{
      $('.qwiz-modal-slider-all').slick('slickPrev');
    }
    //console.log(slide_now)
    
    return false;
  })

  $('.qwiz-modal-slide-arrow__next').on('click', function() {
    let slide_parent = $(this).closest('.qwiz-modal-left').find('.slick-active');
    slide = $(slide_parent).find('.qwiz-modal-slide-item_active');
    if (slide[0] != undefined) {
      //$('.qwiz-modal-slider-all').slick('slickNext');

      let slide_now = $('.qwiz-modal-slider-all').find('.slick-current');
      slide_now = $(slide_now)[0]
      let test_item = $(slide_now).find('.qwiz-modal-slide-item_active');

      if ($(test_item).hasClass('qwiz-modal-slide-item_no')) {
        if (yes_to_next) {
          $('.qwiz-modal-slider-all').slick('slickGoTo', 2);
          
        }
      }
      else{
        if (yes_to_next) {
          $('.qwiz-modal-slider-all').slick('slickNext');
        }
      }
    }
    else{
      $(slide_parent).addClass('slider-not-select');
    }


    //
    return false;
  })

  $('.qwiz-modal-slider-all').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //yes_to_next = false;

    //let test_item = $(nextSlide).find('.qwiz-modal-slide-item_active');
    //console.log(test_item);

    if (currentSlide == 0) {
      if ($('.qwiz-modal-slide-item_yes').hasClass('qwiz-modal-slide-item_active')) {
        //$(this).slick('slickGoTo', 3);
      }
      else{
        //alert('Нет')
        

      }
    }

    let counter = nextSlide;
    let ele = $('.qwiz-modal-slider-all_slide')[counter]
    let element = $(ele).find('.qwiz-modal-slide-item_active');
    //$(element).removeClass('qwiz-modal-slide-item_active');
  });
  
  let qwiz_cnt_1 = true;
  let qwiz_cnt_2 = true;
  let qwiz_cnt_3 = true;
  let qwiz_cnt_4 = true;
  


  $('.qwiz-modal-slider-all').on('afterChange', function(event, slick, currentSlide, nextSlide){
    
    if (currentSlide == 1 && qwiz_cnt_1) {
      ym(87972804,'reachGoal','quiz_step_1');
      qwiz_cnt_1 = false;
    }
    if (currentSlide == 2 && qwiz_cnt_2) {
      ym(87972804,'reachGoal','quiz_step_2');
      qwiz_cnt_2 = false;
    }
    if (currentSlide == 3 && qwiz_cnt_3) {
      ym(87972804,'reachGoal','quiz_step_3');
      qwiz_cnt_3 = false;
    }
    if (currentSlide == 4 && qwiz_cnt_4) {
      ym(87972804,'reachGoal','quiz_step_4');
      qwiz_cnt_4 = false;
    }



    let slide_now = $('.qwiz-modal-slider-all').find('.slick-current');
    slide_now = $(slide_now)[0]
    let test_item = $(slide_now).find('.qwiz-modal-slide-item_active');
    test_item = test_item[0]
    if (test_item != undefined) {
      yes_to_next = true;
    }
    
  });

  $('.form__btn_send').on('click', function() {
    let input_val = $('.phone').val();
    let check_1 = false;
    let check_2 = false;

    if (input_val != '') {
      check_1 = true;
      $('.phone').removeClass('phone-red')
    }
    else{
      $('.phone').addClass('phone-red')
      check_1 = false;
      
    }

    let messager = $('.header-final-form-messagers');
    messager = $(messager).find('.messager-active')
    messager = messager[0]

    if (messager != undefined) {
      check_2 = true;
      $('.header-final-form-messagers').removeClass('messager-red');
    }
    else{
      $('.header-final-form-messagers').addClass('messager-red');

      check_2 = false;
      
    }
    
    if (check_1 && check_2) {
      let messager_final = $('.header-final-form-messagers');
      messager_item = $(messager_final).find('.messager-active')

      let message_index = $('.header-final-form-messagers_wrapper').index(messager_item)

      let form_phone = $('.phone').val()

      localStorage.setItem('messager_index', message_index);
      localStorage.setItem('phone_user', form_phone);
      
      location.href = "thanks-1.html";
    }
    return false;
  })
})