// $('.single-item').slick({
//   infinite: true,
//   dots: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// });

const { Pagination } = require('swiper');

// });
new Swiper('.slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
