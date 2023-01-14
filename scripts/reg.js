

function addIngredient(e) {
    console.log("add ingredient");
    e.PreventDefault();
    console.log("add ingredient");
    const ingredient = document.getElementById("ingredient-field").cloneNode(true);
    let ingredientContainer = document.getElementById("ingredients-container");
    console.log(ingredientContainer.children.length);
    let nr= ingredientContainer.children.length
    ingredient.setAttribute("id", `ingredient-field-${nr}`);
    ingredient.children[0].setAttribute("id", `ingredient-${nr}`);
    ingredient.children[0].setAttribute("name", `ingredient-${nr}`);
    ingredient.children[1].setAttribute("id", `amount-${nr}`);
    ingredient.children[1].setAttribute("name", `amount-${nr}`);
    ingredientContainer.appendChild(ingredient);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-ingredient").addEventListener("click", addIngredient);
    //addIngredient();
})