addEventListener("DOMContentLoaded", () => {
    const template=document.getElementById("recipe-template").cloneNode(true);

    const recipes=  fetch("http://localhost:3001/recepies")
    .then(res => res.json())
    .then(data => {
        data.forEach(recipe => {
            const recipeTemplate=template.cloneNode(true);
            recipeTemplate.id=recipe.name;
            recipeTemplate.querySelector(".recipe-name").innerText=recipe.name;
            recipeTemplate.querySelector(".recipe-comment").innerText=recipe.comment;
            recipe.ingredients.forEach(ingredient => {
                const newIngredient=document.createElement("div");
                newIngredient.innerText=`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`;
                recipeTemplate.querySelector(".ingredient-container").appendChild(newIngredient);
            });
           
            document.getElementById("recipes").appendChild(recipeTemplate);
        });
    });
});