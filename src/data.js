const todoPeruIndicadores = WORLDBANK['PER']['indicators'];

// 1RA FUNCION QUE CAPTURA LOS INDICADORES POR CODIGO Y NAME QUE QUIERO (FUERZA LABORAL 6 INDICADORES)
// Lo vamos a utilizar para el select de nuestro usuario
const capturarIndicadores = (data) => {
  const arr = [];
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

  // console.log(dataValoresAnios);
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





const listaAniosValores = (data, order) => {
  for (let i = 0; i < data.length; i++) {
    let dataObj = data[i].data;
    let keyArr = Object.keys(dataObj);
    let valArr = Object.values(dataObj);
    arrAniosOrden1 = []
    console.log(arrAniosOrden1);
    for (let x = 0; x < keyArr.length; x++) {
      arrAniosOrden1.push({
        anio: keyArr[x],
        val: valArr[x]

      });

    }
    arrAniosOrden1.push({ indicatorCode: data[i].indicatorCode });
    arrData = arrAniosOrden1.sort( (a, b) => {
      if (a.val > b.val) {
        return 1;
      }
      if (a.val < b.val) {
        return -1;
      }
      return 0;
    });
    
  };
  
  return arrAniosOrden1;
  
}

window.listaAniosValores = listaAniosValores;

const ordenadoAscDesc = (data,ordenAscDesc) =>{


}