const groupSliderBtns = document.querySelectorAll(".group__accordeon-name");

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
  autoplay: {
    delay: 5000,
  },
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

const servicesSwiper = new Swiper(".services__slider-wrapper", {
  enabled: true,
  slidesPerView: 1.1,
  spaceBetween: 16,
  pagination: {
    el: ".services__progressbar",
    type: "progressbar",
  },
  breakpoints: {
    // when window width is >= 1200px
    768: {
      enabled: false,
      width: "100%",
    },
  },
});

const aboutPageHeadSwiper = new Swiper(".head-page__slider", {
  slidesPerView: 1.3,
  spaceBetween: 16,
  pagination: {
    el: ".head-page__progressbar",
    type: "progressbar",
  },
  breakpoints: {
    // when window width is >= 1200px
    768: {
      spaceBetween: 24,
      slidesPerView: 4,
    },
  },
});

const newsSectionSwiper = new Swiper(".news__slider-wrapper", {
  slidesPerView: 1.1,
  spaceBetween: 16,
  pagination: {
    el: ".news__progressbar",
    type: "progressbar",
  },
  breakpoints: {
    // when window width is >= 1200px
    1024: {
      spaceBetween: 24,
      slidesPerView: 3,
    },
    768: {
      spaceBetween: 16,
      slidesPerView: 2,
    },
  },
});

const numsSectionSwiper = new Swiper(".nums__slider", {
  enabled: true,
  slidesPerView: 1.1,
  spaceBetween: 16,
  pagination: {
    el: ".nums__progressbar",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".nums__slider-controls-next",
    prevEl: ".nums__slider-controls-prev",
  },
  breakpoints: {
    // when window width is >= 1200px

    1024: {
      spaceBetween: 24,
      slidesPerView: 3,
    },
    768: {
      spaceBetween: 24,
      slidesPerView: 2,
    },
  },
});

const groupSwiperThumbs = new Swiper(".group__swiper-thumbs", {
  slidesPerView: "auto",
  slideToClickedSlide: true,
  direction: "vertical",
  freeMode: {
    enabled: true,
  },
  history: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

const groupSwiper = new Swiper(".group__image-swiper", {
  spaceBetween: 4,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 12000,
  },
  thumbs: {
    swiper: groupSwiperThumbs,
  },
});

//остановка слайдера (гл. стр.) по клику на кнопку аккордеона
if (groupSliderBtns) {
  groupSliderBtns.forEach((sliderBtn) => {
    sliderBtn.addEventListener("click", () => {
      groupSwiper.autoplay.stop();
    });
  });
}

const productPageSwiperThumbs = new Swiper(".product__swiper-thumbs", {
  enabled: false,
  navigation: {
    nextEl: ".product__swiper-next",
    prevEl: ".product__swiper-prev",
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      enabled: true,
      spaceBetween: 8,
      slidesPerView: 4,
      direction: "vertical",
    },
  },
});

const productPageSwiper = new Swiper(".product__swiper", {
  spaceBetween: 4,
  loop: true,
  thumbs: {
    swiper: productPageSwiperThumbs,
  },
  pagination: {
    el: ".product__pagination",
    clickable: true,
    type: "bullets",
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + "<i></i>" + "<b></b>" + "</span>"
      );
    },
  },
});
