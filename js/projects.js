let lenis;

const $grid = document.querySelector('.grid'),
      $gridBox = $grid.querySelectorAll('.grid__box'),

initLenis = ()=> {
  lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};

animateBoxes = () => {
  $gridBox.forEach((box) => {
    box.addEventListener('mouseenter', () => {
      $gridBox.forEach((otherBox) => {
        if (otherBox != box) {
          otherBox.style.filter = 'grayscale(100%)';
          otherBox.style.transform = 'scale(0.4)';
        } else {
          otherBox.style.filter = 'grayscale(0)';
          otherBox.style.transform = 'scale(0.9)';
        }
      });
    });

    box.addEventListener('mouseleave', () => {
      $gridBox.forEach((otherBox) => {
          otherBox.style.filter = 'grayscale(0)';
          otherBox.style.transform = 'scale(0.7)';
      })
    })
  })
}

window.onload = () => {
  initLenis();
  animateBoxes();
};
