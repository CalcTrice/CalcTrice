
//Locomotive Scroll
// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 15,
});

window.onload = function () {
    Particles.init({
        selector: '.background',
        maxParticles: 100,
        color: "#ffb000",
        connectParticles: true,
        sizeVariations: 7,
        speed: .6,
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 40,
                    color: '#ffb000'
                }
            },
            {
                breakpoint: 400,
                options: {
                    maxParticles: 40,
                    color: '#ffb000'
                }
            },

        ]

    });
};