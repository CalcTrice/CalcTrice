'use strict';

const testimonialsCarouselSlider = function () {
    const slider = document.querySelector('.slider');
    const carousel = document.querySelector('.testimonials-carousel');
    const prev = document.querySelector('.arrow-prev');
    const next = document.querySelector('.arrow-next');
    let direction = -1;

    prev.addEventListener('click', function () {
        if (direction === -1) {
            direction = 1;
            slider.appendChild(slider.firstElementChild);

        }
        carousel.style.justifyContent = 'flex-end'
        slider.style.transform = 'translate(20%)';

    });

    next.addEventListener('click', function () {

        if (direction === 1) {
            direction = -1;
            slider.prepend(slider.lastElementChild);
        }

        carousel.style.justifyContent = 'flex-start'
        slider.style.transform = 'translate(-20%)';

    });
    slider.addEventListener('transitionend', function () {
        if (direction === -1)
            slider.appendChild(slider.firstElementChild);
        else if (direction === 1)
            slider.prepend(slider.lastElementChild);

        slider.style.transition = 'none';
        slider.style.transform = 'translate(0%)';

        setTimeout(function () {

            slider.style.transition = 'all 0.3s ease-in-out';
        });
    })
}
const testimonialSlideContentCreator = function () {

    let counter = 1;
    const content = [
        [
            'Great collection of tools!',
            'Adam West',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo  A sunt deleniti exercitationem? At atque',
        ],
        [
            'Great collection of tools!',
            'John Jacobs',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo A sunt deleniti exercitationem? At atque ducimus omnis cum qui voluptate vero corporis molestias nemo!',
        ],
        [
            'Great collection of tools!',
            'Martha Stewart',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo A sunt deleniti exercitationem?',
        ],
        [
            'Great collection of tools!',
            'Max Robbie',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo Nihil quam, harum accusantium dolorum facilis voluptatibus.',
        ],
        [
            'Great collection of tools!',
            'Jay Cart',
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo Nihil quam, harum accusantium dolorum facilis voluptatibus.',
        ],
    ];

    const slider = document.querySelector('.slider');

    content.forEach(function (person, id) {

        slider.insertAdjacentHTML('beforeend',
            `<div class="slide" id="slide-${counter + id}">
                    <div class="slide-content">
                        <div>
                            <q>${person[0]}</q>
                            
                            <span class="username">${person[1]}</span>
                        </div>
                        <blockquote>"${person[2]}"</blockquote>
                    </div>
                </div>`
        );

    });
}

const navIntersectionObserver = function () {

    const navbar = document.getElementById('navbar');
    const endSection = document.querySelector('.endSection');


    const obsCallback = function (entries) {
        entries.forEach(function (entry) {

            if (entry.isIntersecting)
                navbar.classList.add('darkNav');
            else
                navbar.classList.remove('darkNav');


        });
    }

    const obsOptions = {
        root: null,
        threshold: 0.7
    }

    const observer = new IntersectionObserver(obsCallback, obsOptions);
    observer.observe(endSection);
}

const init = function () {
    testimonialsCarouselSlider();
    testimonialSlideContentCreator();
    navIntersectionObserver();
}
init();