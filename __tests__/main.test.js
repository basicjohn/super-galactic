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

  test('Find input planets year length in days', () => {
    let ageCalculator = populate();
    const uranus = ageCalculator.planets[6]
    expect(uranus.yearLengthInDays).toEqual(30687);
  });

  test('calculate users age on planet', () => {
    let ageCalculator = populate();
    const uranus = ageCalculator.planets[6]
    const ageOnUranus = ageCalculator.calcAge(uranus, 32);
    expect(ageOnUranus).toEqual("0.38");
  });

  test('calculate average lifespan on each planet', () => {
    let ageCalculator = populate();
    const uranusLifespan = ageCalculator.planets[6].averageLifespan
    expect(uranusLifespan).toEqual("1.01");
  });

  test('calculate difference between average age & input age.', () => {
    let ageCalculator = populate();
    const uranusLifespan = ageCalculator.planets[6].averageLifespan
    const lifespanDifference = ageCalculator.calcTimeFromLifespan()
    const earthDifference = ageCalculator.planets[2].timeFromLifespan;
    expect(lifespanDifference).toEqual(53);
  });
});

