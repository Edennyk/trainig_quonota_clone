// Home scroll down button
$(".side__link").click(function (event) {
  event.preventDefault();
  $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
});

// Footer scroll up button
$(".footer-scroll__link").click(function (event) {
  event.preventDefault();
  $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
});

// When scroll down, sticky Header show and hide
$(document).ready(function () {
  $(".sticky").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        $(".sticky").fadeIn();
        $("#toggle__menu span").css("background-color", "#0E0E0E");
      } else {
        $(".sticky").fadeOut();
        $("#toggle__menu span").css("background-color", "#fff");
      }
    });
  });
});

$(document).ready(function () {
  $(".open").click(function () {
    if ($(".open").hasClass("open")) {
      $(".open").addClass("close").removeClass("open");
      $(".mobile").css("visibility", "visible");
    } else if ($(".close").hasClass("close")) {
      $(".close").addClass("open").removeClass("close");
      $(".mobile").css("visibility", "hidden");
    }
  });
});

// Statistic section rolling number
function rollingNumber(){
  $({ val: 0}).animate(
    { val: 100 },
    {
      duration: 1500,
      progress: function () {
        var now = this.val;
        $(".first-num").text(Math.ceil(now));
      },
    }
  );

  $({ val: 10 }).animate(
    { val: 50 },
    {
      duration: 1500,
      progress: function () {
        var now = this.val;
        $(".second-num").text(Math.ceil(now));
      },
    }
  );

  $({ val: 1 }).animate(
    { val: 4 },
    {
      duration: 1500,
      progress: function () {
        var now = this.val;
        $(".last-num").text(Math.ceil(now));
      },
    }
  );
}

$(document).ready(function(){
  $(window).scroll(function(){
    var scrollValue = $(".stat").offset().top - window.innerHeight;
    if ($(window).scrollTop() >= scrollValue) {
      rollingNumber();
    }
  });
});


$("document").ready(function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: "3",
    spaceBetween: 80,
    speed: 600,
    direction: "horizontal",
    keyboardControl: true,
    mousewheelControl: "true",
    loopedSlides: 7,

    navigation: {
      nextEl: ".slider__arrow--next",
      prevEl: ".slider__arrow--prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
});
