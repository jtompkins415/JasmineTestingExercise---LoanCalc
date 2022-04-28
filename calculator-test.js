
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:10000, years: 5, rate: 2.5})).toBe('177.47');
  expect(calculateMonthlyPayment({amount:5000, years: 10, rate: 6.5})).toBe('56.77');
});


it("should return a result with 2 decimal places", function() {
  
});

it('should return error message when entered falsly', function(){
  expect(calculateMonthlyPayment({amount: 'one hundred thousand', years: 5, rate: 2.5})).toBe('We Only Accept Numbers');
})