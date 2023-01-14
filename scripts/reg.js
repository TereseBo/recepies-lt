

function addIngredient(e) {
    console.log("add ingredient");
    console.log("add ingredient");
    const ingredient = document.getElementById("ingredient-field").cloneNode(true);
    let ingredientContainer = document.getElementById("ingredients-container");
    console.log(ingredientContainer.children.length);
    let nr = ingredientContainer.children.length
    ingredient.setAttribute("id", `ingredient-field-${nr}`);
    ingredient.children[0].setAttribute("id", `ingredient-${nr}`);
    ingredient.children[0].setAttribute("for", `ingredient-${nr}`);
    ingredient.children[0].setAttribute("name", `ingredient-${nr}`);
    ingredient.children[1].setAttribute("id", `amount-${nr}`);
    ingredient.children[1].setAttribute("name", `amount-${nr}`);
    ingredientContainer.appendChild(ingredient);
}
async function registerRecipe(e) {
    e.preventDefault();
    const myFormData = new FormData(e.currentTarget);
    const formDataObj = {};
console.log(myFormData);
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    let recipe = formDataObj;
    console.log(formDataObj);

    let res = await fetch("http://localhost:3001/recepies", {

        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(recipe)
    });
    if (res.ok) {
        console.log("Post successful");


        e.target.reset();
       // alert("Ditt recept har registrerats!");
       debugger;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-ingredient").addEventListener("click", e => { addIngredient(e); });
    document.getElementById("register-recipe").addEventListener("submit", e => { registerRecipe(e); });

})