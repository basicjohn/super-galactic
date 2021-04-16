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

  calcTimeFromLifespan(ageCalculator){
    
  }
}