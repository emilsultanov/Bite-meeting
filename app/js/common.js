

$(document).ready(function () {


   // Introduction-slider
   var swiper = new Swiper('.introduction__slider', {
      loop: true,
      spaceBetween: 30,
      effect: 'fade',
      autoplay: true,
      speed: 250,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   });



   // Eventstime Accordion and Tabs
   $('.collapse').collapse();



   // Partners-slider
   var swiper = new Swiper('.partners-swiper', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      breakpoints: {
         1024: {
            slidesPerView: 3,
            spaceBetween: 30,
         },
         991: {
            slidesPerView: 2,
            spaceBetween: 20,
         },

         640: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         500: {
            slidesPerView: 2,
            spaceBetween: 20,
         }
      }
   });


   // Get width of window for flags
   let windowWidth = $(window).width();
   $(window).resize(function () {
      windowWidth = $(window).width();

      
   if (windowWidth <= 991) {
      $('.menu__list').prepend($('.flag'))
   }
   });




   // Flag-dropdown
   $('.flag').hover(
      function () {
         if (windowWidth >= 992) {
            $('.flag__list').stop(true, true).addClass('flag__list_active');
         }
      },
      function () {
         if (windowWidth >= 992) {
            $('.flag__list').stop(true, true).removeClass('flag__list_active');
         }
      }
   );




   // Dropdown-menu
   $('.dropdown').hover(
      function () {
         if (windowWidth >= 992) {
            $('.dropdown__container').stop(true, true).fadeIn(200);
            $('.header').stop(true, true).addClass('header_active');
            $('.topNav__icon').stop(true, true).addClass('topNav__icon_active');
            $('.topNav__link').stop(true, true).addClass('topNav__link_active');
            $('.logo').stop(true, true).addClass('logo_active');
            $('.menu__link').stop(true, true).addClass('menu__link_active');
         }
      },
      function () {
         if (windowWidth >= 992) {
            $('.dropdown__container').stop(true, true).fadeOut(200);
            $('.header').stop(true, true).removeClass('header_active');
            $('.topNav__icon').stop(true, true).removeClass('topNav__icon_active');
            $('.topNav__link').stop(true, true).removeClass('topNav__link_active');
            $('.logo').stop(true, true).removeClass('logo_active');
            $('.menu__link').stop(true, true).removeClass('menu__link_active');
         }
      }
   );



   // Burger-menu
   $('.burger').click(function () {
      $('.menu__box').stop(true, true).toggleClass('menu__box_active');
      $('body').toggleClass('overflow-hidden');
   });


   $('.close-menu').click(function () {
      $('.menu__box').stop(true, true).toggleClass('menu__box_active');
      $('body').toggleClass('overflow-hidden');
   });

   $('.menu__overlay').click(function () {
      $('.menu__box').stop(true, true).toggleClass('menu__box_active');
      $('body').toggleClass('overflow-hidden');
   });



   // News-slider
   var swiper = new Swiper('.news-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      breakpoints: {
         1024: {
            slidesPerView: 3,
            spaceBetween: 30,
         },
         991: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         640: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         500: {
            slidesPerView: 1,
            spaceBetween: 10,
         }
      }
   });



   // TopNav menu fixed
   let topNav = $('.topNav');
   let header = $('.header');

   $(window).scroll(function () {
      let windowScrollTop = $(this).scrollTop();
      if (windowScrollTop >= header.outerHeight(true)) {
         $('.footer').append(topNav);
         header.addClass('header_fixedTop');
         $('.burger i').css({ 'color': 'black' });
         topNav.find('.topNav__list_right .topNav__item').hide();
         topNav.find('.author').show();
      }

      else if (windowScrollTop <= header.outerHeight(true)) {
         header.prepend(topNav);
         header.removeClass('header_fixedTop');
         $('.burger i').css({ 'color': 'white' });
         topNav.find('.topNav__list_right .topNav__item').show();
         topNav.find('.author').hide();
      }
   });



   // team-slider
   var swiper = new Swiper('.team-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: true,
      pagination: {
         el: '.team-pagination',
         clickable: true,
      },

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      breakpoints: {
         // 1199:{
         //    slidesPerView: 2,
         //    spaceBetween: 20, 
         // }
         991: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         575: {
            slidesPerView: 1,
            spaceBetween: 10,
         },
      }
   });




   // company-slider
   var swiper = new Swiper('.company__slider', {
      slidesPerView: 5,
      spaceBetween: 50,
      // init: false,
      loop: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      pagination: false,
      // pagination: {
      //    el: '.swiper-pagination',
      //    clickable: true,
      // },
      breakpoints: {

         1385: {
            slidesPerView: 5,
            spaceBetween: 50,
         },
         1199: {
            slidesPerView: 4,
            spaceBetween: 40,
         },
         991: {
            slidesPerView: 3,
            spaceBetween: 30,
         },
         575: {
            slidesPerView: 1,
            spaceBetween: 10,
         },


      }
   });



   // Related-news slider
   var swiper = new Swiper('.relatedNews__slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      breakpoints: {
         991: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         575: {
            slidesPerView: 1,
            spaceBetween: 10,
         }
      }
   });


   var galleryThumbs = new Swiper('.newsview__thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,

      // freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
         575: {
            slidesPerView: 3,
            spaceBetween: 30,
         },
         550: {
            slidesPerView: 2,
            spaceBetween: 20,
         }
      }
   });
   var galleryTop = new Swiper('.newsview__top', {
      spaceBetween: 10,
      loop: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      thumbs: {
         swiper: galleryThumbs
      }
   });




   // categories and isotope

   $('.categories_container').isotope({
      // options
      itemSelector: '.categories_card',
      layoutMode: 'fitRows'
   });


   let categories_item = $('.categories__list .categories__item');
   let first_categories_item = categories_item.eq(0);

   first_categories_item.addClass('categories__item_active');
   first_categories_item.find('.magic_line').addClass('magic_line_active');

   categories_item.click(function () {
      categories_item.removeClass('categories__item_active');
      categories_item.find('.magic_line').removeClass('magic_line_active');
      $(this).addClass('categories__item_active');
      $(this).find('.magic_line').addClass('magic_line_active');

      var selector=$(this).attr('data-filter');
      $('.categories_container').isotope({ filter: selector });
      return false;
   });



  








































});













