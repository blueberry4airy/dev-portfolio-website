document.addEventListener('DOMContentLoaded', () => {
  //  // Array of greetings in different languages
  // const greetings = ['Hello !', 'Bonjour !', 'Привет !', 'Salut !', '안녕 !'];

  // // Function to update the greeting text
  // const updateGreeting = () => {
  //   const greetingElement = document.getElementById('greeting');
  //   const randomIndex = Math.floor(Math.random() * greetings.length);
  //   greetingElement.textContent = greetings[randomIndex];
  // };

  // // Update the greeting every 3 seconds
  // setInterval(updateGreeting, 3000);

  !(function cycleGreetingsText() {
  const $placeholder = document.querySelector(".hero__text.hero__text-swappable");
  const greetings = ["Hello!", "Bonjour!", "Salutare!", "Привет!", "안녕!"];
  const greetingsCount = greetings.length;
  const greetingTreshold = 1 / greetingsCount;
  const cycleDuration = 15000;

  (function _cycleGreetings() {
    let starttime;
    let currentGreeting = 0;

    function _update() {
      if ($placeholder) {
        const current = $placeholder.textContent;
        const greeting = greetings[
          Math.max(0, Math.min(greetingsCount, currentGreeting))
        ];

        $placeholder.classList.remove("slide--in", "slide--out");

        if (!current) {
          $placeholder.textContent = greeting;
          return;
        }

        if (current !== greeting) {
          requestAnimationFrame(() => {
            $placeholder.style.willChange = "transform, opacity";
            $placeholder.classList.add("slide--out");

            $placeholder.addEventListener("animationend", function _slideOutEnded(evt) {
              if (evt.animationName === "text-swap-slide-out") {
                $placeholder.textContent = greeting;
                $placeholder.classList.add("slide--in");
                $placeholder.classList.remove("slide--out");
                $placeholder.removeEventListener("animationend", _slideOutEnded);

                $placeholder.addEventListener("animationend", function _slideInEnded(evt) {
                  if (evt.animationName === "text-swap-slide-in") {
                    $placeholder.classList.remove("slide--in");
                    $placeholder.style.willChange = "";
                    $placeholder.removeEventListener("animationend", _slideInEnded);
                  }
                });
              }
            });
          });
        }
      }
    }

    function _animate(timestamp) {
      if (!starttime) starttime = timestamp;
      const progress = Math.max(0, Math.min(1, (timestamp - starttime) / cycleDuration));

      if (progress < 1) {
        const greeting = Math.floor(progress / greetingTreshold);

        if (greeting !== currentGreeting) {
          currentGreeting = greeting;
          _update();
        }

        requestAnimationFrame(_animate);
      } else {
        _cycleGreetings();
      }
    }

    _update();
    requestAnimationFrame(_animate);
  })();
})();

})
