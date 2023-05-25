const inquirer = require('inquirer');
const maxLengthInquirer = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const Shape = require('./lib/shapes');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

inquirer.registerPrompt('maxlength-input', maxLengthInquirer);

function writeToFile(data) {

    fs.writeFile('logo.svg', shapes(data), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Generated logo.svg :D');
        }
    });
}

function init() {
    inquirer
        .prompt([
            {
                type: 'maxlength-input',
                name: 'text',
                message: 'Choose three characters. (Maximum of three.)',
                maxLength: 3
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Select a color for the text. Can be a hex code with a "#", or a simple color name.',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose between these shapes:',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Select a color for the shape. Can be a hex code or a simple color name.',
            },
        ])
        .then((answers) => {

            const data = answers;


            console.log(data);
            writeToFile(data);
    
        })
}

init();