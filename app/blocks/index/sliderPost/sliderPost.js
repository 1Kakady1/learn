$('.slider-post').slick({
  dots: false,
  arrows: true,
  nextArrow: $('.arrow-slider__next'),
  prevArrow: $('.arrow-slider__prev'),
  infinite: false,
  fade: true,
  speed: 900,
  appendDots: $('.slider-dot'),
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});