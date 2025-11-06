const page = document.querySelector("html")
const themeToggle = document.getElementById("theme-toggle")
const themeSwitch = themeToggle.querySelector("#theme-switch")

const sun = document.getElementById("sun")
const moon = document.getElementById("moon")

let themeSwitchLabelImage = themeToggle.querySelector("label .svg")
let SVGS = []
let responsiveSVGS = []

let lightMode = false
let previousFileNameAddon = "light"
let fileNameAddon = "dark"

function getResponsiveSVGS(svg) {
    return (svg.src.indexOf("light") > -1)
}

function switchTheme() {
    lightMode = !lightMode
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
    previousFileNameAddon = fileNameAddon
}

document.addEventListener("DOMContentLoaded", () => {
    SVGS = document.querySelectorAll(".svg")
    responsiveSVGS = Array.from(SVGS).filter(getResponsiveSVGS);
});

themeSwitch.addEventListener("click", () => {
    switchTheme()
});