const { Pagination } = require('swiper');

new Swiper('.customer-reviews__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
