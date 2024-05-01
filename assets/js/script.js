 // pre-loader
 $(document).ready(function(){
    setTimeout(function(){
      $('.pre-loader').fadeOut();
    },3000);
  });

  // sticky header
  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

// bottomtop 
var btn = $('.top-bottom');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


$(document).ready(function(){

    $('#banner').owlCarousel({
        items: 1,
        // dotsData:true,
        autoplay:true,
        animateIn:'fadeInUp',
        // animateOut:'fadeInDown',
        smartSpeed:5000,
        loop:true,

    })

    $('#slider_testi').owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:3000,
        loop:true,
    });
  });


  
