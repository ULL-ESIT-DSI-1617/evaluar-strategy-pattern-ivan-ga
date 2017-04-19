var getArea = require("../shapesarea.js");
var index = require("../index.js");

describe("area triangle", function() {
  it("must compute the triangle area correctly", function() {
    var result = index.calcula('Triangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.match(/^5000$/);
  })
});

describe("area rectangle", function() {
  it("must compute the Rectangle area correctly", function() {
    var result = index.calcula('Triangle',  { width: 10 });
    /* There is a white space between consecutive columns */
    result.should.match(/^100$/);
  })
});

describe("area square", function() {
  it("must compute the Square area correctly", function() {
    var result = index.calcula('Triangle',  { width: 10, height: 2 });
    /* There is a white space between consecutive columns */
    result.should.match(/^20$/);
  })
});
