$ = jQuery
jQuery(document).ready(function () {
  // main menu
  $(".header-menu-icon").click(function () {
    $("body").addClass("menu-open");
  });
  $(".header-menu-close-icon, .page-overlay").click(function () {
    $("body").removeClass("menu-open");
  });
  $(".menu-top-menu-container .menu-item-has-children > a").append('<span></span>');
  $('.menu-top-menu-container .menu-item-has-children > a').find('span').addClass('sub-menu-open');

  $(document).on('click', '.menu-top-menu-container .menu-item-has-children > a > span', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.parent('a').next('.menu-top-menu-container ul.sub-menu').toggle('slow');
    $this.parent('a').toggleClass('.menu-top-menu-container sub-menu-close');
  });




  // search toggle
  var removeClass = true;
  $(".search-toggle").click(function () {
    $(".search-section").toggleClass('search-open');
    removeClass = false;
  });
  // when clicking the div : never remove the class
  $(".site-header .search-form label input").click(function () {
    removeClass = false;
  });
  // when click event reaches "html" : remove class if needed, and reset flag
  $("html, .close-icon").click(function () {
    if (removeClass) {
      $(".search-section").removeClass('search-open');
    }
    removeClass = true;
  });





  /* back-to-top button*/

  $('.back-to-top').hide();
  $('.back-to-top').on("click", function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });


  $(window).scroll(function () {
    var scrollheight = 400;
    if ($(window).scrollTop() > scrollheight) {
      $('.back-to-top').fadeIn();

    } else {
      $('.back-to-top').fadeOut();
    }
  });



  // slider

  var owllogo = $(".main-slider");

  owllogo.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    autoplay: true,
    autoplayTimeout: 5000,
    fallbackEasing: 'easing',
    transitionStyle: "fade",
    autoplayHoverPause: true,
    animateOut: 'fadeOut'
  });


  var owllogo = $(".service-post-slider");
  owllogo.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    autoplay: true,
    autoplayTimeout: 5000,
    fallbackEasing: 'easing',
    transitionStyle: "fade",
    autoplayHoverPause: true,
    animateOut: 'fadeOut'
  });

   $('#slct').on('change', function(evt){
      var current_val = $(this).val();
      console.log(current_val);
      var sorting_query = $('#sorting-query').val();
      sorting_query = JSON.parse(sorting_query);
      evt.preventDefault();
      jQuery.post(
          rt_agency_pro_script_vars.ajaxurl, 
          {
              'action': 'load_search_results',
              'orderby' : current_val,
              'sorting-query' : sorting_query,
          }, 
          function(response){
               $('.tab-content').html(response);
          }
      );
  })
  // counter js

  function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 1 is increment */

    $this.html(++current);
    if (current > $this.data('count')) {
      $this.html($this.data('count'));
    } else {
      setTimeout(function () {
        count($this)
      }, 250);
    }
  }

  jQuery(".start-count").each(function () {
    jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
    jQuery(this).html('0');
    count(jQuery(this));
  });

  jQuery('.testimonial-slider').owlCarousel({
    center: true,
    loop: false,
    margin: 30,
    dots: true,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });

});

