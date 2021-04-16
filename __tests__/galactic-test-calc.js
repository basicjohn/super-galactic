import AgeCalculator from './../src/js/galactic-calc.js';


describe('AgeCalculator', () => {
  beforeEach(() => {
    const ageCalculator = new AgeCalculator;
  });

  test('Create the ageCalculator object using the AgeCalculator constructor', () => {

    expect(ageCalculator);
  });
});