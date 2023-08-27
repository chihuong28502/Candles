$(document).ready(function(){
    $('.slider-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots :true,
        arrows: false,
        autoplaySpeed: 3000,
        infinity: true,
    });
});
$(document).ready(function(){
    $('.product-list').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        dots :true,
        arrows: false,
        autoplaySpeed: 3000,
        infinity: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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
});

$(document).ready(function(){
  $('.slide-product-list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinity: false,

      arrows: true,
      vertical: true,
      verticalSwiping: true,
      prevArrow:"<button  type='button' class='icon-slider-product-up slick-prev pull-left'><i class='fa-solid fa-chevron-up' aria-hidden='true'></i></button>",
      nextArrow:"<button  type='button' class='icon-slider-product-down slick-next pull-right'><i class='fa-solid fa-angle-down' aria-hidden='true'></i></button>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            vertical: false,
            verticalSwiping: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: true,
            vertical: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            vertical: false,
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        }
      ]
  });
});
