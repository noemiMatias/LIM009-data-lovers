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
  };
  return arr;
 }
 window.example = example;
 
 
 
 console.log(WORLDBANK.PER.indicators[14].data);
 
 
 
 
 /*console.log(WORLDBANK.PER.indicators[12].data);*/
 /*const example = () => {*/
  /*const imprimir= document.getElementById('container');
  const obj = {};

  const data=WORLDBANK.PER.indicators[12].data;

  const anios= Object.keys(data)
  //console.log(anios);
  for(let i=0; i<=anios.length-1 ;i++){
    if (anios[i]>=2002){
          obj[anios[i]]=data[anios[i]]

          imprimir.innerHTML = imprimir.innerHTML + `<p>${anios[i]} : ${data[anios[i]]}</p>`
          /*obj[anios[i]] = data[anios[i]]
      }
  };*/
  //console.log(obj);
  //const filtrado = () => {
/*console.log(WORLDBANK.PER.indicators[12].data);
const exam = () => {
const arr12 = [];
const data = WORLDBANK.PER.indicators[12].data;
const anios = Object.keys(data)
for (let i = 0; i <= anios.length - 1; i++) {
  if (anios[i] >= 2002) {
    const obj = {};
    obj.year = anios[i];
    obj.value = data[anios[i]];
    arr12.push(obj);
  }
//console.log(arr12[0].anios)
  //console.log(filtrado);
//window.example = example; 
};
/*console.log(arr12[0]); sale solo el año 2002:valor
//console.log(arr12);
return arr12;

window.example = example;
}*/