const todoPeruIndicadores = WORLDBANK['PER']['indicators'];

const elementoSelectIndicador = document.getElementById("selectores");
const resultado = document.getElementById("resultado-por-año");
const selectOrden = document.getElementById("orden");
const imprimirordenAsc = document.getElementById("resultado-orden-asc");
const botonPromedio = document.getElementById("promedio-por-select");
const imprimirPromedio = document.getElementById("resultado-promedio");
let arrayFiltrado = [];
// CREAMOS UNA FUNCION PARA IMPRIMIR EN EL  SELECT LOS INDICATORCODE (VALOR) Y EL INDICATORNAME(NOMBRES DE LOS TEMAS ) 
const imprimirOpcionesIndicador = (indicadores, elementoIdDom) => {
    let string = '<option value="Todos" selected>Indicadores</option>';
    for (let i = 0; i < indicadores.length; i++) {
        string += `<option value=${indicadores[i].id}>${indicadores[i].name}</option>`
    }
    elementoIdDom.innerHTML = string;
};
// funcion para imprimir selector
imprimirOpcionesIndicador(worldbank.capturarIndicadores(todoPeruIndicadores), elementoSelectIndicador);
elementoSelectIndicador.addEventListener("change", (e) => {
    const valorSelect = e.target.value;
    const resultadoAnios = worldbank.capturarAnios(todoPeruIndicadores);
    arrayFiltrado = worldbank.filterData(worldbank.capturarAnios(todoPeruIndicadores), valorSelect);
    // console.log(resultadoAnios);
    let string = '<p><strong>AÑOS Y VALORES</strong></p>';
    for (let i = 0; i < resultadoAnios.length; i++) {
        if (resultadoAnios[i].indicatorCode === valorSelect) {

            let llaves = Object.keys(resultadoAnios[i].data)
            for (let j = 0; j < llaves.length; j++) {
                if (resultadoAnios[i].data[llaves[j]] != "") {
                    string += `<p>${llaves[j]}:${resultadoAnios[i].data[llaves[j]]}</p>`;
                    //console.log(Object.entries(resultadoAnios[i].data))
                }
            }

            resultado.innerHTML = string;
        }
    }
});

selectOrden.addEventListener("change", (e) => {
    const valorSelect = e.target.value;
    const newData = worldbank.ordenadoAscDesc(arrayFiltrado, valorSelect);
    //console.log(newData)
    let string = "'<p><strong>ordenando valores</strong></p>'";
    for (let i = 0; i < newData.length; i++) {
        string += `<p>${newData[i].anio}:${newData[i].val}</p>`

    }
    imprimirordenAsc.innerHTML = string
});


botonPromedio.addEventListener("click", () => {
    const promedio1 = worldbank.promedio(worldbank.capturarAnios(todoPeruIndicadores), elementoSelectIndicador.value);

    imprimirPromedio.innerHTML = promedio1;
});