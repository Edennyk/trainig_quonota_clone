// When scroll down, sticky Header show and hide 
$(document).ready(function() {
  $(".header-sticky").hide();
  $(function() {
      $(window).scroll(function() {
          if ($(this).scrollTop() > 10) {
              $('.header-sticky').fadeIn();
              $('.toggle__menu span').css('background-color','#0E0E0E');
          } else {
              $('.header-sticky').fadeOut();
              $('.toggle__menu span').css('background-color','#fff');
          }
      });
  });

});

$(document).ready(function(){
    $(".open").click(function(){
     if($('.open').hasClass('open')){
        $('.open').addClass('close').removeClass('open');
        $('.mobile-nav').css('visibility', 'visible');
     }else if($('.close').hasClass('close')){
        $('.close').addClass('open').removeClass('close');
        $('.mobile-nav').css('visibility', 'hidden');
     }
    });  
  });

  
  $(function () {
    $('.slider').slick({
      slide: 'div', 
        slidesToShow: 3,
        arrows : true,  
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
  });

