const CustomError = require("../extensions/custom-error");


class VigenereCipheringMachine {
  constructor(boolean) {
    this.boolean = boolean;
  }

  encrypt(string, keyword) {
    if (!string || !keyword) {
      throw new Error;
    }
    string = string.toUpperCase();
    keyword = keyword.toUpperCase();

    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let stringArray = string.split("")
    let keywordArray = keyword.split("");

    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray.length > keywordArray.length) {
        keywordArray.push(keywordArray[i]);
      }
    };

    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === " ") {
        keywordArray.splice(i, 0, " ");
      }
    }

    stringArray = stringArray.map(el => (alphabet.indexOf(el) !== -1) ? alphabet.indexOf(el) : el);

    keywordArray = keywordArray.map((el) => alphabet.indexOf(el));


    let resArray = stringArray.map(function (i, j) {
      if (typeof i !== "number") return i;
      return ((i + keywordArray[j]) % 26);
    });


    resArray = resArray.map((el) => (typeof (el) !== "number") ? el : alphabet[el]);
    if (this.boolean === undefined || this.boolean === true) {
      return resArray.join("");
    } else {
      return resArray.reverse().join("");
    }
  }
  decrypt(string, keyword) {
    if (!string || !keyword) {
      throw new Error;
    }
    string = string.toUpperCase();
    keyword = keyword.toUpperCase();

    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let stringArray = string.split("")
    let keywordArray = keyword.split("");

    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray.length > keywordArray.length) {
        keywordArray.push(keywordArray[i]);
      }
    };

    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === " ") {
        keywordArray.splice(i, 0, " ");
      }
    }

    stringArray = stringArray.map(el => (alphabet.indexOf(el) !== -1) ? alphabet.indexOf(el) : el);

    keywordArray = keywordArray.map((el) => alphabet.indexOf(el));


    let resArray = stringArray.map(function (i, j) {
      if (typeof i !== "number") return i;
      return ((i - keywordArray[j]) >= 0 ? (i - keywordArray[j]) : (i - keywordArray[j]) + 26);
    });


    resArray = resArray.map((el) => (typeof (el) !== "number") ? el : alphabet[el]);
    if (this.boolean === undefined || this.boolean === true) {
      return resArray.join("");
    } else {
      return resArray.reverse().join("");
    }
  }
}

// let directMachine = new VigenereCipheringMachine();
// let reverseMachine = new VigenereCipheringMachine(false);

module.exports = VigenereCipheringMachine;


