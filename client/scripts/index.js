async function fetchData() {
    const res = await fetch("http://localhost:3001/mushrooms")
    const data = await res.json();
    console.log(data);

    
}
document.addEventListener("DOMContentLoaded", fetchData);
