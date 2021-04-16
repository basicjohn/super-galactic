import {populate} from './../src/main.js';

describe('populate', () => {

  test('Create the planet object using the Planet constructor', () => {
    populate();
    expect(mars.name).toMatch("Mars");
  });

});