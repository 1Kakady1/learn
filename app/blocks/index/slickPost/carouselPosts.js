$('.mini-items').slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 700,
  appendDots: $('.dot-carusel'),
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 997,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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