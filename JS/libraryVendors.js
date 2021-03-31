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
//Locomotive Scroll
const loco = function () {
    const button = document.querySelector(".exploreNow");
    const section = document.querySelector('.whatWeDoSection');
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1.1,

    });

    button.addEventListener('click', function () {
        scroll.scrollTo('.whatWeDoSection', -60);
    })
}
//GSAP
const section2gsap = function () {
    const section2 = document.querySelector('.whatWeDoSection');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top right"
        }
    });
    const section2ObsCallback = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {

                tl
                    .from(".whatWeDoHeader h2", { x: "100%", duration: 2, ease: "expo.out" })
                    .from(".accordion-item, hr", { y: '10%', opacity: 0, duration: 1, ease: "expo.out" }, "-=1")

                observer.unobserve(section2);
            }
        })
    }
    const section2ObsOptions = {
        root: null,
        threshold: 0.05
    }

    const section2Observer = new IntersectionObserver(section2ObsCallback, section2ObsOptions);
    section2Observer.observe(section2);
}
const section3gsap = function () {

    const section3 = document.querySelector('.testimonialsSection');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top right"
        }
    });
    const section3ObsCallback = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {

                tl
                    .from(".testimonials-header h2", { x: "-100%", duration: 2, ease: "expo.out" })
                    .from(".testimonials-container", { y: '10%', opacity: 0, duration: 1, ease: "expo.out" }, "-=1")

                observer.unobserve(section3);
            }
        })
    }
    const section3ObsOptions = {
        root: null,
        threshold: 0.05
    }

    const section3Observer = new IntersectionObserver(section3ObsCallback, section3ObsOptions);
    section3Observer.observe(section3);
}
const gsapInit = function () {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top center",

        }
    });

    tl
        .from(".heading-span", { y: 200, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.4 }, "+=1")
        .from(".heading-span-2", { x: -100, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.4 }, "-=.4")
        .from(".exploreNow", { y: '100%', opacity: 0, duration: 0.7, ease: "expo.out" },)
        .from(".readOurArticles", { y: '100%', opacity: 0, duration: 0.7, ease: "expo.out" }, "-=.5")
        .from(".navbar", { y: "-100%", opacity: 0, duration: 0.5, ease: "expo.out" }, "-=0.7")
        .from("canvas", { opacity: 0, scale: 0, duration: 0.7 });

    section2gsap();
    section3gsap();

}
//INIT
const initVendor = function () {
    loco();
    gsapInit();
}

initVendor();
