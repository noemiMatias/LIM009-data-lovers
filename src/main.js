/* Manejo del DOM */
/* Seleccionando los elementos del DOM */

const elementoResultadoPorAño = document.getElementById('resultado-por-año');


//console.log(window.example());


const obtenerValorPorAño = (año, arr) => {

console.log(año);
const arrNuevo = [];

//console.log(año === "2003")

for(let i = 0; i < arr.length; i++){
    //console.log(arr[i].year === '2003')
    if(arr[i].year === año){
      arrNuevo.push(arr[i])  
    }   
}

 return arrNuevo;

}


const pintarDataPorAñoSeleccionado = (arr, elemento) => {
  let string = '';
 for(let i = 0; i < arr.length; i++){
     string += `<div>
      <p> Año : ${arr[i].year} </p> 
      <p> Valor : ${arr[i].value} </p>
     </div>`
 }
 elemento.innerHTML = string;
}


const container=document.getElementById("contenedor");
const selectYears=document.getElementById("items");
console.log(selectYears.value);
selectYears.addEventListener('change',(e)=>{
    //console.log(e.target.value);
    //console.log(window.example())
   const añoSeleccionado =  e.target.value;
   const dataPorAños = window.example();
   const dataPorAñoSeleccionado =  obtenerValorPorAño(añoSeleccionado, dataPorAños);
   pintarDataPorAñoSeleccionado(dataPorAñoSeleccionado,elementoResultadoPorAño);

});