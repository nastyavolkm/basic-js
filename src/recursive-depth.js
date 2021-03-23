module.exports = class DepthCalculator {
  calculateDepth(array) {
   return Array.isArray(array) ? 1 + array.reduce((a, b) =>
      Math.max(a, this.calculateDepth(b)), 0) : 0;
   }
}
