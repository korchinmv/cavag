import {
  buttonTechnic,
  buttonSearch,
  menuTechnic,
  menuSearch,
  body,
  overlay,
} from "../../_vars.js";

console.log(buttonTechnic);
if (buttonTechnic) {
  buttonTechnic.addEventListener("click", () => {
    buttonTechnic.classList.toggle("header-menu__item--technic__active");

    if (
      buttonTechnic.classList.contains("header-menu__item--technic__active")
    ) {
      menuTechnic.classList.add("header-technic--visible");
      overlay.classList.add("overlay--visible");
      body.classList.add("page__body--no-scroll");
    } else {
      menuTechnic.classList.remove("header-technic--visible");
      body.classList.remove("page__body--no-scroll");
      overlay.classList.remove("overlay--visible");
    }
  });
}
