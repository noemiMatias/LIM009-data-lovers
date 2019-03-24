 /*console.log(WORLDBANK.PER.indicators[12].data);*/
 /*const example = () => {*/
  const imprimir= document.getElementById('container');
  const obj = {};

  const data=WORLDBANK.PER.indicators[12].data;

  const anios= Object.keys(data)
  //console.log(anios);
  for(let i=0; i<=anios.length-1 ;i++){
    if (anios[i]>=2002){
          obj[anios[i]]=data[anios[i]]

          /*imprimir.innerHTML = imprimir.innerHTML + `<p>${anios[i]} : ${data[anios[i]]}</p>`*/
          /*obj[anios[i]] = data[anios[i]]*/
      }
  };
  const filtrado = () => {
/*console.log(WORLDBANK.PER.indicators[12].data);*/
const example = () => {
const arr = [];
const data = WORLDBANK.PER.indicators[12].data;

const anios = Object.keys(data)
for (let i = 0; i <= anios.length - 1; i++) {
  if (anios[i] >= 2002) {
    const obj = {};
    obj.year = anios[i];
    obj.value = data[anios[i]];
    arr.push(obj)
  }
  console.log(filtrado);
};
return arr;
};
  /*console.log(obj)*/

  /*console.log(obj);*/
//window.example = example; 
  }
  /*SEGUNDO INDICE*/
  /*console.log(WORLDBANK.PER.indicators[10].data);*/

  const data10 = WORLDBANK.PER.indicators[10].data;
  const anios10 = obj.keys(data);
  for(let i=0; i<=anios10.length-1 ;i++){
    if (anios10[i]>=2002){
          obj[anios10[i]]=data[anio10[i]]
    };
  }