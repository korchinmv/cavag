export const getHeaderHeight = () => {
  const headerHeight = document?.querySelector(".header").offsetHeight;
  console.log(headerHeight);

  document
    .querySelector(":root")
    .style.setProperty("--header-height", `${headerHeight}px`);
};
