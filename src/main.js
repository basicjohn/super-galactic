import $ from 'jquery';
import 'bootstrap';
import './css/styles.css';
import Planet from './js/planet.js';
import AgeCalculator from './js/galactic-calc.js';

export function populate() {
let mercury = new Planet("Mercury", 1.88);
let venus = new Planet("Venus", 1.88);
let earth = new Planet("Earth", 1);
let mars = new Planet("Mars", 1.88);
let jupiter = new Planet("Jupiter", 1.88);
let saturn = new Planet("Saturn", 1.88);
let uranus = new Planet("Uranus", 1.88);
let neptune = new Planet("Neptune", 1.88);
let pluto = new Planet("Pluto", 1.88);

let ageCalculator = new AgeCalculator;
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