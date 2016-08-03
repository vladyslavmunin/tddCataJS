var calc  = {
    add: function (str) {
      var defaultDelimeter=',';
       var VRegExp = /\/\/([\w\s;.])+\n/
       var VResult = VRegExp.test(str);
       if(VResult){
           var a = str.indexOf('\n');
           defaultDelimeter = str.substr(2,a-2);//2 is count of / 
           str = str.substr(a+1);
       }
      var dels = '[\n'+defaultDelimeter+']';
      var numbers = str.split(new RegExp(dels));
      var sum= numbers.reduce(function(memo,num) {
          return memo + +num;
      },0)
     return sum;
    }
}
module.exports=calc;
calc.add("//;\n1;2\n3");