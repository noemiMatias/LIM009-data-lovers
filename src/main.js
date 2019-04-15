const todoPeru = WORLDBANK['PER']['indicators'];
const dataTotal = worldbank.todoPeruIndicadores(todoPeru);
const elementoSelectIndicador = document.getElementById('selectores');
const resultado = document.getElementById('resultado-por-año');
const selectOrden = document.getElementById('orden');
const botonPromedio = document.getElementById('promedio-por-select');
const imprimirPromedio = document.getElementById('resultado-promedio');
let arrayFiltrado = [];
// CREAMOS UNA FUNCION PARA IMPRIMIR EN EL  SELECT LOS INDICATORCODE (VALOR) Y EL INDICATORNAME(NOMBRES DE LOS TEMAS ) 
const imprimirOpcionesIndicador = (indicadores, elementoIdDom) => {
  let string = '<option value="Todos" selected>Indicadores</option>';
  for (let i = 0; i < indicadores.length; i++) {
    string += `<option value=${indicadores[i].id}>${indicadores[i].name}</option>`;
  }
  elementoIdDom.innerHTML = string;
};
// funcion para imprimir selector
imprimirOpcionesIndicador(worldbank.capturarIndicadores(dataTotal), elementoSelectIndicador);
elementoSelectIndicador.addEventListener('change', (event) => {
  const valorSelect = event.target.value;
  const resultadoAnios = worldbank.capturarAnios(dataTotal);
  arrayFiltrado = worldbank.filterData(worldbank.capturarAnios(dataTotal), valorSelect);
  // console.log(resultadoAnios);
  let string = '<table><th scope="col">AÑOS Y VALORES PORCENTUALES</th></table>';
  for (let i = 0; i < resultadoAnios.length; i++) {
    if (resultadoAnios[i].indicatorCode === valorSelect) {
      let llaves = Object.keys(resultadoAnios[i].data);
      for (let j = 0; j < llaves.length; j++) {
        if (resultadoAnios[i].data[llaves[j]] !== '') {
          string += `<table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Año</th>
                        <th scope="col">%</th>
                      </tr>
                    </thead>
                    <tbody>
                    <th scope="row">${llaves[j]}</th>
                        <td>${resultadoAnios[i].data[llaves[j]]}</td>
                    </tbody>
                  </table>`;
        }
      }

      resultado.innerHTML = string;
    }
  }
});

selectOrden.addEventListener('change', (event) => {
  resultado.innerHTML=""
  const valorSelect = event.target.value;
  const newData = worldbank.ordenadoAscDesc(arrayFiltrado, valorSelect);
  // console.log(newData)
  let string = '<table><th scope="col">VALORES PORCENTUALES EN ORDEN ASCENDENTE Y DESCENDENTE</th></table>';
  for (let i = 0; i < newData.length; i++) {
    string += `<table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Año</th>
                        <th scope="col">%</th>
                      </tr>
                    </thead>
                    <tbody>
                    <th scope="row">${newData[i].anio}</th>
                        <td>${newData[i].val}</td>
                    </tbody>
                  </table>`;
  }
  resultado.innerHTML = string;
});


botonPromedio.addEventListener('click', () => {
  const promedio1 = worldbank.promedio(worldbank.capturarAnios(dataTotal), elementoSelectIndicador.value);
  let string = '<table><th scope="col">PROMEDIO PORCENTUAL</th></table>';
  string += `<table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">%</th>
      </tr>
    </thead>
    <tbody>
    <th scope="row">${promedio1}</td>
    </tbody>
  </table>`;

  imprimirPromedio.innerHTML = string;
});