var getArea = require("../shapesarea.js");
var index = require("../index.js");

describe("Cálculo de áreas", function() {
  it("must compute the triangle area correctly", function() {
    var result = index.calcula('Triangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    //result.should.match(/^5000$/);
    result.should.be.equal(5000)
  })

  it("must compute the Rectangle area correctly", function() {
    var result = index.calcula('Rectangle',  { width: 2, height: 4 });
    /* There is a white space between consecutive columns */
    console.log(result)
    result.should.be.equal(8)
    //result.should.match(/^100$/);
  })

  it("must compute the Square area correctly", function() {
    var result = index.calcula('Square',  { width: 3 });
    /* There is a white space between consecutive columns */
    //result.should.match(/^2$/);
    result.should.be.equal(9)
  })

});
