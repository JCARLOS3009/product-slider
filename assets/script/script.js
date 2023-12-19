// To use lazy loading, set a data-lazy attribute
// on your img tags and leave off the src

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  });