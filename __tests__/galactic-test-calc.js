import AgeCalculator from './../src/js/galactic-calc.js';


describe('AgeCalculator', () => {

  test('Create the ageCalculator object using the AgeCalculator constructor', () => {
    const ageCalculator = new AgeCalculator;
    expect(ageCalculator);
  });

  test('Check averageEarthAge to make sure object is created', () => {
    const ageCalculator = new AgeCalculator;
    expect(ageCalculator.averageEarthAgeYears).toEqual(85);
  });



});