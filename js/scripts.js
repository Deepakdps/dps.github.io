/*!
 * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 70,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 100,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

!(function ($) {
  "use strict";

  // PROGRESSBAR CLASS DEFINITION
  // ============================

  var Progressbar = function (element) {
    this.$element = $(element);
  };

  Progressbar.prototype.update = function (value) {
    var $div = this.$element.find("div");
    var $span = $div.find("span");
    $div.attr("aria-valuenow", value);
    $div.css("width", value + "%");
    $span.text(value + "% Complete");
  };

  Progressbar.prototype.finish = function () {
    this.update(100);
  };

  Progressbar.prototype.reset = function () {
    this.update(0);
  };

  // PROGRESSBAR PLUGIN DEFINITION
  // =============================

  $.fn.progressbar = function (option) {
    return this.each(function () {
      var $this = $(this),
        data = $this.data("jbl.progressbar");

      if (!data) $this.data("jbl.progressbar", (data = new Progressbar(this)));
      if (typeof option == "string") data[option]();
      if (typeof option == "number") data.update(option);
    });
  };

  // PROGRESSBAR DATA-API
  // ====================

  $(document).on("click", '[data-toggle="progressbar"]', function (e) {
    var $this = $(this);
    var $target = $($this.data("target"));
    var value = $this.data("value");

    e.preventDefault();

    $target.progressbar(value);
  });
})(window.jQuery);
