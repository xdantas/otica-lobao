/* FUNÇÃO DO BOOSTRAP PARA REALIZAÇÃO DO SCROLL AO CLICAR NOS LINKS DO NAV */
(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 56)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function() {
            toggleSidebarMenu();
        });
  
  })(jQuery);

/* ALTERAÇÕES DO CSS DO NAVBAR DURANTE O SCROLL NA PÁGINA */

  setInterval(function(){
    largura_tela = $(window).width();

    altura_pagina = window.pageYOffset;

    if (altura_pagina < 25) {
        $('#nav').css( "background-color", "transparent" );
        $('#links-menu .nav-link').css( "color", "#ffffff" );
        $('#links-menu .nav-link').css( "text-shadow", "1px 1px 4px rgba(150, 150, 150, 1)" );
        $('#nav').css( "transition", "all 0.5s" );
    } else {
        $('#nav').css( "background-color", "#ededed" );
        $('#links-menu .nav-link').css( "color", "#000000" );
        $('#links-menu .nav-item.active .nav-link').css( "color", "#f00000" );
        $('#links-menu .nav-link').css( "text-shadow", "none" );
        $('#nav').css( "transition", "all 0.5s" );
    }

    if (largura_tela > 990) {
      window.addEventListener("scroll", function() {
        largura_tela = $(window).width();
            if (altura_pagina < 25) {
                $('#nav').css( "background-color", "transparent" );
                $('#links-menu .nav-link').css( "color", "#ffffff" );
                $('#links-menu .nav-link').css( "text-shadow", "1px 1px 4px rgba(150, 150, 150, 1)" );
                $('#nav').css( "transition", "all 0.5s" );
            } else {
                $('#nav').css( "background-color", "#ededed" );
                $('#links-menu .nav-link').css( "color", "#000000" );
                $('#links-menu .nav-item.active .nav-link').css( "color", "#f00000" );
                $('#links-menu .nav-link').css( "text-shadow", "none" );
                $('#nav').css( "transition", "all 0.5s" );
            }
      });
    } else {
        $('#nav').css( "background-color", "#ededed" );
        $('#links-menu .nav-link').css( "color", "#000000" );
        $('#links-menu .nav-item.active .nav-link').css( "color", "#f00000" );
        $('#links-menu .nav-link').css( "text-shadow", "none" );
        $('#nav').css( "transition", "all 0.5s" );
    }
  }, 500);

/* ALTERAÇÕES DO MENU NAVBAR PARA RESPONSIVIDADE */
function toggleSidebarMenu() {
    if($('#menu-principal').hasClass('opened-menu-sidebar')) {
        $('#menu-principal').addClass('closed-menu-sidebar');
        $('#menu-principal').removeClass('opened-menu-sidebar');
        $('.hamburguer').removeClass('hamburguer-actived');
    } else {
        $('#menu-principal').addClass('opened-menu-sidebar');
        $('.hamburguer').addClass('hamburguer-actived');
        $('#menu-principal').removeClass('closed-menu-sidebar');
    }
}

/* CHAMADAS DO SLICK.JS - SLIDER */
$('.marcas-carousel').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 500,
      settings: {
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
});

$('.parceiros-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
  ]
});