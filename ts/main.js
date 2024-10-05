var buttonMenu = document.getElementsByClassName("header__menu")[0];
var headerBlock = document.getElementsByClassName("header")[0];
buttonMenu.onclick = function () {
    buttonMenu.classList.toggle("header__menu-active");
    headerBlock.classList.toggle("header-active");
};
