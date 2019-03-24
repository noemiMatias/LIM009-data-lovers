/* Manejo del DOM */

//window.example(); 
//window.example();
const container=document.getElementById("contenedor");
const selectYears=document.getElementById("items");

selectYears.addEventListener('change',()=>{
    console.log(selectYears.value)
    /*console.log(window.example())*/
}) 