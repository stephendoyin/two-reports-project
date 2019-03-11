
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

$(document).ready(function () {
    let owl = $(".owl-one")
    owl.owlCarousel({
        items: 6,
        dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    });

    $('.home__next').click(function () {
        owl.trigger('next.owl.carousel');
    })


    $('.home__previous').click(function () {
        owl.trigger('prev.owl.carousel');
    })
});


$(document).ready(function () {
    let owl = $(".header__slider_container")
    owl.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        dots: true,
        dotsEach: true,
        loop: true
        // dotsData: true
    });

});



$(document).ready(function () {
    let owl = $(".owl_three")
    owl.owlCarousel({
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1,
                nav: true
            },
            657: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3
            }
        }
    });

    $('.home__sec_next').click(function () {
        owl.trigger('next.owl.carousel');
    })


    $('.home__sec_previous').click(function () {
        owl.trigger('prev.owl.carousel');
    })

});

//grab responsive ad content
let adContainer = document.querySelector(".home__ad_box");

//swap to make responsive for tab and mobile 
if (window.screen.availWidth < 987) {
    let adPlaceholder = document.querySelector(".home__place_for_tab-mobile");
    adPlaceholder.innerHTML = adContainer.innerHTML;
    console.log(adPlaceholder);
}

let individualCaseStudy = document.querySelectorAll(".home_case_individual_container");

for (let i = 0; i < individualCaseStudy.length; i++) {
    individualCaseStudy[i].addEventListener("click", function () {
        window.location.href = individualCaseStudy[i].childNodes[1].href;
    });
}


let sideMenuBtn1 = document.querySelector(".modal__menu_link--services");
let modalSubMenu1 = document.querySelector(".modal__menu_sub--services");

sideMenuBtn1.addEventListener("click", function (e) {
    e.preventDefault();
    modalSubMenu1.classList.toggle("hide");
});


let sideMenuBtn2 = document.querySelector(".modal__menu_link--solutions");
let modalSubMenu2 = document.querySelector(".modal__menu_sub--solutions");

sideMenuBtn2.addEventListener("click", function (e) {
    e.preventDefault();
    modalSubMenu2.classList.toggle("hide");
});

let sideMenuBtn3 = document.querySelector(".modal__menu_link--talents");
let modalSubMenu3 = document.querySelector(".modal__menu_sub--talents");

sideMenuBtn3.addEventListener("click", function (e) {
    e.preventDefault();
    modalSubMenu3.classList.toggle("hide");
});


let harmBurgerMenuButton = document.querySelector(".header__menu_btn");
let menuModal = document.querySelector(".modal_menu_for_tab")

function closeMenuModal(params) {
    menuModal.classList.toggle('slideOutLeft');
    document.body.classList.remove('hide_overflow');
    setTimeout(() => {
        menuModal.classList.toggle('hide');
        menuModal.classList.remove('slideOutLeft');
    }, 1000);

}

function openMenuModal(params) {
    menuModal.classList.toggle('hide');
    menuModal.classList.toggle('slideInLeft');
    setTimeout(() => {
        menuModal.classList.remove('slideInLeft');
        document.querySelector("body").classList.add('hide_overflow');
    }, 1000);
    
}

harmBurgerMenuButton.addEventListener("click", function () {
    openMenuModal();
})

window.addEventListener("click", function (e) {
    if (e.target === menuModal)
        closeMenuModal("slideOutLeft");
})
