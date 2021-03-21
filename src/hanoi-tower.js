module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let hanoiObject = new Object();
      hanoiObject.turns = Math.pow(2, disksNumber) - 1;
      hanoiObject.seconds= Math.floor(hanoiObject.turns*3600/turnsSpeed);
      return hanoiObject;
    };



