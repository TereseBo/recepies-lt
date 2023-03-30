

function addIngredient(e) {//Adds an ingrddient field to the recipe form
    const ingredient = document.getElementById("ingredient-field").cloneNode(true);
    let ingredientContainer = document.getElementById("ingredients-container");
    Array.from(ingredient.children).forEach(child => {child.value = ""});
    ingredientContainer.appendChild(ingredient);
}
async function registerRecipe(e) {//Sends the recipe to the server
    e.preventDefault();
    const myFormData = new FormData(e.currentTarget);
    const formDataObj = {};
    formDataObj["ingredients"] = [];
    formDataObj["amounts"] = [];
    formDataObj["units"] = [];
    formDataObj["category"] = [];
    console.log(myFormData);
    myFormData.forEach((value, key) => {
        if(key === "ingredient"|| key === "unit" || key === "category"|| key === "amount"){
            switch(key){
                case "ingredient":
            formDataObj["ingredients"].push(value);
            break;
            case "unit":
            formDataObj["units"].push(value);
            break;
            case "category":
            formDataObj["category"].push(value);
            break;
            case "amount":
            formDataObj["amounts"].push(value);
            break;
            }}
        else{        
        formDataObj[key] = value
        }});
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
        console.log(res.status);


        e.target.reset();
        // alert("Ditt recept har registrerats!");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-ingredient").addEventListener("click", e => { addIngredient(e); });
    document.getElementById("register-recipe").addEventListener("submit", e => { registerRecipe(e); });

})