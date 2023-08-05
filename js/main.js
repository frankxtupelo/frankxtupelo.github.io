
let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    bg.style.top = `${value * 0.5}px`;
    moon.style.left = `-${value * 0.5}px`;
    mountain.style.top = `-${value * 0.15}px`;
    road.style.top = `${value * 0.15}px`;
    text.style.top = `${value * 1}px`;
});

window.onload = () => {

    // navigation
    navInit();

    text.innerHTML = text.innerText
    .split("")
    .map( function(char) {
        if(char == " ") {
            char = "&nbsp";
        }
        return "<span class='letter'>" + char + "</span>";
    })
    .join("");

    const textSpan = document.querySelectorAll('#text .letter');
    const textSpanArr = Array();
    textSpan.forEach( spanEl => textSpanArr.push(spanEl) );
    console.log(textSpanArr);

    // gsap 

    // gsap set elements values
    const initText = () => {
        gsap.set(
            textSpanArr,
            {
                y: '101%', 
                autoAlpha: 0
            }
        );

        gsap.set(
            ".navArea", 
            {
                y: "-101%",
                autoAlpha: 0
            }
        );
        
        gsap.set(
            ".navLogo", 
            {
                autoAlpha: 0
            }
        );

        gsap.set(
            ".navItem", 
            {
                autoAlpha: 0
            }
        );

        gsap.set(
            ".navButton", 
            {
                autoAlpha: 0
            }
        );

        showText();
    }

    // gsap animate element values
    const showText = () => {
        gsap.timeline()
        .to(
            textSpanArr,
            {
                duration: 1,
                ease: 'expo.in', 
                stagger: 0.055,

                y: 0,
                autoAlpha: 1,
            })
        .to(
            ".navArea",
            {
                duration: 1,
                ease: 'expo.in',

                y: 0,
                autoAlpha: 1,
            })
        .to(
            ".navLogo", 
            {
                delay: 0,
                duration: 1,
                stagger: 0.055,

                autoAlpha: 1,
            }
        )
        .to(
            ".navItem", 
            {
                delay: 0,
                duration: 1,
                stagger: 0.055,

                autoAlpha: 1,
            }
        )
        .to(
            ".navButton", 
            {
                delay: 0,
                duration: 1,
                stagger: 0.055,

                autoAlpha: 1,
            }
        );
    }

    // gsap start animatioin
    initText();

} // end window.onload