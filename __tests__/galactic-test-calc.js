import {populate} from './../src/js/galactic-calc.js';

describe('AgeCalculator', () => {
  let ageCalculator;
  beforeEach(() => {
    ageCalculator = populate();
    return ageCalculator;
  });
  test('Create the ageCalculator object using the AgeCalculator constructor', () => {
    expect(ageCalculator);
  });
  test('Check averageEarthLifespan to make sure object is created', () => {
    expect(ageCalculator.averageEarthLifespan).toEqual(85);
  });
  test('Create the planet object using the Planet constructor & store in ageCalculator', () => {
    expect(ageCalculator.planets[0].name).toMatch("Mercury");
    expect(ageCalculator.planets[8].name).toMatch("Pluto");
  });
  test('Store users age in ageCalculator.age', () => {
    expect(ageCalculator.age).toEqual(32);
  });
  test('Store users age in ageCalculator.age', () => {
    expect(ageCalculator.age).toEqual(32);
  });
  test('Find input planets year length in days', () => {
    const uranus = ageCalculator.planets[6]
    expect(uranus.yearLengthInDays).toEqual(30687);
  });
  test('calculate users age on planet', () => {
    const uranus = ageCalculator.planets[6]
    const ageOnUranus = ageCalculator.calcAge(uranus, 32);
    expect(ageOnUranus).toEqual("0.38");
  });
  test('calculate average lifespan on each planet', () => {
    const uranusLifespan = ageCalculator.planets[6].averageLifespan
    expect(uranusLifespan).toEqual("1.01");
  });
  test('calculate difference between average age & input age.', () => {
    ageCalculator.calcYearsFromLifespan(ageCalculator)
    const earthDifference = ageCalculator.planets[2].yearsFromLifespan;
    expect(earthDifference).toEqual("-53.00");
  });
});