

export default class AgeCalculator {
  constructor(){
    this.earthAge = 0;
    this.averageEarthAge = 85;
    this.planets = [];
  }

  addPlanet(planet) {
    this.planets.push(planet)
  }
}