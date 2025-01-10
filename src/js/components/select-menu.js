import {
  selectMenu,
  selectBtn,
  selectArrayOptions,
  selectBtnWrapper,
} from "../_vars.js";

if (selectBtnWrapper) {
  selectBtnWrapper.addEventListener("click", () => {
    selectMenu.classList.toggle("select-menu--active");
  });
}

if (selectArrayOptions) {
  selectArrayOptions.forEach((option) => {
    option.addEventListener("click", () => {
      selectBtn.innerText = option.innerText;
      selectMenu.classList.remove("select-menu--active");
    });
  });
}

document.addEventListener("click", (e) => {
  if (selectMenu) {
    if (!selectMenu.contains(e.target) && !selectBtn.contains(e.target)) {
      selectMenu.classList.remove("select-menu--active");
    }
  }
});
