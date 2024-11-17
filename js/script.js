$(function () {
    new WOW().init();


    /***********************************
        WORK SECTION
    ***********************************/

    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    
    /***********************************
        TEAM SECTION
    ***********************************/
    
    $(".team-members").owlCarousel({
        items: 3,
        autoplay: true, 
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true, 
        responsive:{
          0:{
              items: 1,
              autoplayHoverPause: false,
          },
          480:{
            items:2,  
          },
          760:{
              items:3,
          },
        },
    });
    
    $(".customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true, 
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true, 
    });
    
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
        
    });
    $(".client-logos").owlCarousel({
        items: 6,
        autoplay: true, 
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true, 
        responsive:{
          0:{
              items: 2,
              autoplayHoverPause: false,
          },
          480:{
            items:4,  
          },
          760:{
              items:5,
          },
          992:{
             item:6, 
          } , 
        },
    });
    
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $("nav").addClass("wg-top-nav");
            $(".btn-back-to-top").fadeIn();
        }
        else{
             $("nav").removeClass("wg-top-nav");
             $(".btn-back-to-top").fadeOut();
        }
    });
    
    if($(this).scrollTop() > 100){
        $("nav").addClass("wg-top-nav");
        $(".btn-back-to-top").fadeIn();
    }
    else{
         $("nav").removeClass("wg-top-nav");
         $(".btn-back-to-top").fadeOut();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav li a');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
});

$(document).ready(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section = $(this).attr("href");
        var targetOffset = $(section).offset().top;

        // Get the height of the sticky navbar
        var navbarHeight = $("nav").outerHeight();

        // Check if the screen width is less than 768px (mobile devices)
        var isMobile = window.innerWidth < 900;
        var mobileOffset = isMobile ? 280 : 60; // Add an extra offset for smaller screens

        // Adjust the scroll position to account for the navbar height and mobile offset
        var adjustedOffset = targetOffset - navbarHeight + mobileOffset;

        // Animate the scroll
        $("html, body").animate(
            {
                scrollTop: adjustedOffset,
            },
            900,
            "easeInOutExpo"
        );

        // Optionally, you can add active class to the clicked menu item
        $(".nav a").removeClass("active");
        $(this).addClass("active");
    });

    $(window).on("scroll", function () {
        var scrollPos = $(document).scrollTop();
        $(".nav a").each(function () {
            var section = $(this).attr("href");
            var target = $(section).offset().top - $("nav").outerHeight();

            if (window.innerWidth < 768) {
                // Adjust target for mobile
                target -= 50;
            }

            if (scrollPos >= target && scrollPos < target + $(section).outerHeight()) {
                $(".nav a").removeClass("active");
                $(this).addClass("active");
            }
        });
    });
});

$(document).ready(function() {
    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });
});

$(document).ready(function() {
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});