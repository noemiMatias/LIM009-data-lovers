const todoPeruIndicadores = WORLDBANK['PER']['indicators'];

// ARRAY QUE CONTIENE ID Y NAME DE LOS INDICADORES QUE TENEMOS PUSHEADOS DE LA FUNCION DE CAPTURAR INDICE 

// 1RA FUNCION QUE CAPTURA LOS INDICADORES POR CODIGO Y NAME QUE QUIERO (FUERZA LABORAL 6 INDICADORES)
const capturarIndicadores = (data) => {
  // ARRAY DE INDICADORES
  let arr = [""];
  // console.log(arr);
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

//console.log(data2);
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
   return arrayAnios
  
   
};



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
};

// UNA FUNCION PARA OBTENER UN ARRAY QUE CONTIENE  6 OBJETOS CADA UNO CON TODOS LOS AÑOS Y RESPECTIVOS VALORES PORCENTUALES
const listaAnioValores=(data)=>{
  const arrAniosValues=[]; 
  // console.log(arrAniosValues);es una array con 6 objetos que contiene todos los años con y sin valores
for(let x = 0; x < data.length; x++){
// console.log(data[x]);
if(x > 9 && x < 16){
  const objAniosValores=data[x].data;
  // console.log(objAniosValores);
  arrAniosValues.push(objAniosValores);
}

}
return arrAniosValues
}

// FUNCION PARA OBTENER EL ARRAY QUE VAMOS A IMPRIMIR EN PANTALLA
/*const valorDeAnioSelect =(listaAniosValores,)=>{

}*/







window.capturarAnios=capturarAnios;
window.listaAnio=listaAnio;
window.listaAnioValores=listaAnioValores;


