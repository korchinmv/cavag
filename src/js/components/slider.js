// Подключение свайпера
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper/modules";
Swiper.use([Navigation, Pagination, Thumbs, Autoplay, EffectFade]);

const heroSwiper = new Swiper(".hero__slider", {
  loop: true,
  slidesPerView: 1,
  autoplayDisableOnInteraction: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // autoplay: {
  //   delay: 3000,
  // },
  speed: 800,
  autoplayDisableOnInteraction: false,
  navigation: {
    nextEl: ".hero__slider-controls-next",
    prevEl: ".hero__slider-controls-prev",
  },
  pagination: {
    el: ".hero__pagination",
    clickable: true,
    type: "bullets",
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + "<i></i>" + "<b></b>" + "</span>"
      );
    },
  },
});

const technicCardSwiper = new Swiper(".catalog__slider", {
  enabled: true,
  slidesPerView: 1.05,
  spaceBetween: 8,
  pagination: {
    el: ".catalog__list-progressbar",
    type: "progressbar",
  },
  breakpoints: {
    // when window width is >= 1200px
    678: {
      enabled: false,
    },
  },
});

const inStockSwiper = new Swiper(".in-stock__slider", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  navigation: {
    nextEl: ".in-stock__slider-controls-next",
    prevEl: ".in-stock__slider-controls-prev",
  },
  pagination: {
    el: ".in-stock__progressbar",
    type: "progressbar",
  },
  breakpoints: {
    // when window width is >= 990px
    1200: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
