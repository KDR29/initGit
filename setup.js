var inquirer = require('inquirer');

inquirer.prompt({

	type: 'list', // list options
	name: 'nameID',
	message: 'what is your name',
	choices: ['Andreas', 'Chaz', 'Kirk'] //options



}).then(function(answer) {

	if (answer.nameID.toUpperCase() === 'CHAZ') {
		console.log("get outta here");
	} else {
		console.log("Welcome " + answer.nameID);
	}

});

// import 'fs' read about the fs (file system);
// create new .txt files based on tasks
// learn to append to exisiting task.txt files