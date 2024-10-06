"use strict";
const buttonMenu = document.getElementsByClassName("header__menu")[0];
const headerBlock = document.getElementsByClassName("header")[0];
buttonMenu.onclick = function () {
    buttonMenu.classList.toggle("header__menu-active");
    headerBlock.classList.toggle("header-active");
};
const introSlider = $(".intro__slider");
introSlider.slick({
    arrows: false,
    dots: true,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: true,
    appendDots: $(".intro__pagination"),
    autoplay: true,
    autoplaySpeed: 4000
});
const introPagItem = document.querySelectorAll(".intro__pagination button");
