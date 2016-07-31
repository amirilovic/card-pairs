export default
  angular
    .module('rangeModule', [])
    .filter('range', () => {
      return (n) => {
        return n ? [...Array(n).keys()] : [];
      };
    });