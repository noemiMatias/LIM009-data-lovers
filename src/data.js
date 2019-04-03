const todoPeruIndicadores = WORLDBANK['PER']['indicators'];

// ARRAY QUE CONTIENE ID Y NAME DE LOS INDICADORES QUE TENEMOS PUSHEADOS DE LA FUNCION DE CAPTURAR INDICE 

// 1RA FUNCION QUE CAPTURA LOS INDICADORES POR CODIGO Y NAME QUE QUIERO (FUERZA LABORAL 6 INDICADORES)
const capturarIndicadores = (data) => {
  // ARRAY DE INDICADORES
  let arr = [""];
  //  console.log(arr);
  for (let i = 0; i < data.length; i++) {
    if (i > 9 && i < 16) {
      let obj = {
        id: data[i].indicatorCode,
        name: data[i].indicatorName
        // console.log(valorIndicadores[i].id);
        // console.log(valorIndicadores[i].name);
      }
      arr.push(obj);
    }
  }
  return arr;
};

// EXPORTANDO FUNCION QUE NOS IMPRIME
window.capturarIndicadores = capturarIndicadores;

// 2DA FUNCION QUE CAPTURA  LOS AÑOS Y SUS VALORES
// ARRAY CON INDICATORCODE Y TODOS LOS AÑOS
var data2 = [];
// console.log(data2);
const capturarAnios = (dataValoresAnios) => {
  // console.log(dataValoresAnios);
  const arrayAnios = [];
  // console.log(arrayAnios);
  // console.log(dataValoresAnios)
  for (let i = 0; i < dataValoresAnios.length; i++) {

    if (i > 9 && i < 16) {
      const aniosTotal = dataValoresAnios[i].data;

      const objAnios = {
        data: dataValoresAnios[i].data,
        indicatorCode: dataValoresAnios[i].indicatorCode
      }
      arrayAnios.push(objAnios);
    }
  }
  // ESTAMOS SACANDO EL ARRAY DE LA FUNCION PARA PODER UTILIZARLO COMO ARGUMENTO 
  data2 = arrayAnios;
};

// ESTO SE EJECUTA SOLO UNA VEZ PARA LLENAR EL NUEVO ARREGLO DATA2
capturarAnios(todoPeruIndicadores);

const arrValor= [];
//LISTA DE AÑOS POR INDICADOR
const listaAnio = (data,indicatorCode) => {
  const arrAnio =[];
  // console.log(arrAnio);
  for (let i = 0; i < data.length; i++) {
    if(data[i].indicatorCode === indicatorCode){
      const keyArr = Object.keys(data[i].data);
      const valueArr = Object.values(data[i].data);
     
      for (let o = 0; o < keyArr.length; o++) {
        if(valueArr[o] != ""){
          arrAnio.push(keyArr[o]);
        }
      }
    
    }
  }

  return arrAnio;
}

//listaAnio(data2,"SL.TLF.ADVN.ZS");

// console.log(capturarAnios);
window.data2 = data2;
window.listaAnio=listaAnio;