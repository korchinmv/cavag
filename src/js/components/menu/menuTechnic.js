import {
  buttonTechnic,
  buttonSearch,
  menuTechnic,
  menuSearch,
  body,
  overlay,
  buttonCloseSearch,
} from "../../_vars.js";

if (buttonTechnic) {
  buttonTechnic.addEventListener("click", () => {
    buttonTechnic.classList.toggle("header-menu__item--technic__active");

    if (
      buttonTechnic.classList.contains("header-menu__item--technic__active")
    ) {
      menuTechnic.classList.add("header-technic--visible");
      overlay.classList.add("overlay--visible");
      body.classList.add("page__body--no-scroll");

      if (menuSearch.classList.contains("header-search--visible")) {
        menuSearch.classList.remove("header-search--visible");
        buttonTechnic.classList.remove("header-menu__item--technic__active");
        buttonCloseSearch.classList.remove("header__close-form-btn--active");
        buttonSearch.classList.remove("header__search-btn--hide");
      }
    } else {
      menuTechnic.classList.remove("header-technic--visible");
      body.classList.remove("page__body--no-scroll");
      overlay.classList.remove("overlay--visible");
    }
  });
}
