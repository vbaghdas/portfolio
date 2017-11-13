/* global $ ,jQuery ,alert, console, typed, swiper */

// Hamburger Menu Collapse
$(document).ready(function () {
    $(".navbar li a, .navbar h2").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
});

// Loading Screen 
    
$(window).on('load', function () {
    
    "use strict";

    $('.loading-overlay .cssload-loader').fadeOut(1000, function () {

        $(this).parent().fadeOut(1000, function () {

            $('body').css('overflow', 'auto');
            $(this).remove();

        });

    });

});

$(function () {
   
    "use strict";
    
    var sections = $('section'),
        documentEl = $(document),
        parallaxBg = $('.home-paralax'),
        nav = $('nav'),
        nav_height = nav.outerHeight(),
        smoothScroll = $("nav ul li a"),
        progressBar = $(".progress-bar"),
        scrolltop = $('.scrolltop'),
        colors   = $('.color-option .colors li'),
        dl   = $('.color-option .dl li'),
        // Initialize Swiper Plugin
        swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            grabCursor: true,
            autoplay: 6000,
            autoplayDisableOnInteraction: false
        }),
        // Typed Plugin
        typed = new Typed('.type', {
            strings: ["Frontend Developer.", "Web Designer."], /* Here Type Your Title */
            typeSpeed: 100,
            loop: true,
            backDelay: 1200,
            backSpeed: 20
        });
    
    // Smooth Scroll Down
    
    smoothScroll.on("click", function () {
        
        $("html, body").animate({
            
            scrollTop : $("#" + $(this).data("value")).offset().top
            
        }, 1000);
        
        
    });
    
    
    $(".home .down").on("click", function () {
        
        $("html, body").animate({
            
            scrollTop : $("#about").offset().top
            
        }, 1000);
        
    });
    
    // Paralax

    documentEl.on('scroll', function () {
                   
        var currScrollPos = documentEl.scrollTop();
                   
        parallaxBg.css('background-position', '0 ' + -currScrollPos / 4 + 'px');
    
    });
    
    // Active Class On Scroll 
    
    $(window).on('scroll', function () {
        
        var cur_pos = $(this).scrollTop();
        
        sections.each(function () {
            
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                
            }
        });
    });
    
    // Scrolling Navbar
    
    $(window).on("scroll", function () {
        
        if ($(document).scrollTop() > 200) {
            
            $('nav').addClass('shrink');
            
        } else {
            
            $('nav').removeClass('shrink');
            
        }
    });
    
    $(window).on("scroll", function () {
        
        if ($(document).scrollTop() > 350) {
            
            $('.navbar a .bg_logo').removeClass('bg_logo_light');
            $('.navbar a .bg_logo').addClass('bg_logo_dark');
            
        } else {
            
            $('.navbar a .bg_logo').removeClass('bg_logo_dark');
            $('.navbar a .bg_logo').addClass('bg_logo_light');
            
        }
    });
    
    // Collapse Works
    
    $('.show-more, .show-less').on("click", function () {
        
        $('.work .info .less').fadeIn(1000, function () {
            
            $('.show-more').hide();
            $('.show-less').show();
            $('.show-less').on("click", function () {
                
                $('.work .info .less').fadeOut(1000);
                $('.show-less').hide();
                $('.show-more').show();
            });
            
        });
        
    });
    
    // Scroll Top 
    
    
    $(window).on("scroll", function () {
        
        var sc = $(this).scrollTop();
        
        if (sc > 1700) {
            
            scrolltop.fadeIn(1000);
            
        } else {
            
            scrolltop.fadeOut(1000);
            
        }
        
    });
    
    scrolltop.on("click", function () {
        
        $('html, body').animate({
            
            scrollTop: 0
            
        }, 1000);
        
    });
    
});