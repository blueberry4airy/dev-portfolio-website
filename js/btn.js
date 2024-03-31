const $bento = document.querySelector(".menu__wrapper");

$bento.addEventListener('click',function () {
  return $bento.classList.toggle("on")
})

let btnSound = new Audio();
btnSound.src = "../assets/sounds/menu.mp3";
