/**
* Template Name: Laura - v2.0.0
* Template URL: https://bootstrapmade.com/laura-free-creative-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });
  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });
  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

})(jQuery);

  // Mostrar previsualización al hacer hover en un link

!function(e){var t="mini-preview";e.fn.miniPreview=function(i){return this.each(function(){var n=e(this),a=n.data(t);a&&a.destroy(),(a=new s(n,i)).generate(),n.data(t,a)})};var s=function(i,n){this.$el=i,this.$el.addClass(t+"-anchor"),this.options=e.extend({},this.defaultOptions,n),this.counter=s.prototype.sharedCounter++};s.prototype={sharedCounter:0,defaultOptions:{width:240,height:300,scale:.4,prefetch:"pageload"},generate:function(){this.createElements(),this.setPrefetch()},createElements:function(){var s=e("<div>",{class:t+"-wrapper"}),i=e("<div>",{class:t+"-loading"}),n=e("<iframe>",{class:t+"-frame"}),a=e("<div>",{class:t+"-cover"});s.appendTo(this.$el).append(i,n,a),s.css({width:this.options.width+"px",height:this.options.height+"px"});var r=100/this.options.scale;n.css({width:r+"%",height:r+"%",transform:"scale("+this.options.scale+")"});var o=parseInt(this.$el.css("font-size").replace("px",""),10),h=(this.$el.height()+o)/2,c=(this.$el.width()-s.outerWidth())/2;s.css({top:h+"px",left:c+"px"})},setPrefetch:function(){switch(this.options.prefetch){case"pageload":this.loadPreview();break;case"parenthover":this.$el.parent().one(this.getNamespacedEvent("mouseenter"),this.loadPreview.bind(this));break;case"none":this.$el.one(this.getNamespacedEvent("mouseenter"),this.loadPreview.bind(this));break;default:throw"Prefetch setting not recognized: "+this.options.prefetch}},loadPreview:function(){this.$el.find("."+t+"-frame").attr("src",this.$el.attr("href")).on("load",function(){e(this).css("background-color","#fff")})},getNamespacedEvent:function(e){return e+"."+t+"_"+this.counter},destroy:function(){this.$el.removeClass(t+"-anchor"),this.$el.parent().off(this.getNamespacedEvent("mouseenter")),this.$el.off(this.getNamespacedEvent("mouseenter")),this.$el.find("."+t+"-wrapper").remove()}}}(jQuery);
$(function() {$('#links a').miniPreview({ prefetch: 'none' });});  

