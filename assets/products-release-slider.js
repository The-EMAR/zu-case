if (!customElements.get('products-release-slider')) {
  class ProductsReleaseSlider extends HTMLElement {
    constructor() {
      super();

      this.initSlider();
    }

    initSlider() {
      this.slider = new Swiper(this, {
        spaceBetween: 20,
        slidesPerView: 2,
        draggable: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          767: {
            slidesPerView: 3,
          },
          1023: {
            slidesPerView: 4,
          },
        },
      });
    }
  }

  customElements.define(
    'products-release-slider',
    ProductsReleaseSlider,
  );
}







