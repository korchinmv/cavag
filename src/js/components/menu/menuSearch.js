import {
  buttonSearch,
  buttonCloseSearch,
  menuSearch,
  body,
  overlay,
  menuTechnic,
  buttonTechnic,
} from "../../_vars.js";

if (buttonSearch) {
  buttonSearch.addEventListener("click", () => {
    buttonSearch.classList.toggle("header__search-btn--hide");
    buttonCloseSearch.classList.toggle("header__close-form-btn--active");

    if (
      buttonCloseSearch.classList.contains("header__close-form-btn--active")
    ) {
      buttonCloseSearch.addEventListener("click", () => {
        menuSearch.classList.remove("header-search--visible");
        buttonCloseSearch.classList.remove("header__close-form-btn--active");
        buttonSearch.classList.remove("header__search-btn--hide");
        overlay.classList.remove("overlay--visible");
      });

      menuSearch.classList.add("header-search--visible");
      overlay.classList.add("overlay--visible");
      body.classList.add("page__body--no-scroll");

      if (menuTechnic.classList.contains("header-technic--visible")) {
        menuTechnic.classList.remove("header-technic--visible");
        buttonTechnic.classList.remove("header-menu__item--technic__active");
      }
    } else {
      menuSearch.classList.remove("header-search--visible");
      body.classList.remove("page__body--no-scroll");
      overlay.classList.remove("overlay--visible");
    }
  });
}
