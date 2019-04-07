/* Manejo del DOM */
const elementoSelectIndicador = document.getElementById("selectores");
const resultado = document.getElementById("resultado-por-año");
const selectOrden = document.getElementById("orden");
const imprimirordenAsc = document.getElementById("resultado-orden-asc");

// CREAMOS UNA FUNCION PARA IMPRIMIR EN EL  SELECT LOS INDICATORCODE (VALOR) Y EL INDICATORNAME(NOMBRES DE LOS TEMAS ) 
const imprimirOpcionesIndicador = (indicadores, elementoIdDom) => {
    let string = '<option value="Todos" selected>Indicadores</option>';
    for (let i = 0; i < indicadores.length; i++) {
        string += `<option value=${indicadores[i].id}>${indicadores[i].name}</option>`
    }
    elementoIdDom.innerHTML = string;
};
//funcion para imprimir selector
imprimirOpcionesIndicador(capturarIndicadores(todoPeruIndicadores), elementoSelectIndicador);

let data2=[]

elementoSelectIndicador.addEventListener("change", (e) => {  
    const valorSelect = e.target.value;
    const resultadoAnios = capturarAnios(todoPeruIndicadores);
    // console.log(resultadoAnios);
    let string = '<p>Años</p>';
    for (let i = 0; i < resultadoAnios.length; i++) {
        if (resultadoAnios[i].indicatorCode === valorSelect) {
            data2=resultadoAnios[i];
            let llaves = Object.keys(resultadoAnios[i].data)
            for (let j=0; j < llaves.length; j++) {
                string += `<p>${llaves[j]}${resultadoAnios[i].data[llaves[j]]}</p>`;
                //console.log(Object.entries(resultadoAnios[i].data))
            }
        
            resultado.innerHTML = string;    
        }  
        }
});


selectOrden.addEventListener("change", (e) => {
   
    const valorSelect = e.target.value;
    let string = '<p>Años</p>';
    if(valorSelect == "asc"){
        newData = listaAniosValores(capturarAnios(todoPeruIndicadores));
        for(let i=0; i<newData.length; i++){
           if(newData[i].indicatorCode === elementoSelectIndicador.value){
            string +=`<p>${newData[i].anio}</p>`;
           }
           imprimirordenAsc.innerHTML =  string;
    }
    }
});


