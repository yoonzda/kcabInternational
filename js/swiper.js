var swiper = new Swiper(".mainSlideContainer", {
    loop: true,
    grabCursor: true,
    speed: 800,
    // pagination: {
    //     el: ".swiper-pagination",
    //     type: "fraction",
    // },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + '/' +
                    '<span class="' + totalClass + '"></span>';
        },
        formatFractionCurrent: function (number) {
            return number < 10 ? '0' + number : number;
        },
        formatFractionTotal: function (number) {
            return number < 10 ? '0' + number : number;
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "creative",
    creativeEffect: {
        prev: {
        shadow: false,
        translate: ["-20%", 0, -1],
        },
        next: {
        translate: ["100%", 0, 0],
        },
    },
});