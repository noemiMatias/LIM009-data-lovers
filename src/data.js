<<<<<<< HEAD
console.log(WORLDBANK.PER.indicators[12].data.2002);
=======
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
            
            imprimir.innerHTML = imprimir.innerHTML + `<p>${anios[i]} : ${data[anios[i]]}</p>`
            /*obj[anios[i]] = data[anios[i]]*/
        }
    };
    const filtrado = () => {
>>>>>>> 8db4768e29ed9a4db193fe7bf3773c3ce98648f3

    }
    console.log(filtrado);

    /*console.log(obj)*/
  

    /*console.log(obj);*/
  //window.example = example;