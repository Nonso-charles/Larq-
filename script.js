        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelector('.slides');
            const paginationLines = document.querySelectorAll('.pagination-line');
            const totalSlides = paginationLines.length;

            paginationLines.forEach((line, index) => {
                line.addEventListener('click', () => {
                    const slideWidth = document.querySelector('.slide').clientWidth;
                    slides.style.transform = `translateX(-${slideWidth * index}px)`;
                    updatePagination(index);
                });
            });

            function updatePagination(activeIndex) {
                paginationLines.forEach((line, index) => {
                    if (index === activeIndex) {
                        line.classList.add('active');
                    } else {
                        line.classList.remove('active');
                    }
                });
            }

            // Initialize the first line as active
            updatePagination(0);
        });