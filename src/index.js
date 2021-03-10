module.exports = function reverse (n) {
    var _n= Math.abs(n);
  var str = String(_n);
  var arr = str.split('');
 var k = Number(arr.reverse().join(''));
  return k;

}
