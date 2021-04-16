import Planet from './../src/js/planet.js';
describe('Planet', () => {

  test('Create the planet object using the Planet constructor', () => {
    const planet = new Planet("Mars", 687);
    expect(planet);
  });
  test('Create the planet object using the Planet constructor', () => {
    const planet = new Planet("Mars", 687);
    expect(planet.name).toMatch("Mars");
  });
});