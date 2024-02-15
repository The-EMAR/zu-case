if (!customElements.get('galler-slider')) {
  class GallerySlider extends HTMLElement {
    constructor() {
      super();

      this.initSlider();
    }

    initSlider() {
      this.slider = new Swiper(this, {
        spaceBetween: 20,
        slidesPerView: 1,
        watchOverflow: true,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        }
      });
    }
  }

  customElements.define(
    'galler-slider',
    GallerySlider,
  );
}
