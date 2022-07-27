const { Pagination } = require('Swiper');

new Swiper('.customer-reviews__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
