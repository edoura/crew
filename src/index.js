var uniqueRandomArray = require('unique-random-array');
var crewNames = require('./names.json');

module.exports = {
	all: crewNames,
	random: uniqueRandomArray(crewNames)
};