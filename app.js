var d3 = require('./d3-shim');
var $ = require('jquery-browserify');
var chart = require('./d3-chart-shim.js');
var barchart = require('./barchart.js');
(function () { delete window.d3; })(); // unset global
//

// a change so should rebuild!
console.log($('<div>'));
console.log(d3.select('body'));
console.log('nanother n');


$(function() {
	delete window.d3;
	console.log('form within doc ready');
	var barChart = d3.select("#bar-chart").append('svg').attr('height', 250).attr('width', 600).chart('BarChart', {
		bar_color: "grey"
	});
	barChart.draw([{
		name: 'JAN',
		value: 29
	}, {
		name: 'FEB',
		value: 32
	}, {
		name: 'MAR',
		value: 48
	}, {
		name: 'APR',
		value: 49
	}, {
		name: 'MAY',
		value: 58
	}, {
		name: 'JUN',
		value: 68
	}, {
		name: 'JUL',
		value: 74
	}, {
		name: 'AUG',
		value: 73
	}, {
		name: 'SEP',
		value: 65
	}, {
		name: 'OCT',
		value: 4
	}, {
		name: 'NOV',
		value: 45
	}, {
		name: 'DEC',
		value: 35
	}]);


});

// //
// a change