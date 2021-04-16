import $ from 'jquery';
import 'bootstrap';
import './css/styles.css';
import Planet from './js/planet.js';
import AgeCalculator from './js/galactic-calc.js';

export function populate() {
let mars = new Planet("Mars", 1.88);
let ageCalculator = new AgeCalculator;
ageCalculator.addPlanet(mars);
return ageCalculator;
}


$(document).ready(function() {


});