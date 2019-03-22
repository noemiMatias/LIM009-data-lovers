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
  };
  return arr;
}
window.example = example;