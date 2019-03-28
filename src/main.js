/* Manejo del DOM */
/* Seleccionando los elementos del DOM */
const data = WORLDBANK.PER.indicators;
//console.log(data);
const elementoResultadoPorAño = document.getElementById('resultado-por-año');
const indicadores = document.getElementById("indicadores");
const fechas = document.getElementById("anios");
const botonResultado = document.getElementById("boton");

botonResultado.addEventListener("click",()=>{
    
    //console.log(indicadores.value);
    //console.log(fechas.value);

    let resultado = retornaValor(data, 'SL.TLF.INTM.ZS', 2010);

    //console.log(resultado);
    elementoResultadoPorAño.innerHTML=resultado;

    
      //console.log(todaLaData);
      
      
      
      

});
indicadores.addEventListener("clik",()=>{
    let indicadores = obtenerIndicadores(data);
elementoPorAño.innerHTML=indicadores;

})


/*const obtenerValorPorAño = (año, arr) => {

//console.log(año);
const arrNuevo = [];

//console.log(año === "2003")

for(let i = 0; i < arr.length; i++){
    //console.log(arr[i].year === '2003')
    if(arr[i].year === año){
      arrNuevo.push(arr[i])  
    }   
}

 return arrNuevo;

};


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
//console.log(selectYears.value);
selectYears.addEventListener('change',(e)=>{
    //console.log(e.target.value);
    //console.log(window.example())
   const añoSeleccionado =  e.target.value;
   const dataPorAños = window.example();
   const dataPorAñoSeleccionado =  obtenerValorPorAño(añoSeleccionado, dataPorAños);
   pintarDataPorAñoSeleccionado(dataPorAñoSeleccionado,elementoResultadoPorAño);

});
/*const selectIndices=document.getElementById("indicadores");

//console.log(selectIndices.value);
 selectIndices.addEventListener('change',(e)=>{
     console.log(e.target.value);
     const indicadorSeleccionado=e.target.value;
     const funcionAsignada= ;

 });*/