document.addEventListener("DOMContentLoaded", () => {
  const accordeons = document.querySelectorAll(".accordeon__item");

  accordeons.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const content = self.querySelector(".accordeon__content");

      self.classList.toggle("open");

      if (self.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});
