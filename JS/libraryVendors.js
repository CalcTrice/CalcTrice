
//Locomotive Scroll

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1.1,

});


// Particle Effect
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
                    color: '#ffb000',

                }
            },
            {
                breakpoint: 400,
                options: {
                    maxParticles: 40,
                    color: '#ffb000',

                }
            },

        ]

    });
};

