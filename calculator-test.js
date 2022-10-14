
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment([1000, 5, .02])).toEqual(17)//...
  expect(calculateMonthlyPayment([100000, 5, .03])).toEqual(1716.66)
});


it("should return a result with 2 decimal places", function() {
 
});

/// etc
