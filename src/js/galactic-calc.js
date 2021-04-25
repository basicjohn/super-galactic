import Planet from './planet.js';


export default class AgeCalculator {
  constructor(){
    this.earthAge = 0;
    this.averageEarthLifespan = 85;
    this.yearLengthInDays = 365;
    this.planets = [];
  }
  addPlanet(planet) {
    this.planets.push(planet);
  }
  calcAge(planet, age) {
    const daysOnEarth =  this.yearLengthInDays * age;
    const planetYearInDays = planet.yearLengthInDays;
    let ageOnPlanet = (daysOnEarth / planetYearInDays).toFixed(2);
    return ageOnPlanet;
  }
  calcPlanetLifespan(ageCalculator) {
    ageCalculator.planets.forEach( function (planet) {
      const planetLifespan = ageCalculator.calcAge(planet, ageCalculator.averageEarthLifespan);
      planet.averageLifespan = planetLifespan;
    });
  }
  calcYearsFromLifespan(ageCalculator){
    ageCalculator.planets.forEach( function (planet) {
      const lifespanDifference = ageCalculator.age - ageCalculator.averageEarthLifespan;
      const yearsFromLifespan = ageCalculator.calcAge(planet, lifespanDifference);
      planet.yearsFromLifespan = yearsFromLifespan;
    });
  }
}


export function populate() {
  let age = 32;
  let mercury = new Planet("Mercury", 88);
  let venus = new Planet("Venus", 225);
  let earth = new Planet("Earth", 365);
  let mars = new Planet("Mars", 687);
  let jupiter = new Planet("Jupiter", 4333);
  let saturn = new Planet("Saturn", 10759);
  let uranus = new Planet("Uranus", 30687);
  let neptune = new Planet("Neptune", 60190);
  let pluto = new Planet("Pluto", 90520);
  let ageCalculator = new AgeCalculator;
  ageCalculator.age = age;
  ageCalculator.addPlanet(mercury);
  ageCalculator.addPlanet(venus);
  ageCalculator.addPlanet(earth);
  ageCalculator.addPlanet(mars);
  ageCalculator.addPlanet(jupiter);
  ageCalculator.addPlanet(saturn);
  ageCalculator.addPlanet(uranus);
  ageCalculator.addPlanet(neptune);
  ageCalculator.addPlanet(pluto);
  ageCalculator.calcPlanetLifespan(ageCalculator);
  return ageCalculator;
  }