const navDropdownMenu = document.getElementById("nav-dropdown-menu")

let showDropdown = false


function inverseShowValue() {
    showDropdown = !showDropdown
    showOrHideDropdown()
}

function showOrHideDropdown() {
    if (showDropdown) {
        navDropdownMenu.classList.add("show")
    } else {
        navDropdownMenu.classList.remove("show")
    }
}


document.addEventListener("click", (e) => {
    if (e.target.closest("#nav-dropdown-btn")) {
        inverseShowValue()
    } else if (!e.target.closest("#nav-dropdown-menu") && !e.target.closest("#navigation .mobile label svg")) {
        if (showDropdown) {
            inverseShowValue()
        }
    }
})