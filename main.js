document.addEventListener('DOMContentLoaded', function () {
    var slideshow = document.querySelector('.site-slideshow');
    if (!slideshow) return;

    var slides = slideshow.querySelectorAll('.slide');
    var dots = slideshow.querySelectorAll('.dot');
    var current = 0;
    var intervalMs = 6000;
    var timer;

    function showSlide(index) {
        slides[current].classList.remove('active');
        if (dots[current]) dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        if (dots[current]) dots[current].classList.add('active');
    }

    function nextSlide() {
        showSlide(current + 1);
    }

    function startTimer() {
        timer = setInterval(nextSlide, intervalMs);
    }

    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }

    dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
            showSlide(parseInt(dot.dataset.index, 10));
            resetTimer();
        });
    });

    if (slides.length > 1) {
        startTimer();
    }
});
