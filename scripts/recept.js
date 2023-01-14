async function getRecipes() {
    let res = await fetch("http://localhost:3001/recepies");
        const data = await res.json();
        console.log(data);



if (res.ok) {
    console.log("GET successful");



}
}



document.addEventListener("DOMContentLoaded", () => {
getRecipes();

})