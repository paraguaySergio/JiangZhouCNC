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

/*************** MODALS ******************/
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});


/********** NAVAR MOBILE ***********/
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});
/*********** img modal expande *************/
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
});

/******** BUTTON FLOATING ***********/
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {});
});
