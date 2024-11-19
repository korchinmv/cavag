import {
  buttonSearch,
  buttonCatalog,
  buttonServices,
  menuSearch,
  menuCatalog,
  menuServices,
  body,
  overlay,
  burger,
} from "../../_vars.js";

if (buttonSearch) {
  buttonSearch.addEventListener("click", () => {
    buttonSearch.classList.toggle("header__search-btn--active");

    if (buttonSearch.classList.contains("header__search-btn--active")) {
      menuSearch.classList.add("header-search--visible");
      overlay.classList.add("overlay--visible");
      body.classList.add("page__body--no-scroll");

      if (menuCatalog.classList.contains("header-catalog--visible")) {
        menuCatalog.classList.remove("header-catalog--visible");
        burger.classList.remove("hamburger-lines--active");
        buttonCatalog.classList.remove("menu__link--catalog__active");
      }

      if (menuServices.classList.contains("header-services--visible")) {
        menuServices.classList.remove("header-services--visible");
        buttonServices.classList.remove("menu__link--services__active");
      }
    } else {
      menuSearch.classList.remove("header-search--visible");
      body.classList.remove("page__body--no-scroll");
      overlay.classList.remove("overlay--visible");
    }
  });
}
