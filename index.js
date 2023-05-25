const inquirer = require('inquirer');
const maxLengthInquirer = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const shapes = require('./lib/shapes');

inquirer.registerPrompt('maxlength-input', maxLengthInquirer);

function writeToFile(data) {

    fs.writeFile('logo.svg', shapes(data), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Logo file successfully created! :D');
        }
    });
}

function test() {
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
                message: 'Select a color for the text. Can be a hex code or a simple color name.',
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

test();