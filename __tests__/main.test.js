import {populate} from './../src/main.js';

describe('populate', () => {

  test('Create the planet object using the Planet constructor & store in ageCalculator', () => {
    const ageCalculator = populate();
    expect(ageCalculator.planets[0].name).toMatch("Mercury");
    expect(ageCalculator.planets[8].name).toMatch("Pluto");

  });

  test('Store users age in ageCalculator.age', () => {
    const ageCalculator = populate();
    expect(ageCalculator.age).toEqual(32);
  });

  test('Store users age in ageCalculator.age', () => {
    const ageCalculator = populate();
    expect(ageCalculator.age).toEqual(32);
  });

  test('calculate users age on planet', () => {
    const ageCalculator = populate();
    const uranusDays = ageCalculator.planets[6].yearLengthInDays;
    const ageOnUranus = ageCalculator.calcAge(uranusDays)
    expect(ageOnUranus).toEqual(30688);
  });

});