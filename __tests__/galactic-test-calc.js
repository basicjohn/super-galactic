import AgeCalculator from './../src/js/galactic-calc.js';


describe('AgeCalculator', () => {

  test('Create the ageCalculator object using the AgeCalculator constructor', () => {
    const ageCalculator = new AgeCalculator;
    expect(ageCalculator);
  });

  test('Check averageEarthAge to make sure object is created', () => {
    const ageCalculator = new AgeCalculator;
    expect(ageCalculator.averageEarthAge).toEqual(85);
  });

  // test('create planet and add it to AgeCalculator.planets', () => {
  //   const ageCalculator = new AgeCalculator;
  //   const planetName = "Europa";
  //   const planetYear =  1.89;
  //   ageCalculator.addPlanet("Mars", 1.88);
  //   expect(ageCalculator.planets[0].name).toEqual(planetName);
  //   expect(ageCalculator.planets[0].yearLength).toEqual(planetYear);

  // });
});