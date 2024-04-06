document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  Splitting();

  gsap.registerPlugin(ScrollTrigger);

  const gsapTitle = gsap.utils.toArray('.section-title');
  gsapTitle.forEach((gsIt) => {

    const textChar = gsIt.querySelectorAll('.char');

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: gsIt,
          start: 'top 70%',
          end: '70% 80%',
          toggleActions: 'play none none none',
          scrub: 1,
          // markers: true
        }
      });

      tl.from(textChar, 1, {opacity: 0, yPercent: 150, stagger: 0.08, ease: 'power4.out', duration: 3.5,  })
  });
})

