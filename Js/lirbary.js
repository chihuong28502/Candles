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
        autoplay: true,
        dots :true,
        arrows: false,
        autoplaySpeed: 3000,
        infinity: true,
    });
});