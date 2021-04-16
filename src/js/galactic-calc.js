

export default class AgeCalculator {
  constructor(){
    this.earthAge = 0;
    this.averageEarthAgeYears = 85;
    this.yearLengthInDays = 365;
    this.planets = [];
  }

  addPlanet(planet) {
    this.planets.push(planet)
  }

  calcAge(planet) {
    const daysOnEarth =  this.yearLengthInDays * this.earthAge;
    const ageOnPlanet = daysOnEarth / planet.yearLengthInDays;
    return ageOnPlanet;
  }
}