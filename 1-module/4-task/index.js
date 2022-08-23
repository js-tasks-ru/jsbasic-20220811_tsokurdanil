function checkSpam(str){
  str = str.toUpperCase();
  if(~str.indexOf('1XbeT'.toUpperCase())){
    return true;
  }else if (~str.indexOf('XXX'.toUpperCase())){
    return true
  } else return false;

}

console.log( checkSpam('1XbeT now') )
console.log( checkSpam('free xxxxx') )
console.log( checkSpam('innocent rabbit') )
