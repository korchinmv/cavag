import {
  mobileMenu,
  burgerButton,
  overlay,
  body,
  dropdown,
} from "../../_vars.js";
import { getHeaderHeight } from "../../functions/header-height.js";

const dropdownArray = Array.prototype.slice.call(dropdown, 0);

if (dropdownArray) {
  dropdownArray.forEach((el) => {
    const button = el.querySelector('span[data-toggle="dropdown"]');
    const dropdownMenu = el.querySelector(".mobile-menu__dropdown-menu");

    if (button) {
      button.addEventListener("click", () => {
        if (!dropdownMenu.classList.contains("show")) {
          dropdownMenu.classList.add("show");
          dropdownMenu.classList.remove("hide");
          button.classList.add("mobile-menu__text--active");
        } else {
          dropdownMenu.classList.remove("show");
          dropdownMenu.classList.add("hide");
          button.classList.remove("mobile-menu__text--active");
        }
      });
    }
  });
}

if (burgerButton) {
  burgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-menu--active");
    burgerButton.classList.toggle("hamburger-lines--active");

    if (mobileMenu.classList.contains("mobile-menu--active")) {
      overlay.classList.add("overlay--visible");
      body.classList.add("page__body--no-scroll");
    } else {
      overlay.classList.remove("overlay--visible");
      body.classList.remove("page__body--no-scroll");
    }
  });
}

getHeaderHeight();
