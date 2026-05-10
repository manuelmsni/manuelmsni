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
  // Calculate total experience months from resume dates
  function calcularExperiencia() {
    var totalMeses = 0;
    var hoy = new Date();

    $('.resume-item h5').each(function() {
      var texto = $(this).text().trim();
      if (!texto) return true;

      var partes = texto.split('-');
      if (partes.length < 2) return true;

      var inicioStr = partes[0].trim();
      var finStr = partes[1].trim();

      var inicioParts = inicioStr.split('/');
      if (inicioParts.length < 2) return true;
      var fechaInicio = new Date(parseInt(inicioParts[1]), parseInt(inicioParts[0]) - 1, 1);

      var fechaFin;
      var finLower = finStr.toLowerCase();
      if (finLower === 'actualidad' || finLower === 'present') {
        fechaFin = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
      } else {
        var finParts = finStr.split('/');
        if (finParts.length < 2) return true;
        fechaFin = new Date(parseInt(finParts[1]), parseInt(finParts[0]) - 1, 1);
      }

      var meses = (fechaFin.getFullYear() - fechaInicio.getFullYear()) * 12
                + (fechaFin.getMonth() - fechaInicio.getMonth());
      if (meses > 0) totalMeses += meses;
    });

    return totalMeses;
  }

  // Update counter with calculated experience
  var totalExp = calcularExperiencia();
  $('[data-toggle="counter-up"]').text(totalExp);

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

  // Interactive node network for section backgrounds
  function createNodeNetwork(selector, particleCount) {
    var el = document.querySelector(selector);
    if (!el) return;

    var canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '1';
    canvas.style.pointerEvents = 'none';
    el.insertBefore(canvas, el.firstChild);

    var ctx = canvas.getContext('2d');
    var particles = [];
    var mouse = { x: null, y: null };
    var W, H;
    var MAX_DIST = 150;
    var MOUSE_RADIUS = 200;

    function resize() {
      W = canvas.width = el.offsetWidth;
      H = canvas.height = el.offsetHeight;
    }

    function createParticles(count) {
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 2 + 1
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];

        if (mouse.x !== null) {
          var dx = p.x - mouse.x;
          var dy = p.y - mouse.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 0) {
            var force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.15;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > W) { p.x = W; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > H) { p.y = H; p.vy *= -1; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();

        for (var j = i + 1; j < particles.length; j++) {
          var p2 = particles[j];
          var dx2 = p.x - p2.x;
          var dy2 = p.y - p2.y;
          var dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist2 < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(255, 255, 255, ' + (0.12 * (1 - dist2 / MAX_DIST)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', function(e) {
      var rect = el.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    el.addEventListener('mouseleave', function() {
      mouse.x = null;
      mouse.y = null;
    });

    resize();
    createParticles(particleCount);
    animate();

    window.addEventListener('resize', function() {
      resize();
      createParticles(particleCount);
    });
  }

  createNodeNetwork('#hero', 90);
  createNodeNetwork('.services', 60);
  createNodeNetwork('#footer', 50);

})(jQuery);
