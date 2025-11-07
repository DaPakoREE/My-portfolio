const projectCategories = document.querySelectorAll(".project-category")
const nextButton = document.getElementById("arrow-next")
const previousButton = document.getElementById("arrow-previous")

let selectedCategory
let selectedCategoryIndex

document.addEventListener("DOMContentLoaded", () => {
    selectedCategoryIndex = 0
    selectedCategory = projectCategories[selectedCategoryIndex]
    console.log(selectedCategory)
});

nextButton.addEventListener("click", () => {
    selectedCategoryIndex += 1
    selectedCategory = projectCategories[selectedCategoryIndex]
    console.log(selectedCategory)
})
