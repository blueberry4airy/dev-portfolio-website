

document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  const text = document.querySelector(".text");

// Make the selected text circular with CircleType
const rotate = new CircleType(text);

  gsap.to(text, {
    rotation: 360 * 5,
    duration: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: ".text",
      scrub: 0.2,
      start: 'top top',
      end: '+=10000',
    }
  });
});

