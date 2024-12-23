const tabs = document.querySelectorAll(".tabs__nav-item");
const contents = document.querySelectorAll(".tabs__panel");
const underline = document.querySelector(".tabs__underline");

function updateUnderline() {
  const activeTab = document.querySelector(".tabs__nav-item--active");

  if (underline) {
    underline.style.width = `${activeTab.offsetWidth}px`;
    underline.style.left = `${activeTab.offsetLeft}px`;
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("tabs__nav-item--active"));
    tab.classList.add("tabs__nav-item--active");

    const target = tab.getAttribute("data-target");

    contents.forEach((content) => {
      if (content.id === target) {
        content.classList.add("tabs__panel--active");
      } else {
        content.classList.remove("tabs__panel--active");
      }
    });
    updateUnderline();
  });
});

window.addEventListener("resize", updateUnderline);
updateUnderline();
