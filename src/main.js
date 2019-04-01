/* Manejo del DOM */
/* Seleccionando los elementos del DOM */
const seleccionDeIndicadores = document.getElementById("selectores");
const seleccionPorAnio = document.getElementById("anios");
const resultado=document.getElementById("resultado-por-año");
//LLAMANDO A LA FUNCION QUE NOS DA LOS INDICADORCODE - INDICADORNAME
const indicadores=capturarIndicadores(todoPeruIndicadores);
// console.log(data2)
// console.log(indicadores);
// const aniosSeleccionados=capturarAnios(todoPeruIndicadores);
// console.log(aniosSeleccionados);

// CREAMOS UNA FUNCION PARA IMPRIMIR EN EL  SELECT LOS INDICATORCODE (VALOR) Y EL INDICATORNAME(NOMBRES DE LOS TEMAS ) 
const valorSelect = (indicador,elementoIdDom)=>{
    let string = '<option value="Todos" selected>Indicadores</option>';
    for(let i=0; i<indicador.length; i++){
        /*let indicadorId=indicador[i].id);
        let indicadorName=indicador[i].name);*/
        string += <option value=${indicador[i].id}>${indicador[i].name}</option>
    }
    elementoIdDom.innerHTML = string;
};
// LLAMANDO LA FUNCION
valorSelect(indicadores,seleccionDeIndicadores);


// CREAMOS UNA FUNCION PARA IMPRIMIR EN EL  SELECT LOS AÑOS DE CADA INDICE 
seleccionDeIndicadores.addEventListener( "change" ,(e)=>{
    const valorSelect= seleccionDeIndicadores.value;
    const arrAnio = listaAnio(data2,valorSelect);

    let string = '<option value="Todos" selected>Años</option>';
    for(let i=0; i < arrAnio.length; i++){
        /*let indicadorId=indicador[i].id);
        let indicadorName=indicador[i].name);*/
        string += <option value=${arrAnio[i]}>${arrAnio[i]}</option>;
    }

    seleccionPorAnio.innerHTML = string;
})