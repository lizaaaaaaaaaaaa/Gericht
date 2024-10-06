const buttonMenu = document.getElementsByClassName(
  "header__menu"
)[0] as HTMLButtonElement;
const headerBlock = document.getElementsByClassName("header")[0] as HTMLElement;

buttonMenu.onclick = function (): void {
  buttonMenu.classList.toggle("header__menu-active");
  headerBlock.classList.toggle("header-active");
};

const introSlider = $(".intro__slider") as JQuery<HTMLDivElement>;

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