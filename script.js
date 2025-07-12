const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.custom-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
        }
    }
});