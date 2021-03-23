const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
    
  },
  addLink(value) {
    
    if(value === undefined){
      this.result.push(" ");
    }else if(value === null) {
      this.result.push("null");
    } else {
      this.result.push(value);
    }
    return this;
  },
  removeLink(position) {
     if (typeof position !== "number" || (position ^ 0) !== position || position > this.getLength() || position <= 0) {
      this.result = [];
      throw new Error();
    } else {
      this.result.splice(position-1,1);
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let result = this.result;
    this.result = [];
    return `( ${result.join(' )~~( ')} )`;
        
  }
};
module.exports = chainMaker;

