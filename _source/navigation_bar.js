const navDropdownBtn = document.getElementById("nav-dropdown-btn")
const navDropdownMenu = document.getElementById("nav-dropdown-menu")

let showDropdown = false


function showOrHideDropdown() {
    showDropdown = !showDropdown
    if (showDropdown) {
        navDropdownMenu.classList.add("show")
    } else {
        navDropdownMenu.classList.remove("show")
    }
}


navDropdownBtn.addEventListener("click", () => {
    showOrHideDropdown()
});