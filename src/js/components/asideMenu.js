const dropdown = document?.querySelectorAll(".aside-menu__dropdown");
const dropdownArray = Array.prototype.slice.call(dropdown, 0);

if (dropdownArray) {
  dropdownArray.forEach((el) => {
    const button = el.querySelector('span[data-toggle="dropdown"]');
    const dropdownMenu = el.querySelector(".aside-menu__dropdown-menu");

    if (button) {
      button.addEventListener("click", () => {
        if (!dropdownMenu.classList.contains("show")) {
          dropdownMenu.classList.add("show");
          dropdownMenu.classList.remove("hide");
          button.classList.add("aside-menu__text--active");
        } else {
          dropdownMenu.classList.remove("show");
          dropdownMenu.classList.add("hide");
          button.classList.remove("aside-menu__text--active");
        }
      });
    }
  });
}
