history.scrollRestoration = 'manual';

const tl = gsap.timeline({
    default: {
        ease: "power1.out"
    }
});
// text animation
tl.to('.text', {
    y: "0%",
    duration: 1,
    stagger: 0.25
});
// slider animation 
tl.to('.slider', {
    y: "-100%",
    duration: 1,
    delay: 0.5
});
// text background animation
tl.to('.intro', {
    y: "-100%",
    duration: 1
}, "-=1");

// Fade In "Bright Minds"
tl.fromTo('.bldg-box', {
    opacity: 0 },
    {opacity: 1, duration: .75
});

// Parallax
const landing = document.getElementById("bldg");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    landing.style.backgroundPositionY = offset * 0.7 + "px";
})

// Start Counter

$(document).ready(function(){
    $(".num").counterUp({
        delay:  10,
        time: 1000
    });
});