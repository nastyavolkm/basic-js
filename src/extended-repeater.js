module.exports = function repeater(str, options){
  if(typeof(str) === "object") {
    str = ""+ str;
  }
  if(typeof(options.addition) === "object") {
    options.addition = ""+ options.addition;
  }
  if(str === null){
    str = "null";
  }
  if(options.addition === null){
    options.addition = "null";
  }
  const objWithSpecificCoercion = {
    [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
  }
  if(options.separator === undefined){
    options.separator = "+";
  }  
  if(options.additionSeparator === undefined){
    options.additionSeparator = "|";
  }
  if(options.addition === undefined){
    options.addition = "";
  }
  if(options.addition !== undefined && options.additionRepeatTimes === undefined){
    options.additionRepeatTimes = 1;
  }
  
  let repetearArray = [];
      let repetearArray2 = [];
      
      if(options.additionRepeatTimes !== undefined && options.additionRepeatTimes >0){
      
      for(let i =1; i<= options.additionRepeatTimes; i++){
      repetearArray.push(options.addition.toString());
      }
      repetearArray[0]=str.toString()+repetearArray[0];
     
      str = repetearArray.join(options.additionSeparator);
      
      }
  if(options.repeatTimes !== undefined && options.repeatTimes >0){ 
  
  for(let i =1; i<=options.repeatTimes; i++){
  repetearArray2.push(str);
  }
  
  str = repetearArray2.join(options.separator);
  
  }
  return str;
  }
