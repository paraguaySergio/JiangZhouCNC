/******** SLIDER *******/
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {});
});

/******** CAROUSEL *******/
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        padding:5,
        shift:5,
        autoplay:true
    });
});
