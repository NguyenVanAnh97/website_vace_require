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

  $('#fPageTop').scrollUp({
    scrollName: "scrollUp", // Element ID
    scrollDistance: 300, // Distance from top/bottom before showing element (px)
    scrollFrom: "top", // 'top' or 'bottom'
    scrollSpeed: 300, // Speed back to top (ms)
    easingType: "linear", // Scroll to top easing (see http://easings.net/)
    animation: "fade", // Fade, slide, none
    animationSpeed: 200, // Animation speed (ms)
    scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
    scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
    scrollText: "Scroll to top", // Text for element, can contain HTML
    scrollTitle: false, // Set a custom <a> title if required.
    scrollImg: false, // Set true to use image
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    zIndex: 2147483647, // Z-Index for the overlay
  });

  window.onscroll = function (e) {
    let scrollY = window.scrollY;
    if (scrollY > 200) {
      $("#fPageTop").css("display", "block");
    } else {
      $("#fPageTop").css("display", "none");
    }
  };
})(jQuery);
