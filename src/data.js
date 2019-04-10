
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

// 2DA funcion que me da los años y su indicador code
const capturarAnios = (dataValoresAnios) => {

  const arrayAnios = [];
  for (let i = 0; i < dataValoresAnios.length; i++) {

    if (i > 9 && i < 16) {
      

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

const filterData = (data, condicion) => { // data = capturarAnios(todoPeruIndicadores), condicion = 'SL.TLF.ADVN.FE.ZS'
let resultado = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].indicatorCode === condicion) {
            let llaves = Object.keys(data[i].data)
            for (let j=0; j < llaves.length; j++) {
                if(data[i].data[llaves[j]] !==""){ 
                resultado.push({anio: llaves[j], val: data[i].data[llaves[j]]});
                }
            }
        }  
    }
    return resultado;
}

//CREO Q FALTARIA AGREGARLE EL INDICADORCODE PARA IGUALARLO CON EL SELECT ¡VA EL ID DEL SELECT ?
const ordenadoAscDesc = (data, order) => { // data = filterData(capturarAnios(todoPeruIndicadores), condicion)
  const newdata = [...data];
  let arrData=[];
  if (order === "asc") {
  arrData = newdata.sort( (prev, next) => {
      return prev.val - next.val;

  });
  } else{
    
    arrData=newdata.sort((prev , next)=>{
      return next.val - prev.val;
    });
  }
  return arrData;

    }
  
const promedio = (arrValores, promselect) => {
  let promedio = 0;
  for (let i = 0; i < arrValores.length; i++) {
    if (arrValores[i].indicatorCode === promselect) {

      //  console.log(sumTotal);
      let sum = 0;
      let totalValores = 0;
      //for (let j = 0; j < arrValores[i].length; j++) {
      let anios = arrValores[i].data;
      let valores = Object.values(anios);

      // console.log(valores.length)
      for (let j = 0; j < valores.length; j++) {

        const element = valores[j];
        if (element != "") {
          sum += element
          totalValores = totalValores + 1
        }

      }

      promedio = sum / totalValores;
    }


  }


  return promedio;
};


window.worldbank = {
  capturarAnios,
  capturarIndicadores,
  filterData,
  ordenadoAscDesc,
  promedio
}