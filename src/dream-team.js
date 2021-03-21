module.exports = function createDreamTeam(array) {
if(array == undefined || Array.isArray(array) == false || array.length == 0) return false;  
 
  for(let i =0; i<array.length; i++){
    if(typeof(array[i]) !== "string"){
      array.splice(i, 1);
      i = -1;
    }
  }
  
if(array.length === 0){
return false;
}
let dreamTeam = [];
array.forEach((el) => {
  if(typeof(el) =="string"){
    el = el.replace(/\s+/g, "");
    dreamTeam.push(el[0].toUpperCase());
  }
});
return dreamTeam.sort().join("");
};


// function createDreamTeam(array) {
//   if(array == undefined || Array.isArray(array) == false || array.length === 0) return false;  
  
//   for(let i =0; i<array.length; i++){
//     if(typeof(array[i]) !== "string"){
//       array.splice(i, 1);
//       i = -1;
//     }
//   }

// if(array.length === 0){
// console.log(false);
// }
// let dreamTeam = [];
// array.forEach((el) => {
//   if(typeof(el) =="string"){
//     el = el.replace(/\s+/g, "");
//     dreamTeam.push(el[0].toUpperCase());
//   }
// });
// console.log(dreamTeam.sort().join(""));

// }

// createDreamTeam([
//   'Amelia',
//   null,
//   undefined,
//   'Ruby',
//   'Lily',
//   11,
//   'Grace',
//   22,
//   'Millie',
//   'Daisy',
//   true,
//   'Freya',
//   false,
//   'Erin',
//   new Set([1,2,3,4,5]),
//   'Megan',
//   {
//     'John': 'Smith'
//   },
//   'Jasmine',
//   1,
//   2,
//   3,
//   4,
//   5,
//   'Brooke',
// ]);