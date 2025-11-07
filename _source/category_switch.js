const projectCategories = document.querySelectorAll(".project-category")
const nextButton = document.getElementById("arrow-next")
const previousButton = document.getElementById("arrow-previous")

let selectedCategory
let selectedCategoryIndex


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
    if (selectedCategoryIndex == projectCategories.length - 1) {
        selectedCategoryIndex = 0
    } else {
        selectedCategoryIndex += 1
    }
    updateSelectedCategory()
})

previousButton.addEventListener("click", () => {
    if (selectedCategoryIndex == 0) {
        selectedCategoryIndex = projectCategories.length - 1
    } else {
        selectedCategoryIndex -= 1
    }
    updateSelectedCategory()
})
