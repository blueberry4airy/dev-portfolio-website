// navigation button bento
 const $btnWrap = document.querySelector(".btn-bento__wrap");

$btnWrap.addEventListener('click',function () {
  return $btnWrap.classList.toggle("on")
})

// sound nav btn click
let btnSound = new Audio("sounds/menu.mp3");


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
      $home = document.createElement('div'),
      $about = document.createElement('div'),
      $skills = document.createElement('div'),
      $projects = document.createElement('div'),
      $contacts = document.createElement('div'),
      $homeLink = document.createElement('a'),
      $aboutLink = document.createElement('a'),
      $skillsLink = document.createElement('a'),
      $projectsLink = document.createElement('a'),
      $contactsLink = document.createElement('a'),
      $homeLink2 = document.createElement('a'),
      $aboutLink2 = document.createElement('a'),
      $skillsLink2 = document.createElement('a'),
      $projectsLink2 = document.createElement('a'),
      $contactsLink2 = document.createElement('a'),
      $homeImgWrap = document.createElement('div'),
      $aboutImgWrap = document.createElement('div'),
      $skillsImgWrap = document.createElement('div'),
      $projectsImgWrap = document.createElement('div'),
      $contactsImgWrap = document.createElement('div'),
      $homeImg = document.createElement('img'),
      $aboutImg = document.createElement('img'),
      $skillsImg = document.createElement('img'),
      $projectsImg = document.createElement('img'),
      $contactsImg = document.createElement('img'),

      $headerContainer = document.querySelector('.header__container');
      $headerContainer.append($overlayContainer);
      $overlayContainer.append($overlay, $overlayMenu);
      $overlayMenu.append($home, $projects, $skills,$about, $contacts);
      $home.append($homeLink, $homeImgWrap, $homeLink2);
      $about.append($aboutLink, $aboutImgWrap, $aboutLink2);
      $skills.append($skillsLink, $skillsImgWrap, $skillsLink2);
      $projects.append($projectsLink, $projectsImgWrap, $projectsLink2);
      $contacts.append($contactsLink, $contactsImgWrap, $contactsLink2);
      $homeImgWrap.append($homeImg);
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
$home.classList.add('item', 'home');
$about.classList.add('item', 'about');
$skills.classList.add('item', 'skills');
$projects.classList.add('item', 'projects');
$contacts.classList.add('item', 'contacts');
$homeLink.classList.add('link', 'home__link-1');
$aboutLink.classList.add('link', 'about__link-1');
$skillsLink.classList.add('link', 'skills__link-1');
$projectsLink.classList.add('link', 'projects__link-1');
$contactsLink.classList.add('link', 'contacts__link-1');
$homeLink2.classList.add('link', 'home__link-2');
$aboutLink2.classList.add('link', 'about__link-2');
$skillsLink2.classList.add('link', 'skills__link-2');
$projectsLink2.classList.add('link', 'projects__link-2');
$contactsLink2.classList.add('link', 'contacts__link-2');
$homeImgWrap.classList.add('img-wrap');
$aboutImgWrap.classList.add('img-wrap');
$skillsImgWrap.classList.add('img-wrap');
$projectsImgWrap.classList.add('img-wrap');
$contactsImgWrap.classList.add('img-wrap');
$homeImg.classList.add('img');
$aboutImg.classList.add('img');
$skillsImg.classList.add('img');
$projectsImg.classList.add('img');
$contactsImg.classList.add('img');

$homeLink.href = '#hero';
$aboutLink.href = '#about';
$skillsLink.href = '#skills';
$projectsLink.href = '#projects';
$contactsLink.href = '#contacts';
$homeLink2.href = '#hero';
$aboutLink2.href = '#about';
$skillsLink2.href = '#skills';
$projectsLink2.href = '#projects';
$contactsLink2.href = '#contacts';

$homeLink.textContent = 'Welcome';
$aboutLink.textContent = 'About';
$skillsLink.textContent = 'Skills';
$projectsLink.textContent = 'Projects';
$contactsLink.textContent = 'Contacts';
$homeLink2.textContent = 'Home';
$aboutLink2.textContent = 'my persona';
$skillsLink2.textContent = 'my stack';
$projectsLink2.textContent = 'my work';
$contactsLink2.textContent = "Let's get in touch!";

$homeImg.src = 'images/home.gif';
$aboutImg.src = 'images/about.gif';
$skillsImg.src = 'images/skills.gif';
$projectsImg.src = 'images/projects.gif';
$contactsImg.src = 'images/contacts.gif';



// soudn page turn for the link
const linkSound = new Audio("sounds/page-turn.webm");



document.addEventListener('DOMContentLoaded', () => {
  const $heroHeading = document.querySelector('.hero__heading'),
        // $heroIntroduction = document.querySelector('.hero__introduction'),
        $footer = document.querySelector('.footer'),
        // $toggle = document.querySelector('.toggle'),
        $main = document.querySelector('.main');


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

  $btnWrap.addEventListener('click', () => {
    btnSound.play();

    if (isOpen) {
      timeline.reverse();
            // $heroHeading.style.display = 'flex'; // Add heading back to the DOM when overlay is closed
            // $heroIntroduction.style.display = 'flex';
            $footer.style.display = 'flex';
            $main.style.display = 'block';
            $btnWrap.classList.remove('on');
            // $toggle.classList.remove('hidden');
            $overlayContainer.style.display = 'none';

    } else {
      timeline.play();
            // $heroHeading.style.display = 'none'; // Remove heading from the DOM when overlay is open
            // $heroIntroduction.style.display = 'none';
            $footer.style.display = 'none';
            $btnWrap.classList.add('on');
            // $toggle.classList.add('hidden');
            $main.style.display = 'none';
            $overlayContainer.style.display = 'block';
    }

    isOpen = !isOpen;



  // Add event listeners to each menu link
[$homeLink, $homeLink2, $aboutLink, $aboutLink2, $skillsLink, $skillsLink2, $projectsLink, $projectsLink2, $contactsLink, $contactsLink2 ].forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior (page reload)
    event.preventDefault();

    // Get the href attribute of the clicked link
    const targetSection = event.currentTarget.getAttribute('href');

    // Navigate to the corresponding section of the page
    window.location = targetSection;

    // Close the overlay by reversing the timeline animation
   timeline.reverse();
            $footer.style.display = 'flex';
            $main.style.display = 'block';
            $btnWrap.classList.remove('on');
            $overlayContainer.style.display = 'none';
  });
});
  });

  //menu words storm
  const $items = document.querySelectorAll('.item');

  $items.forEach((item) => {
    item.addEventListener('mouseenter', shuffleAnimation);
  });

});

function getRandomCharacter() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   return chars[Math.floor(Math.random() * chars.length)];
}

function shuffleAnimation(event) {
  const target = event.currentTarget;

  if (target.dataset.animating) {
    return;
  }

  target.dataset.animating = true;

  const words = target.querySelectorAll('.link');
  const originalWords = Array.from(words).map((word) => word.textContent);

  let shuffles = 0;
  const maxShuffles = 10;
  const intervalDuration = 500 / maxShuffles;

  let animationInterval = setInterval(() => {
    if (shuffles>=maxShuffles) {
      clearInterval(animationInterval);
      words.forEach((word, index) => {
        word.textContent = originalWords[index];
      });

      delete target.dataset.animating;
    } else {
      words.forEach((word) => {
        const length = word.textContent.length;
        let shuffledText = "";
        for (let i =0; i< length; i++) {
          shuffledText += getRandomCharacter()
        }
        word.textContent = shuffledText;
      });
      shuffles++;
    }
  }, intervalDuration);
}



