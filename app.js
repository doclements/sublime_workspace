var d3 = require('./d3-shim');
var $ = require('jquery-browserify');
var chart = require('./d3-chart-shim.js');
var barchart = require('./barchart.js');

var _ = require('underscore');



(function () { delete window.d3; })(); // unset global
//(function () { delete window.$; })(); // unset global
//
console.log(d3);
// a change so should rebuild!
console.log($);
console.log(d3.select('body'));
console.log('piffpaff');
//////
var barChart;
$(function() {


	var boo = {
		"key" : "valuye",
		"hmmm" : "blah"
	};

	console.log(_.keys(boo));

	//delete window.d3;
	console.log('form within doc ready');
	console.log($.fn.jquery);
	barChart = d3.select("#bar-chart").append('svg').attr('height', 250).attr('width', 600).chart('BarChart', {
		bar_color: "grey"
	});
	barChart.draw([{
		name: 'JAN',
		value: 29
	}, {
		name: 'FEB',
		value: 3
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


