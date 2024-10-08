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
  autoplaySpeed: 4000,
});

const introContent = document.querySelector(
  ".intro__content"
) as HTMLDivElement;

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
