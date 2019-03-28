/*console.log(WORLDBANK.PER.indicators[12].data);*/

const example = () => {
  const arr = [];
  const todaLaData = WORLDBANK.PER.indicators[12].data;
  
  
  const anios = Object.keys(todaLaData)
  for (let i = 0; i <= anios.length - 1; i++) {
    if (anios[i] >= 2002) {
      const obj = {};
      obj.year = anios[i];
      obj.value = todaLaData[anios[i]];
      arr.push(obj)
    }
    console.log(todaLaData);
  };

  return arr;
}
//nuevas funciones

const retornaValor = (data, indicatorCode, anio) => {
  for(let i=0;i<data.length;i++){
    
    if(data[i].indicatorCode===indicatorCode){
      return data[i].data[anio];
    }
  }
  
};

const obtenerIndicadores=(data)=>{
  for(let i=0;i<data.length;i++){
  (data[i].indicatorCode)

    
    //cajaDeIndicadores.push(listaDeIndicadores)
    
    };
  return ;
};

window.example = example;
window.retornaValor = retornaValor;
window.obtenerIndicadores=obtenerIndicadores;