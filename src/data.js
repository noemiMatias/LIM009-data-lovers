// Funcion que retorna un array con 6 objetos:fuerza laboral
const todoPeruIndicadores = (data) =>{
  const dataPeru = [];
  for(let i = 10; i <=15 ; i++){
    let data1 =data[i]
    dataPeru.push(data1);
  }

return dataPeru
  
}


// funcion que retorna los  6 indicadores con propiedades id:años, name: indicatorName
// Lo vamos a utilizar para el select de nuestro usuario
const capturarIndicadores = (data) => {
  const arr = [];
  for (let i = 0; i <data.length ; i++) {
      let obj = {
        id: data[i].indicatorCode,
        name: data[i].indicatorName
      };
      arr.push(obj);
  }
  return arr;
};


// funcion que retorna un array con  años y su indicador code
const capturarAnios = (dataValoresAnios) => {
  const arrayAnios = [];
  for (let i = 0; i < dataValoresAnios.length; i++) {
      const objAnios = {
        data: dataValoresAnios[i].data,
        indicatorCode: dataValoresAnios[i].indicatorCode
      };
      arrayAnios.push(objAnios);
    }
  return arrayAnios;
};

// funcion que retorna un array los años y valores de cada indicador que son seleccionados en el delect
const filterData = (data, condicion) => { // data = capturarAnios(todoPeruIndicadores), condicion = 'SL.TLF.ADVN.FE.ZS'
  let resultado = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].indicatorCode === condicion) {
      let llaves = Object.keys(data[i].data);
      for (let j = 0; j < llaves.length; j++) {
        if (data[i].data[llaves[j]] !== '') { 
          resultado.push({anio: llaves[j], val: data[i].data[llaves[j]]});
        }
      }
    }  
  }
   return resultado;

  };

// funcion que retorna años y valores ordenados en forma ascendente y descendente
const ordenadoAscDesc = (data, order) => { 
  const newdata = [...data];
  let arrData = [];
  if (order === 'asc') {
    arrData = newdata.sort((prev, next) => {
      return prev.val - next.val;
    });
  } else {
    arrData = newdata.sort((prev, next) => {
      return next.val - prev.val;
    });
  }
   return arrData;
 
};


// funcion que retorna un numéro : promedio de cada indicador
const promedio = (arrValores, promselect) => {
  let promedio = 0;
  for (let i = 0; i < arrValores.length; i++) {
    if (arrValores[i].indicatorCode === promselect) {
      let sum = 0;
      let totalValores = 0;
      let anios = arrValores[i].data;
      let valores = Object.values(anios);
      for (let j = 0; j < valores.length; j++) {
        const element = valores[j];
        if (element !== '') {
          sum += element;
          totalValores = totalValores + 1;
        }
      }

      promedio = sum / totalValores;
    }
  }


  return promedio;
};

window.worldbank = {
  capturarIndicadores: capturarIndicadores,
  capturarAnios: capturarAnios,
  filterData: filterData,
  ordenadoAscDesc: ordenadoAscDesc,
  promedio: promedio,
  todoPeruIndicadores: todoPeruIndicadores

};