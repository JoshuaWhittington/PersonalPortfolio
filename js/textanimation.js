document.addEventListener("DOMContentLoaded", function (){
    const animatedIntro = document.getElementById('animated-name');
    const animatedBlurb = document.getElementById('animated-blurb');

    animatedIntro.addEventListener('animationend', function (){
        animatedBlurb.classList.add('animate');
    })

    animatedIntro.classList.add('animate');
});