const selectBtn = document.querySelector(".custom-select");

if (selectBtn) {
  selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("custom-select--active");
  });
}
