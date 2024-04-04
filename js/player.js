const $canvas = document.querySelector('canvas'),
  $audio = document.querySelector('#audio'),
  $switch = document.querySelector('#switch');


  // Function to play the audio and loop it endlessly
const playAudioLoop = () => {
  $audio.play();
  $audio.addEventListener('ended', () => {
    $audio.currentTime = 0; // Reset the audio to the beginning
    $audio.play(); // Play the audio again
  });
};


let opt = {
  width: $canvas.offsetWidth,
  height: $canvas.offsetHeight,
  midY: $canvas.offsetHeight / 2,
  points: 80,
  stretch: 10,
  sinHeight: 0,
  speed: -0.1,
  strokeColor: '#930000',
  strokeWidth: 1.5,
  power: false,
};

$canvas.width = opt.width * 2;
$canvas.height = opt.height * 2;
$canvas.style.width = opt.width;
$canvas.style.height = opt.height;

const ctx = $canvas.getContext('2d');
ctx.scale(2, 2);

ctx.strokeStyle = opt.strokeColor;
ctx.lineWidth = opt.strokeWidth;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let time = 0;

const render = () => {
  window.requestAnimationFrame(render);
  ctx.clearRect(0, 0, opt.width, opt.height);
  time += 1;
  ctx.beginPath();
  let increment = 0;

  for (i = 0; i <= opt.points; i++) {
    if (i < opt.points / 2) {
      increment += 0.1;
    } else {
      increment += -0.1;
    }

    const x = (opt.width / opt.points) * i;
    const y = opt.midY + Math.sin(time * opt.speed + i / opt.stretch) * opt.sinHeight * increment;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
};

render();

$canvas.addEventListener('click', () => {
  opt.power = !opt.power;

  if (opt.power) {

    playAudioLoop();
    $switch.checked = true;
    TweenMax.to(opt, 1, {
      sinHeight: 4,
      stretch: 5,
      ease: Power2.easeInOut,
    });
  } else {
    $audio.pause();
    $switch.checked = false;
    TweenMax.to(opt, 1, {
      sinHeight: 0,
      stretch: 10,
      ease: Power3.easeOut,
    });
  }
});


// change position when navigation opened
const $btnBentoWrap = document.querySelector('.btn-bento__wrap');

// Function to toggle the canvas position when the overlay is opened/closed
const toggleCanvasPosition = () => {
  $canvas.classList.toggle('overlay-opened');
};


// Event listener to play music when switch is clicked
$switch.addEventListener('click', () => {
 opt.power = !opt.power;

  if (opt.power) {

    playAudioLoop();
    $switch.checked = true;
    TweenMax.to(opt, 1, {
      sinHeight: 4,
      stretch: 5,
      ease: Power2.easeInOut,
    });
  } else {
    $audio.pause();
    $switch.checked = false;
    TweenMax.to(opt, 1, {
      sinHeight: 0,
      stretch: 10,
      ease: Power3.easeOut,
    });
  }
});

// Event listener to toggle canvas position when overlay is opened/closed
$btnBentoWrap.addEventListener('click', toggleCanvasPosition);


const clickSound = new Audio();
clickSound.src = "../assets/sounds/click-btn .mp3";



