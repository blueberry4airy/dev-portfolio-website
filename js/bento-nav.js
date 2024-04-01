// navigation button bento
const $btnWrap = document.querySelector(".btn-bento__wrap");

$btnWrap.addEventListener('click',function () {
  return $btnWrap.classList.toggle("on")
})

// sound nav btn click
let btnSound = new Audio();
btnSound.src = "../assets/sounds/menu.mp3";


//navigation-overlay
const $overlayContainer = document.createElement('div'),
      $overlay = document.createElement('div'),

      $block = document.createElement('div'),
      $block1 = document.createElement('div'),
      $block2= document.createElement('div'),
      $block3 = document.createElement('div'),
      $block4 = document.createElement('div'),
      $block5 = document.createElement('div'),
      $block6 = document.createElement('div'),
      $block7 = document.createElement('div'),

      $overlayMenu = document.createElement('div'),
      $about = document.createElement('div'),
      $skills = document.createElement('div'),
      $projects = document.createElement('div'),
      $contacts = document.createElement('div'),
      $aboutLink = document.createElement('a'),
      $skillsLink = document.createElement('a'),
      $projectsLink = document.createElement('a'),
      $contactsLink = document.createElement('a'),
      $aboutLink2 = document.createElement('a'),
      $skillsLink2 = document.createElement('a'),
      $projectsLink2 = document.createElement('a'),
      $contactsLink2 = document.createElement('a'),
      $aboutImgWrap = document.createElement('div'),
      $skillsImgWrap = document.createElement('div'),
      $projectsImgWrap = document.createElement('div'),
      $contactsImgWrap = document.createElement('div'),
      $aboutImg = document.createElement('img'),
      $skillsImg = document.createElement('img'),
      $projectsImg = document.createElement('img'),
      $contactsImg = document.createElement('img'),

      $headerContainer = document.querySelector('.header__container');
      $headerContainer.append($overlayContainer);
      $overlayContainer.append($overlay, $overlayMenu);
      $overlayMenu.append($about, $skills, $projects, $contacts);
      $about.append($aboutLink, $aboutImgWrap, $aboutLink2);
      $skills.append($skillsLink, $skillsImgWrap, $skillsLink2);
      $projects.append($projectsLink, $projectsImgWrap, $projectsLink2);
      $contacts.append($contactsLink, $contactsImgWrap, $contactsLink2);
      $aboutImgWrap.append($aboutImg);
      $skillsImgWrap.append($skillsImg);
      $projectsImgWrap.append($projectsImg);
      $contactsImgWrap.append($contactsImg);

      $overlay.append($block, $block1, $block2, $block3, $block4, $block5, $block6, $block7);


$overlayContainer.classList.add('overlay-container');
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
$about.classList.add('item', 'about');
$skills.classList.add('item', 'skills');
$projects.classList.add('item', 'projects');
$contacts.classList.add('item', 'contacts');
$aboutLink.classList.add('link', 'about__link-1');
$skillsLink.classList.add('link', 'skills__link-1');
$projectsLink.classList.add('link', 'projects__link-1');
$contactsLink.classList.add('link', 'contacts__link-1');
$aboutLink2.classList.add('link', 'about__link-2');
$skillsLink2.classList.add('link', 'skills__link-2');
$projectsLink2.classList.add('link', 'projects__link-2');
$contactsLink2.classList.add('link', 'contacts__link-2');
$aboutImgWrap.classList.add('img-wrap');
$skillsImgWrap.classList.add('img-wrap');
$projectsImgWrap.classList.add('img-wrap');
$contactsImgWrap.classList.add('img-wrap');
$aboutImg.classList.add('img');
$skillsImg.classList.add('img');
$projectsImg.classList.add('img');
$contactsImg.classList.add('img');

$aboutLink.href = '#about';
$skillsLink.href = '#skills';
$projectsLink.href = '#projects';
$contactsLink.href = '#contacts';
$aboutLink2.href = '#about';
$skillsLink2.href = '#skills';
$projectsLink2.href = '#projects';
$contactsLink2.href = '#contacts';

$aboutLink.textContent = 'About';
$skillsLink.textContent = 'Skills';
$projectsLink.textContent = 'Projects';
$contactsLink.textContent = 'Contacts';
$aboutLink2.textContent = 'my persona';
$skillsLink2.textContent = 'my stack';
$projectsLink2.textContent = 'my work';
$contactsLink2.textContent = 'open to work';

$aboutImg.src = '../assets/images/about.gif'
$skillsImg.src = '../assets/images/skills.gif'
$projectsImg.src = '../assets/images/projects.gif'
$contactsImg.src = '../assets/images/contacts.gif'


document.addEventListener('DOMContentLoaded', () => {
  const $btnBento = document.getElementById('btnBento');
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
    ".item",
    {
      duration: 0.3,
      opacity: 1,
      stagger: 0.05,
    },
    "-=0.5"
  );

  $btnBento.addEventListener('click', () => {
    if (isOpen) {
      timeline.reverse();
            $heroHeading.style.display = 'flex'; // Add heading back to the DOM when overlay is closed

    } else {
      timeline.play();
            $heroHeading.style.display = 'none'; // Remove heading from the DOM when overlay is open

    }
    isOpen = !isOpen;

    if (isOpen) {
      $overlayContainer.classList.add('active'); // Add active class to make overlay contents visible
    } else {
      $overlayContainer.classList.remove('active'); // Remove active class to hide overlay contents
    }
  });

});
