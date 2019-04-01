/* Manejo del DOM */
/* Seleccionando los elementos del DOM */
const seleccionDeIndicadores = document.getElementById("selectores");
const seleccionPorAnio = document.getElementById("anios");
const resultado=document.getElementById("resultado-por-año");
//LLAMANDO A LA FUNCION QUE NOS DA LOS INDICADORCODE - INDICADORNAME
const indicadores=capturarIndicadores(todoPeruIndicadores);
// console.log(indicadores);

// CREAMOS UNA FUNCION PARA IMPRIMIR EN EL  SELECT LOS INDICATORCODE (VALOR) Y EL INDICATORNAME(NOMBRES DE LOS TEMAS ) 
const valorSelect = (indicador,elementoIdDom)=>{
    let string = '<option value="Todos" selected >Todos</option>';
    for(let i=0; i<indicador.length; i++){
    /*let indicadorId=indicador[i].id);
    let indicadorName=indicador[i].name);*/
    string += `<option value=${indicador[i].id}>${indicador[i].name}</option>`
    }
    elementoIdDom.innerHTML = string;
};

valorSelect(indicadores,seleccionDeIndicadores);

// CAPTURAR EL VALUE DE CADA SELEC CON E-TARGET PARA IMPRIMIR AÑOS

/*seleccionDeIndicadores.addEventListener('change',(e)=>{
    e.preventDefault(); 
    const valorTarget= e.target.value;
    console.log(valorTarget);
const valorIndice=window.capturarIndice();
        console.log(window.capturarIndice);

   const imprimirIndicadores = `<option value=${data[i].indicatorCode}>${data[i].indicatorName}</option>`

    
   seleccionDeIndicadores.innerHTML=imprimirIndicadores;

});
    
    };


 console.log(e.target.value)*/
//console.log();