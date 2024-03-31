// navigation button bento
const $btnWrap = document.querySelector(".btn-bento__wrap");

$btnWrap.addEventListener('click',function () {
  return $btnWrap.classList.toggle("on")
})

// sound nav btn click
let btnSound = new Audio();
btnSound.src = "../assets/sounds/menu.mp3";


//navigation-overlay
const $overlay = document.createElement('div'),
      $block = document.createElement('div'),
      $block1 = document.createElement('div'),
      $block2= document.createElement('div'),
      $block3 = document.createElement('div'),
      $block4 = document.createElement('div'),
      $block5 = document.createElement('div'),
      $block6 = document.createElement('div'),
      $block7 = document.createElement('div'),
      $overlayMenu = document.createElement('div'),
      $menuTitle = document.createElement('div'),
      $textMenu = document.createElement('p'),
      $menuItem = document.createElement('div');

      $headerContainer = document.querySelector('.header__container');
      $headerContainer.append($overlay);
      $headerContainer.append($overlayMenu);
      $overlayMenu.append($menuTitle);
      $menuTitle.append($textMenu);
      $overlayMenu.append($menuItem);

      $overlay.append($block);
      $overlay.append($block1);
      $overlay.append($block2);
      $overlay.append($block3);
      $overlay.append($block4);
      $overlay.append($block5);
      $overlay.append($block6);
      $overlay.append($block7);


$overlay.classList.add('overlay');
$block.classList.add('block');
$block1.classList.add('block');
$block2.classList.add('block');
$block3.classList.add('block');
$block4.classList.add('block');
$block5.classList.add('block');
$block6.classList.add('block');
$block7.classList.add('block');

$overlayMenu.classList.add('overlay-menu');
$menuTitle.classList.add('menu-title');
$menuItem.classList.add('menu-item');

$textMenu.textContent = 'menu';


document.addEventListener('DOMContentLoaded', () => {
  // const $btnBento = document.getElementById('btnBento');
  const $heroHeading = document.querySelector('.hero__heading');
  let isOpen = false;

  const timeline = gsap.timeline({ paused: true });

  timeline.to($heroHeading, {
    opacity: 0, // Fade out hero heading
    duration: 0.5,
    ease: "power#.inOut",
  });

  timeline.to(".block", {
    duration: 1,
    clipPath: " polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    stagger: 0.075,
    ease: "power#.inOut",
  });

  timeline.to(
    ".menu-title, .menu-item",
    {
      duration: 0.3,
      opacity: 1,
      stagger: 0.05,
    },
    "-=0.5"
  );

  $btnWrap.addEventListener('click', () => {
    if (isOpen) {
      timeline.reverse();
    } else {
      timeline.play();
    }
    isOpen = !isOpen;

  });
});
