const projectCategories = document.querySelectorAll(".project-category")
const nextButton = document.getElementById("arrow-next")
const previousButton = document.getElementById("arrow-previous")

let selectedCategory
let selectedCategoryIndex


function switchSelectedCategory(shiftAmount) {
    let overflow = 0
    if (selectedCategoryIndex + shiftAmount > projectCategories.length - 1) {
        overflow = (selectedCategoryIndex + shiftAmount) - projectCategories.length
        shiftAmount = 0
        selectedCategoryIndex = 0
    } else if (selectedCategoryIndex + shiftAmount < 0) {
        overflow = (selectedCategoryIndex + shiftAmount)
        shiftAmount = 0
        selectedCategoryIndex = projectCategories.length
    }
    selectedCategoryIndex += (shiftAmount + overflow)
    updateSelectedCategory()
}

function updateSelectedCategory() {
    console.log(selectedCategory)
    selectedCategory.classList.remove("active-category")
    selectedCategory = projectCategories[selectedCategoryIndex]
    console.log(selectedCategory)
    selectedCategory.classList.add("active-category")
}


document.addEventListener("DOMContentLoaded", () => {
    selectedCategoryIndex = 0
    selectedCategory = projectCategories[selectedCategoryIndex]
    console.log(selectedCategory)
});

nextButton.addEventListener("click", () => {
    switchSelectedCategory(1)
})

previousButton.addEventListener("click", () => {
    switchSelectedCategory(-1)
})
