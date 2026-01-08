// 메뉴 토글 (모바일)
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // 사이드바 외부 클릭시 닫기 (모바일)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // 캐러셀 기능
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            setActiveSlide(index);
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + dots.length) % dots.length;
            setActiveSlide(currentSlide);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % dots.length;
            setActiveSlide(currentSlide);
        });
    }

    function setActiveSlide(index) {
        dots.forEach(d => d.classList.remove('active'));
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // 자동 슬라이드 (5초마다)
    setInterval(function() {
        currentSlide = (currentSlide + 1) % dots.length;
        setActiveSlide(currentSlide);
    }, 5000);
});