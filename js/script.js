$(document).ready(function() {
    $('.fa-search, #search').mouseenter(function() {
        $('.logo').hide();
    });

    $('.fa-search, #search').mouseleave(function() {
        $('.logo').show();
    });

    $('.fa-bars').click(function() {
        $('.navbar').toggle();
        $('.logo, .left').toggleClass('opac');
        $(this).toggleClass('fa-times');
    });

    $('.navbar, .navbar a').click(function() {
        $('.navbar').hide();
        $('.fa-bars').removeClass('fa-times');
        $('.logo, .left').removeClass('opac');
    });

    $(window).on('scroll load', function() {
        if($(window).scrollTop() > 20) {
            $('#header').css({
                'background':'#EB4D4B',
                'box-shadow':'0 .1rem .3rem #000'
            }); 
        }
        else {
            $('#header').css({
                'background':'#333333',
                'box-shadow':'none'
            }); 
        }
    });

    $('.home-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        autoplay:true
    });

    $('.product-slider').owlCarousel({
        loop:true,
        nav:true,
        items:3,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2,
                nav:false
            },
            1000:{
                items:3
            }
        }
    });

    $('.review-slider').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        autoplay:true
    });

    $('.brand-slider').owlCarousel({
        loop:true,
        items:4,
        autoplay:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            550:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
})