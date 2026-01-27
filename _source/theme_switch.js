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
let easterEggThreshold = Math.floor(Math.random() * 30) + 20

document.addEventListener("DOMContentLoaded", () => {
    SVGS = document.querySelectorAll(".svg")
    responsiveSVGS = Array.from(SVGS).filter(getResponsiveSVGS);
});

themeSwitch.addEventListener("click", () => {
    switchThemeTrigger()
});

function enableLightMode() {
    page.classList.add("light")
    sun.classList.remove("visible")
    moon.classList.add("visible")
    fileNameAddon = "dark"
}

function disableLightMode() {
    page.classList.remove("light")
    moon.classList.remove("visible")
    sun.classList.add("visible")
    fileNameAddon = "light"
}

function updateSvgs() {
    responsiveSVGS.forEach(svg => {
        svg.src = svg.src.replace(previousFileNameAddon, fileNameAddon)
    });
}

function enableEasterEgg() {
    selfImages.forEach(selfImage => {
        selfImage.src = selfImage.src.replace("self", "self_dark")
    })
    if (lightMode) {
        disableLightMode()
        updateSvgs()
    }
}

function getResponsiveSVGS(svg) {
    return (svg.src.indexOf("light") > -1)
}

function updateTheme() {
    if (lightMode) {
        enableLightMode()
    } else {
        disableLightMode()
    }
    updateSvgs()
}

function switchThemeTrigger() {
    if (timesSwitched < easterEggThreshold) {
        lightMode = !lightMode
        updateTheme()
        previousFileNameAddon = fileNameAddon
    } else if (timesSwitched == easterEggThreshold) {
        enableEasterEgg()
    }
    timesSwitched += 1
}