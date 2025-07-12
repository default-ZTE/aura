const stickersSwiper = new Swiper('.sl', {
    slidesPerView: 1,
    pagination: {
        el: '.custom-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
        }
    }
});
const items = document.querySelectorAll('.other-auctions-item');
const dotsContainer = document.querySelector('.pagination-dots');
let currentIndex = 0;


items.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === currentIndex) dot.classList.add('active');
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.pagination-dots .dot');

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

showSlide(currentIndex);


let touchStartX = 0;
let touchEndX = 0;

const container = document.querySelector('.other-auctions');

container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchEndX < touchStartX - 30) {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    if (touchEndX > touchStartX + 30) {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }
}