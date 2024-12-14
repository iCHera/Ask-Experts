document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const burgerInfo = document.querySelector('.burger-info');
    const buttonClose = document.querySelector('.button-close');

    const disableScroll = (event) => {
        event.preventDefault();
    };

    burger.addEventListener('click', () => {
        burgerInfo.classList.add('active');
        document.body.classList.add('no-scroll');
        document.addEventListener('touchmove', disableScroll, { passive: false }); 
    });

    buttonClose.addEventListener('click', () => {
        burgerInfo.classList.remove('active');
        document.body.classList.remove('no-scroll');
        document.removeEventListener('touchmove', disableScroll);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sliderLines = document.querySelectorAll(".section-6-slider-line");
    const sliderContainer = document.querySelector(".section-6-sliders");
    const prevButton = document.querySelector(".section-6-div-back");
    const nextButton = document.querySelector(".section-6-div-next");

    let currentSlideIndex = 0;
    let startX = 0;
    let endX = 0;
    let isSwiping = false;

    function updateSlider() {
        sliderLines.forEach((line, index) => {
            line.classList.toggle("active", index === currentSlideIndex);
        });

        sliderContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

        if (currentSlideIndex === 0) {
            prevButton.style.pointerEvents = "none";
            prevButton.style.opacity = "0.5";
            prevButton.style.cursor = "not-allowed"; 
        } else {
            prevButton.style.pointerEvents = "auto";
            prevButton.style.opacity = "1";
            prevButton.style.cursor = "pointer";
        }

        if (currentSlideIndex === sliderLines.length - 1) {
            nextButton.style.pointerEvents = "none";
            nextButton.style.opacity = "0.5";
            nextButton.style.cursor = "not-allowed"; 
        } else {
            nextButton.style.pointerEvents = "auto";
            nextButton.style.opacity = "1";
            nextButton.style.cursor = "pointer"; 
        }
    }

    function handleSwipe() {
        const deltaX = endX - startX;
        const swipeThreshold = 50;

        if (deltaX > swipeThreshold && currentSlideIndex > 0) {
            currentSlideIndex--;
        } else if (deltaX < -swipeThreshold && currentSlideIndex < sliderLines.length - 1) {
            currentSlideIndex++; 
        }

        updateSlider();
    }

    prevButton.addEventListener("click", () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateSlider();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentSlideIndex < sliderLines.length - 1) {
            currentSlideIndex++;
            updateSlider();
        }
    });

    sliderContainer.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
        isSwiping = true;
    });

    sliderContainer.addEventListener("touchmove", (event) => {
        if (!isSwiping) return;
        endX = event.touches[0].clientX;
        event.preventDefault();
    });

    sliderContainer.addEventListener("touchend", () => {
        if (isSwiping) {
            handleSwipe();
            isSwiping = false;
        }
    });

    sliderContainer.addEventListener("mousedown", (event) => {
        startX = event.clientX;
        isSwiping = true;
        event.preventDefault();
    });

    sliderContainer.addEventListener("mousemove", (event) => {
        if (!isSwiping) return;
        endX = event.clientX;
    });

    sliderContainer.addEventListener("mouseup", () => {
        if (isSwiping) {
            handleSwipe();
            isSwiping = false;
        }
    });

    sliderContainer.addEventListener("mouseleave", () => {
        if (isSwiping) {
            handleSwipe();
            isSwiping = false;
        }
    });

    updateSlider();
});











