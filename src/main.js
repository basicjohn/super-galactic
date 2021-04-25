import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {populate} from './js/galactic-calc.js';




$(document).ready(function(){
  $("button.btn").click(function(event) {
    event.preventDefault();
    let ageCalculator = populate();
    const ageInput = $("input#ageInput").val();
    ageCalculator.earthAge = parseInt(ageInput);


  });
});