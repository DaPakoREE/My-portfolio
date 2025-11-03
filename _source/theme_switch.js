const page = document.querySelector("html");
const themeToggle = document.getElementById("theme-toggle");
const themeSwitch = themeToggle.querySelector("#theme-switch");
const themeSwitchLabel = themeToggle.querySelector("label");

let lightMode = false
let fileNameAddon = "dark"

function switchTheme() {
    lightMode = !lightMode
    if (lightMode) {
        page.classList.add("light")
        fileNameAddon = "light"
    } else {
        page.classList.remove("light")
        fileNameAddon = "dark"
    }
}

themeSwitch.addEventListener("click", () => {
    switchTheme()
});