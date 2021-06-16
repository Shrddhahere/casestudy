
import $ from 'jquery'
window.jQuery = window.$ = $; 
import 'slick-carousel'
$(document).ready(function() {
    $('.image-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: false,
        nextArrow: false
        });
});
