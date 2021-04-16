import $ from 'jquery';
import 'bootstrap';
import './css/styles.css';
import Planet from './js/planet.js';
import AgeCalculator from './js/galactic-calc.js';

export function populate() {
const age = 32;
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

return ageCalculator;
}


$(document).ready(function() {


});