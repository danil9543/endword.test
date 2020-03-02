$('.news-slider').slick({
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $('.news-sliderButtons__prev'),
    nextArrow: $('.news-sliderButtons__next'),
    responsive: [
    {
      breakpoint: 1474,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1132,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 769,
      settings: "unslick"
    }
  ]
});

$('.talking-slider').slick({
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $('.news-sliderButtons__prev.talking-prev'),
    nextArrow: $('.news-sliderButtons__next.talking-next'),
    responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 769,
      settings: "unslick"
    }
  ]
});

$('.what-slider').slick({
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $('.news-sliderButtons__prev.what-prev'),
    nextArrow: $('.news-sliderButtons__next.what-next'),
    responsive: [
    {
      breakpoint: 835,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
/*$('.notboring-slider').on('init', function(event, slick){
    console.log('slider was initialized');
})*/
/*$('.notboring-slider').slick({
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.news-sliderButtons__prev.notboring-prev'),
    nextArrow: $('.news-sliderButtons__next.notboring-next'),
    responsive: [
    {
      breakpoint: 835,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});*/


var rev = $('.notboring-slider');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  var
    cur = $(slick.$slides[nextSlide]);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
  speed: 0,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  prevArrow: $('.news-sliderButtons__prev.notboring-prev'),
  nextArrow: $('.news-sliderButtons__next.notboring-next'),
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,
  customPaging: function(slider, i) {
    return '';
  },
});