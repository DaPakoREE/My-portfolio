const page = document.querySelector("html")
const themeSwitch = document.getElementById("theme-switch")

const sun = document.getElementById("sun")
const moon = document.getElementById("moon")

let SVGS;
let responsiveSVGS;

let lightMode = false
let previousFileNameAddon = "light"
let fileNameAddon = "dark"

const selfImages = document.querySelectorAll("#title-card img")
let timesSwitched = 0
let easterEggThreshold = 20

function getResponsiveSVGS(svg) {
    return (svg.src.indexOf("light") > -1)
}

function switchTheme() {
    lightMode = !lightMode
    updateTheme()
    previousFileNameAddon = fileNameAddon
    timesSwitched += 1

}

function updateTheme() {
    if (lightMode) {
        page.classList.add("light")
        sun.classList.remove("visible")
        moon.classList.add("visible")
        fileNameAddon = "dark"
    } else {
        page.classList.remove("light")
        moon.classList.remove("visible")
        sun.classList.add("visible")
        fileNameAddon = "light"
    }
    responsiveSVGS.forEach(svg => {
        svg.src = svg.src.replace(previousFileNameAddon, fileNameAddon)
    });
    if ((timesSwitched == easterEggThreshold || timesSwitched == easterEggThreshold + 1) && !lightMode) {
        selfImages.forEach(selfImage => {
            selfImage.src = selfImage.src.replace("self", "self_dark")
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    SVGS = document.querySelectorAll(".svg")
    responsiveSVGS = Array.from(SVGS).filter(getResponsiveSVGS);
});

themeSwitch.addEventListener("click", () => {
    switchTheme()
});