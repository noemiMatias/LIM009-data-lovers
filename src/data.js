const todoPeruIndicadores = WORLDBANK['PER']['indicators'];

// 1RA FUNCION QUE CAPTURA LOS INDICADORES POR CODIGO Y NAME QUE QUIERO (FUERZA LABORAL 6 INDICADORES)
// Lo vamos a utilizar para el select de nuestro usuario
const capturarIndicadores = (data) => {
  const arr = [];
  // console.log(arr);
  for (let i = 0; i < data.length; i++) {
    //Solo queremos trabajar con esos temas por que nuestro usuario lo pide así
    if (i > 9 && i < 16) {
      let obj = {
        id: data[i].indicatorCode,
        name: data[i].indicatorName
      }
      arr.push(obj);
    }
  }
  return arr;
};

window.capturarIndicadores = capturarIndicadores;


// 2DA funcion que me da los años y su indicador code
const capturarAnios = (dataValoresAnios) => {

  const arrayAnios = [];
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
  // console.log(arrayAnios);
  return arrayAnios

};

window.capturarAnios = capturarAnios;





const ordenadoAscDesc = (data, order) => {
// ]if(order=="asc"){
 arrAniosOrden2 = [];
//  console.log(arrAniosOrden2)
  for (let i = 0; i < data.length; i++) {
    let dataObj = data[i].data;
    let keyArr = Object.keys(dataObj);
    let valArr = Object.values(dataObj);
    arrAniosOrden1 = [];
    arrAniosOrden1 = arrAniosOrden2
    for (let x = 0; x < keyArr.length; x++) {
      arrAniosOrden1.push({
        anio: keyArr[x],
        val: valArr[x]

      });

    }
    arrAniosOrden1.push({ indicatorCode: data[i].indicatorCode });
    if(arrData = arrAniosOrden1.sort( (prev, next) => {
      return prev.val - next.val
    }));
   
    
  };
  
  return arrAniosOrden1;

  
}

window.ordenadoAscDesc = ordenadoAscDesc;


const promedio = (arrValores) => {
  
   let promedio=0;
  //  console.log(sumTotal);
    for (let i = 0; i < arrValores.length; i++) {
let anios = arrValores[i].data;
let valores= Object.values(anios);
// console.log(valores.length)
let sum = valores.reduce((previous, current) => current += previous);
// console.log(sum);
let promedio = sum / valores.length;
// avg = 28
// console.log(promedio);

    }
    return promedio
  };
 
  
window.promedio=promedio;