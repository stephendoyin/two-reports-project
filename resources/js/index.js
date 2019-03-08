
// let slideInnerContainer = $(".header__slider_inner_container");

// let sliderz = $(".header__slider");

// function nextSlider() {
//     slideInnerContainer.animate({ left: '-200%' }, 300, function () {
//         slideInnerContainer.css('left', '-100%');
//         $('.header__slider').last().after($('.header__slider').first());
//     });
// }

// function previousSlider() {
//     slideInnerContainer.animate({ left: '0%' }, 300, function () {
//         slideInnerContainer.css('left', '-100%');
//         $('.header__slider').first().before($('.header__slider').last());
//     });
// }

// setInterval(nextSlider, 8000);

$(document).ready(function(){
    let owl = $(".owl-one")
    owl.owlCarousel({
        items : 6,
        dots: true,
        dotsEach: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:6,
                nav:true,
                loop:false
            }
        }
    });

    $('.home__next').click(function() {
        owl.trigger('next.owl.carousel');
    })


    $('.home__previous').click(function() {
        owl.trigger('prev.owl.carousel');
    })
});


$(document).ready(function(){
    let owl = $(".header__slider_container")
    owl.owlCarousel({
        items : 1,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        dots: true,
        dotsEach: true,
        // dotsData: true
    });

});



$(document).ready(function(){
    let owl = $(".owl_three")
    owl.owlCarousel({
        items: 3,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1,
                nav:true
            },
            657:{
                items:2,
                nav:false
            },
            1000:{
                items:3
            }
        }
    });

});

