export default class AgeCalculator {
  constructor(){
    this.earthAge = 0;
    this.averageEarthAgeYears = 85;
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
}