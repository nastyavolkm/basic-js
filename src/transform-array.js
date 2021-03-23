module.exports = function transform(array) {
 if(Array.isArray(array) === false) {
    throw new CustomError('Not implemented');
  }
  let transformedArray = array.slice();
  
for(let i =0; i< transformedArray.length; i++){
  
  if(transformedArray[i] === "--discard-next" && i!==transformedArray.length-1){
    transformedArray.splice(i+1, 1);
    
  }else if (transformedArray[i] === "--discard-prev" && i>0) {
    
    transformedArray.splice(i-1, 1);
    i-=1;
    }else if (transformedArray[i] === "--double-next" && i !==transformedArray.length-1) {
    
    transformedArray.splice(i+1, 0, transformedArray[i+1]);
      
  } else if (transformedArray[i] === "--double-prev" && i >0){
    transformedArray.splice(i-1, 0, transformedArray[i-1]);
  i+=1;    
  }
}

for(let i =0; i< transformedArray.length; i++){
  if(transformedArray[i] === "--discard-next" || transformedArray[i] === "--discard-prev" || transformedArray[i] === "--double-next" || transformedArray[i] === "--double-prev"){
 transformedArray.splice(i, 1);
 i=-1;
 }
}
 return transformedArray;
  
};

