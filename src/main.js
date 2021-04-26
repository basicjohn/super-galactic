import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {populate} from './js/galactic-calc.js';

$(document).ready(function(){
  $("button.btn").click(function(event) {
    event.preventDefault();
    $("#output ul").empty();
    let ageCalculator = populate();
    const ageInput = $("input#ageInput").val();
    ageCalculator.earthAge = parseInt(ageInput);
    ageCalculator.calcPlanetLifespan(ageCalculator);
    ageCalculator.calcYearsFromLifespan(ageCalculator);
    ageCalculator.planets.forEach(function(planet) {
      let planetName = planet.name;
      let planetLifespanDifference = planet.yearsFromLifespan;
      let planetAge = ageCalculator.calcAge(planet, ageInput);
      $("#output ul").append(`<li>On <span class="planet-output">${planetName}</span> you are <span class="age-output">${planetAge}</span> <span class="planet-output">${planetName}</span> years old. Based off the average human life expectancy you have aprox. <span class="expectancy-output">${planetLifespanDifference}</span> years left to live on <span class="planet-output">${planetName}</span>.</li>`);
    });
  });
});