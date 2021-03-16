module.exports = function countCats(matrix) {
  if (matrix === undefined){
    return undefined;
  }else if(matrix.length == 0){
        return 0;
    } else{
    matrix = matrix.reduce(function(a, b){
    return a.concat(b);
});
let count = 0;
for(let i =0; i< matrix.length; i++){
    if(matrix[i] == "^^"){
        count++;
    }
}return count;
}
};


