import $ from 'jquery';
import 'bootstrap';
import './css/styles.css';
import Planet from './js/planet.js';
import AgeCalculator from './js/galactic-calc.js';




document.ready(function(){

  populate();
  $("button").click(function(event) {
    event.preventDefault();
    const ageInput = $("input#ageInput").val();
  });
});