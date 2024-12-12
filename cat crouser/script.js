const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const infiniteScrollCheckbox = document.getElementById('infiniteScroll');
const autoplayCheckbox = document.getElementById('autoplay');
const autoplayIntervalInput = document.getElementById('autoplayInterval');

let currentIndex = 0;
let autoplayInterval;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else if (infiniteScrollCheckbox.checked) {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else if (infiniteScrollCheckbox.checked) {
        currentIndex = items.length - 1;
    }
    updateCarousel();
}

function startAutoplay() {
    stopAutoplay(); 
    autoplayInterval = setInterval(nextSlide, autoplayIntervalInput.value);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

autoplayCheckbox.addEventListener('change', () => {
    if (autoplayCheckbox.checked) {
        startAutoplay();
    } else {
        stopAutoplay();
    }
});

autoplayIntervalInput.addEventListener('input', () => {
    if (autoplayCheckbox.checked) {
        startAutoplay();
    }
});

updateCarousel();
