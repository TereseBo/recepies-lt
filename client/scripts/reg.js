

function addIngredient(e) {//Adds an ingrddient field to the recipe form
    const ingredient = document.getElementById("ingredient-field-0").cloneNode(true);
    const ingredientId = document.getElementById("ingredients-container").children.length;
    ingredient.id = `ingredient-field-${ingredientId}`;
    let ingredientContainer = document.getElementById("ingredients-container");
    Array.from(ingredient.children).forEach(child => {child.value = ""});
    ingredientContainer.appendChild(ingredient);
}
async function registerRecipe(e) {//Sends the recipe to the server
    e.preventDefault();
    const form=document.getElementById("register-recipe");

    const formDataObj = {};
    formDataObj.name = form.querySelector("#name").value;
    formDataObj.ingredients = [];
    formDataObj.comment = form.querySelector("#comment").value;
    const ingredients = document.getElementById("ingredients-container").children;
   Array.from(ingredients).forEach(ingredient => {//Creates an ingredient object for each ingredient field
        const ingredientObj = {};
        console.log(ingredient);
       console.log(ingredient.querySelector("#ingredient").value);
        ingredientObj.name = ingredient.querySelector("#ingredient").value;
        ingredientObj.amount = ingredient.querySelector("#amount").value;
        ingredientObj.unit = ingredient.querySelector("#unit").value;
        ingredientObj.category = ingredient.querySelector("#category").value;
        formDataObj["ingredients"].push(ingredientObj);
    });
    const recipe = formDataObj;
    console.log(formDataObj);

    let res = await fetch("http://localhost:3001/recepies", {

        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(recipe)
    });
    if (res.ok) {
        console.log(res.status);
        e.target.reset();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-ingredient").addEventListener("click", e => { addIngredient(e); });
    document.getElementById("register-recipe").addEventListener("submit", e => { registerRecipe(e); });

})