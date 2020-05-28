(function ($) {
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $("#back-top").fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $("#back-top").fadeIn(500);
    }
  });

  $(document).ready(function () {
    // mobile_menu
    var menu = $("ul#navigation");
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        onPageChange: "-",
      });
    }
  });

  $(".active_carousel").owlCarousel({
    loop: true,
    margin: 0,
    items: 2,
    autoplay: true,
    navText: [
      '<i class="ti-angle-left"></i>',
      '<i class="ti-angle-right"></i>',
    ],
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    responsive: {
      0: {
        items: 1,
        dots: false,
        nav: false,
      },
      767: {
        items: 1,
        dots: false,
        nav: false,
      },
      992: {
        items: 1,
        nav: false,
      },
      1200: {
        items: 1,
        nav: false,
      },
      1500: {
        items: 1,
      },
    },
  });

  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {},
    scrollContainer: null,
    resetAnimation: true,
  });
  wow.init();

  new ModalVideo(".popup-video");

  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: "linear",
    scrollTime: 900,
    activeClass: "active",
    onPageChange: null,
    topOffset: 0,
  });
})(jQuery);
