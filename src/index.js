
exports.min = function min (array) {
  if((typeof array==='undefined')||(array.length==0)){
    return 0;
  }else{
    var t=array[0];
    for(let item of array){
      if(item<t){
        t=item;
      }
    }
    return t;
  }
}

exports.max = function max (array) {
  if((typeof array==='undefined')||(array.length == 0)){
    return 0;
  }else{
    var t=array[0];
    for(let item of array){
      if(item>t){
        t=item;
      }
    }
    return t;
  }
}

exports.avg = function avg (array) {
  if((typeof array==='undefined')||(array.length == 0)){
    return 0;
  }else{
    var sum=0;
    for(let item of array){
      sum+=item;
    }
    return sum/array.length;
  }
}
