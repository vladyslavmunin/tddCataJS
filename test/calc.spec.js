var should = require("should");
var calc = require("../source/calc");

describe('My awesome test', function () {
    it( "should return zero if string is empty",function () {
      should.equal(calc.add(""), 0);
    });
    it( "should return number if one number in the string",function () {
      should.equal(calc.add("1"),1);
    });
       it( "should return sum if two number in the string",function () {
      should.equal(calc.add("1,2"),3);
    });
         it( "should return sum if multiply numbers in the string",function () {
      should.equal(calc.add("1,2,3"),6);
    });
      it( "should return sum if multiply numbers in the string",function () {
      should.equal(calc.add("1,2\n3"),6);
    });
    it( "should return sum if multiply numbers in the string with custom delimeter",function () {
      should.equal(calc.add('//;\n1;2\n3'),6);
    });
});