async function getRecipes() {
    let res = await fetch("http://localhost:3001/recepies");
    const data = await res.json();
    console.log(data);
    if (res.ok) {
        console.log("GET successful");
        return data;
    } else {
        console.log("GET failed");
        return null;
    }
}
function makeRecipe(recipe) {
    let template=document.getElementById("recipe-template").cloneNode(true);
    console.log(template);

}
function makeRecipeList(data) {
    data.forEach(element => {
        makeRecipe(element);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    let data=getRecipes();
    makeRecipeList(data);

})