const buttonMenu = document.getElementsByClassName(
  "header__menu"
)[0] as HTMLButtonElement;
const headerBlock = document.getElementsByClassName("header")[0] as HTMLElement;

buttonMenu.onclick = function (): void {
  buttonMenu.classList.toggle("header__menu-active");
  headerBlock.classList.toggle("header-active")
};
