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
    autoplaySpeed: 4000,
});
const introContent = document.querySelector(".intro__content");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // якщо елемент знаходиться в полі зору
        if (entry.isIntersecting) {
            for (const child of entry.target.children) {
                child.classList.add("appearance-top");
            }
        }
    });
}, { threshold: 0.1 }); // спостереження має відбуватися, коли видно хоча б 10% елемента
observer.observe(introContent);
const abouts = document.querySelectorAll(".about__inner div");
abouts.forEach(about => observer.observe(about));
