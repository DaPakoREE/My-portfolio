const projectCategories = document.querySelectorAll(".project-category")
const categorySelector = document.getElementById("category-selector")

const categorySelectors = categorySelector.querySelectorAll("button.selector-option")
const nextButton = categorySelector.querySelector("#arrow-next")
const previousButton = categorySelector.querySelector("#arrow-previous")

let selectedCategoryIndex = 0

let selectedSelector
let selectedCategory


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
    selectedSelector.classList.remove("selected-option")
    selectedCategory.classList.remove("active-category")
    selectedSelector = categorySelectors[selectedCategoryIndex]
    selectedCategory = projectCategories[selectedCategoryIndex]
    selectedSelector.classList.add("selected-option")
    selectedCategory.classList.add("active-category")
}


document.addEventListener("DOMContentLoaded", () => {
    selectedSelector = categorySelectors[selectedCategoryIndex]
    selectedCategory = projectCategories[selectedCategoryIndex]
});

categorySelectors.forEach(selector => {
    selector.addEventListener("click", () => {
        shiftAmount = selector.value - selectedCategoryIndex
        if (shiftAmount) {
            switchSelectedCategory(shiftAmount)
        }
    })
})

nextButton.addEventListener("click", () => {
    switchSelectedCategory(1)
})

previousButton.addEventListener("click", () => {
    switchSelectedCategory(-1)
})