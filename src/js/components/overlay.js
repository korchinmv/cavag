import {
  menuSearch,
  menuTechnic,
  buttonSearch,
  buttonTechnic,
  overlay,
  body,
  mobileMenu,
  burgerButton,
  buttonCloseSearch,
} from "../_vars.js";

overlay.addEventListener("click", () => {
  if (overlay.classList.contains("overlay--visible")) {
    buttonTechnic.classList.remove("header-menu__item--technic__active");
    buttonSearch.classList.remove("header__search-btn--active");
    menuSearch.classList.remove("header-search--visible");
    buttonSearch.classList.remove("header__search-btn--hide");
    buttonCloseSearch.classList.remove("header__close-form-btn--active");
    menuTechnic.classList.remove("header-technic--visible");
    overlay.classList.remove("overlay--visible");
    body.classList.remove("page__body--no-scroll");

    //Скрываем моб. меню по клику на оверлей
    mobileMenu.classList.remove("mobile-menu--active");
    burgerButton.classList.remove("hamburger-lines--active");
  }
});
