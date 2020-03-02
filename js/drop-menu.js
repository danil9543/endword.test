$(document).ready(function(){
   //Проверка на наличе аттрибута
   $.fn.hasAttr = function(name) {
      return this.attr(name) !== undefined;
   };

   function langs(){
      if($('.header-menu__langsModal').css('display') == 'none'){
         $('.header-menu__langsModal').css('display', 'block');
      } else {
         $('.header-menu__langsModal').removeAttr('style');
      }
   }
   function burgerAnimated(){
      if ($('.header-menu__burger').find('.header-menu__burgerLine').eq(0).hasAttr('style')) {
         $('.header-menu__burger').find('.header-menu__burgerLine').removeAttr('style');
      } else {
         $('.header-menu__burger').find('.header-menu__burgerLine').eq(0).css('width', '20px');
         $('.header-menu__burger').find('.header-menu__burgerLine').eq(2).css('width', '30px');
      }
      if($('.menu').css('left') == '-1000px'){
         $('.menu').css('left', '0');
         $('.menu-closer').css('display', 'block');
         $('.menu-closer').animate({
               opacity: 1
         }, 800);
      } else {
         $('.menu-closer').removeAttr('style');
         $('.menu').removeAttr('style');
      }    
   }
   function menuCloser(){
      $('.header-menu__langsModal').removeAttr('style');
      burgerAnimated();
   }

   //Языки открыть закрыть
   $('.header-menu__lang.active').on("click", function(){
      langs();
   });
   //Бургер открыть закрыть
   $('.header-menu__burger').on("click", function(){
      burgerAnimated();
   });
   //Закрывашка меню
   $('.menu-closer').on("click", function(){
      menuCloser();
   });

   $('.flowing-scroll').on("click", function(){
      let coord = $(this).attr('href');
          coord = $(coord).offset().top-64;
      if(coord !== undefined && coord !== '') {
         $('html, body').animate({
            scrollTop:coord
         }, 600);
         if($(window).width() <= 1020){
            menuCloser();
         }
      }
   });

   //Берем ссылку из дата атребута, подгоняем её, вставляем в верстку.
   $('.welcome-block__button').on("click", function(){
      var str = $(this).attr('data-video-url');
      str = str.replace( 'https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
      str = str.replace( 'https://youtu.be/', 'https://www.youtube.com/embed/');
      console.log(str);
      if($('#Youtube').attr('src')!=str+'?rel=0&enablejsapi=1'){
          $('#Youtube').attr('src',str+'?rel=0&enablejsapi=1');
      }
      if($(window).width() > 1024){
         $('#Youtube').width(($(window).width()/100)*50);
         $('#Youtube').height((($(window).width()/100)*50)/1.777);
      } else {
         $('#Youtube').width(($(window).width()/100)*90);
         $('#Youtube').height((($(window).width()/100)*90)/1.777);
      }
      $('#pauseYoutube').css('display', 'block');
   });
   //Закрыть видео
   $('#pauseYoutube').click(function(){
        $('#pauseYoutube').removeAttr('style');
    });

   //Ресайз, при ресайзе выравнивает размер карточки по высоте контента внутри, а так же выравнивает размер контейнера
   //Ровняет карточке по макс высоте
   function resizeCard(){
      let maxTalkingItemHeight = $('.card.talking').eq(0).height();
      let paddingHeight;
      if($(window).width() >= 768){
         $('.card.talking').each(function( index ){
            paddingHeight = parseInt($(this).find('.card-talking').css("padding-top")) * 2 + 25;
            let descrHeight = $(this).find('.card-talking__titleText').height() + $(this).find('.card-talking__text.upper').height();
            let avatarHeight = $(this).find('.card-talking__avatar').height();
            if(descrHeight > avatarHeight){
               if(maxTalkingItemHeight < (descrHeight + paddingHeight)) {
                  maxTalkingItemHeight = descrHeight + paddingHeight;
               }
            } else {
               if(maxTalkingItemHeight < (avatarHeight + paddingHeight)) {
                  maxTalkingItemHeight = avatarHeight + paddingHeight;
               }
            }
         });
         $('.card.talking').height(maxTalkingItemHeight);
      }
   }
   //Делает отступ перед кнопками
   function resizeCardMargin(){
      let maxTalkingCardHeight = $('.talking .slick-track').height();
      if($(window).width() >= 768){
         $('.card.talking').each(function( index ) {
            let lowerHeight = $(this).find('.card-talking__text.lower').height();
            if(maxTalkingCardHeight < $(this).height() + lowerHeight){
               maxTalkingCardHeight = $(this).height() + lowerHeight + 20;
            }
         });
         
         $('.talking .slick-track').height(maxTalkingCardHeight);
      }
      
   }

   resizeCardMargin();

   $(window).resize(function() {
      resizeCard();
      resizeCardMargin();
   });
   //Раскрываем карточку о нас говорят
   if($(window).width() >= 768){
      $('.card.talking').mouseover(function(){
         $(this).height($(this).find('.card-talking__titleText').height() + $(this).find('.card-talking__text.upper').height() + $(this).find('.card-talking__text.lower').height() + parseInt($(this).find('.card-talking').css("padding-top"))*2 + 15);
      });
      $('.card.talking').mouseout(function(){
         resizeCard();
      });
   }

   //Функция подсвечивающая элемент меню
   function menuItem(){
      let sectionHeight = $('#welcome').height(); //стандартная высота секции
      let uWIndow = $(window).scrollTop()+sectionHeight/3; //координаты экрана пользователя опущенные по высоте на треть высоты экрана
      
      /*if($(window).width() <= 768){*/
         $('.menu-item').each(function (index, value) {
            if(uWIndow > $($(this).attr('href')).offset().top && uWIndow < $($(this).attr('href')).offset().top+sectionHeight){
               
               if(!$(this).hasClass('active')){
                  $('.menu-item').removeClass('active');
                  $(this).addClass('active');
               }
               
            };
         });
      /*}*/
      
   }

   menuItem();
   $(window).scroll(function(){
      setTimeout(menuItem, 25);
   });
   

   setTimeout(function(){ //ВОТ ЭТО ПОВЕСИТЬ НА КОЛБЕКИ СЛАЙДЕРА
      resizeCard();
      resizeCardMargin();

   }, 400);
});