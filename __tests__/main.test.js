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


  // test('calculate users age on planet', () => {
  //   let ageCalculator = populate();
  //   const uranus = ageCalculator.planets[6]
  //   console.log(uranus);
  //   const uranusDays = uranus.yearLengthInDays;
  //   console.log(uranusDays);
  //   const ageOnUranus = ageCalculator.calcAge(ageCalculator.planets[6]);
  //   console.log(ageOnUranus);
  //   expect(ageOnUranus).toEqual(30688);
  // });


});