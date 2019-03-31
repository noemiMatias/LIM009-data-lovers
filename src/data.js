const todoPeruIndicadores = WORLDBANK['PER']['indicators'];

// ARRAY QUE CONTIENE ID Y NAME DE LOS INDICADORES que queremos PUSHEAdos de LA FUNCION DE ABAJO 


// 1RO FUNCION QUE CAPTURE LOS INDICADORES POR CODIGO Y NAME QUE QUIERO (FUERZA LABORAL 6)
const capturarIndicadores = (data) => {
  let arr= [""];
  //  console.log(arr);
  for( let i=0; i<data.length; i++){
      if (i>9 && i<16){  
    let obj ={
    id:data[i].indicatorCode,
   name:data[i].indicatorName
      // console.log(valorIndicadores[i].id);
    // console.log(valorIndicadores[i].name);
  }
  arr.push(obj);
  
}
} 
  
  return arr;
  
  };
// FUNCION PARA OBTENER LOS AÑOS Y SUS VALORES

 
 


         
   
    // EXPORTANDO FUNCION QUE NOS IMPRIME
  window.capturarIndicadores= capturarIndicadores;

