$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots: true,
        fade: true,
        speed: 2000,
        easing:'ease',
        fade: true,
        autoplay: false,
        autoplaySpeed: 4000,
        waitForAnimate: false,
        appendDots:$('.slider_description'),
    });
});