var Triangle = require('./../js/triangle.js').triangleModule;
describe('Triangle', function() {

  it('should test whether a Triangle has three sides', function() {
    //Test content will go here
    var triangle = new Triangle(3,4,5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);

  });
  it('should correctly determine whether three lengths can be made into a triangle', function() {
  var notTriangle = new Triangle(3,9,22)
  expect(notTriangle.checkType()).toEqual("not a triangle");
});
});
