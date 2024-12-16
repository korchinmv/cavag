const body = document?.querySelector(".page");
const buttonTechnic = document?.querySelector(".header-menu__item--technic");
const buttonSearch = document?.querySelector(".header__search-btn");
const buttonCloseSearch = document?.querySelector(".header__close-form-btn");
const menuTechnic = document?.querySelector(".header-technic");
const menuSearch = document?.querySelector(".header-search");

const headerMenuList = document?.querySelector(".header-menu");
const headerSearchBtn = document?.querySelector(".header__search-btn");
const searchFormCloseBtn = document?.querySelector(".search-form__close-btn");
const searchForm = document?.querySelector(".header__search-form");
const popupCityLink = document?.querySelectorAll(".popup__city-link");
const chooseCityBtnName = document?.querySelector(".choosing-city__name");
const mobileMenu = document?.querySelector(".mobile-menu");
const burgerButton = document?.querySelector(".hamburger-lines--mobile-menu");
const overlay = document?.querySelector(".overlay");
const dropdown = document?.querySelectorAll(".dropdown");
const filterDropdown = document?.querySelectorAll(".filter__dropdown");
const selectMenu = document?.querySelector(".select-menu");
const selectBtn = selectMenu?.querySelector(".select-menu__btn");
const selectBtnWrapper = selectMenu?.querySelector(".select-menu__btn-wrapper");
const selectArrayOptions = selectMenu?.querySelectorAll(".select-menu__option");
const filterHeightRangeSlider = document?.getElementById("filter-height-range");
const filterWeightRangeSlider = document?.getElementById("filter-weight-range");
const inputFirstHeightRangeSlider = document?.getElementById(
  "filter-height-input-first"
);
const inputSecondHeightRangeSlider = document?.getElementById(
  "filter-height-input-second"
);
const inputFirstWeightRangeSlider = document?.getElementById(
  "filter-weight-input-first"
);
const inputSecondWeightRangeSlider = document?.getElementById(
  "filter-weight-input-second"
);
const openFilterBtn = document?.querySelector(".filter-btn");
const filterElement = document?.querySelector(".catalog-page__filter");
const closeFilterBtn = document?.querySelector(".catalog-page__close-btn");

export {
  body,
  buttonTechnic,
  buttonSearch,
  buttonCloseSearch,
  menuTechnic,
  menuSearch,
  headerMenuList,
  headerSearchBtn,
  searchFormCloseBtn,
  searchForm,
  popupCityLink,
  chooseCityBtnName,
  mobileMenu,
  burgerButton,
  overlay,
  dropdown,
  selectBtn,
  selectBtnWrapper,
  selectMenu,
  selectArrayOptions,
  filterDropdown,
  filterHeightRangeSlider,
  filterWeightRangeSlider,
  inputFirstHeightRangeSlider,
  inputSecondHeightRangeSlider,
  inputFirstWeightRangeSlider,
  inputSecondWeightRangeSlider,
  openFilterBtn,
  filterElement,
  closeFilterBtn,
};
