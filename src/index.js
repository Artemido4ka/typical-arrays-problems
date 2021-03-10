
exports.min = function min(array) {
  if(!array || array.length === 0){
    return 0;
  }
    let minimal = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < minimal) {
        minimal = array[i];
      }
    }
  return minimal;
}

exports.max = function max(array) {
  if(!array || array.length === 0){
    return 0;
  }
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

exports.avg = function avg(array) {
  if(!array || array.length === 0){
    return 0;
  }
  let summ = 0;
  let result = 0;
  for(let i=0;i<array.length;i++){
    summ += array[i];
  }
  result = summ/array.length;
  return result;
}
