var sh = require('./shapesarea.js');



////////////////////////////////////////////////////////////////////////////



  "use strict"



   function calcula(shape, options) {

      var figura = new sh.Shape.tipo[shape](options)

      var result = figura.getArea();

      return result;

  }


///////////////////////////////////////////////////////////////////

try {
  var t = calcula('Triangle',  { width: 100, height: 100 });
  console.log(t);
  var s = calcula('Square',    { width: 100 });
  console.log(s);
  var r = calcula('Rectangle', { width: 100, height: 100 });
  console.log(r);
  var b = calcula('Bogus'); //este dará error porque no hay clase Bogus
}
catch (e) {
  console.log(e);
}
