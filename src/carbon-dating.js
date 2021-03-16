const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
   if(sampleActivity === undefined || typeof(sampleActivity) != "string" || isNaN(sampleActivity) === true){
    return false;
  }else {
    return Math.ceil((Math.log(MODERN_ACTIVITY/Number(sampleActivity)))/(0.693/HALF_LIFE_PERIOD));
  }

};
