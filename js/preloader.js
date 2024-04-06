document.addEventListener("DOMContentLoaded", () => {
    function startLoader() {
        let counterElement = document.querySelector('.count');
        let currentValue = 0;

        function updateCounter() {
            if (currentValue < 100) {
                let increment = Math.floor(Math.random() * 10) + 1;
                currentValue = Math.min(currentValue + increment, 100);
                counterElement.textContent = currentValue;

                let delay = Math.floor(Math.random() * 200) + 25;
                setTimeout(updateCounter, delay);
            }
        }

        updateCounter();
        // Start animations after preload counter completes
        setTimeout(showSiteContent, 2500); // Adjust delay as needed
    }



    function showSiteContent() {

      gsap.from('.count', { opacity: 0, delay: 3.5, duration: 0.5 });
       gsap.from('header, footer, main', {  visibility: 'hidden', duration: 0.5, delay: 0.9 });

        // Animate the header
        gsap.to('.hero__heading span', {
            y: 150,
            ease: 'power4.inOut',
            duration: 3.5,
            stagger: 0.08,
        });

        // Hide loader elements
        gsap.to('.pre-loader', { scale: 0.5, ease: 'power4.inOut', duration: 2 });
        gsap.to('.loader', { height: '0', ease: 'power4.inOut', duration: 1.5 });
        gsap.to('.loader-bg', { height: '0', ease: 'power4.inOut', duration: 2 });
        gsap.to('.loader-2', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', ease: 'power4.inOut', duration: 2 });

        // Show site content
        gsap.to('header, footer, main', {  visibility: 'visible', duration: 1.5, delay: 2 });
            gsap.to('.loader-content', { visibility: 'hidden', duration: 0.5, delay: 0.5 });
            gsap.to('.loader', { visibility: 'hidden', duration: 0.5, delay: 0.5 });
              gsap.to('.header__circular-text, .btn-bento__wrap, canvas, .toggle, .hero__introduction, .projects__container ', { opacity: 1, duration: 1, delay: 2 });

    }

    startLoader(); // Start the loader animation
});


