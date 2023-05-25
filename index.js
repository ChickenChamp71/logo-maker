const inquirer = require('inquirer');
const maxLengthInquirer = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const Shape = require('./lib/shapes');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

inquirer.registerPrompt('maxlength-input', maxLengthInquirer);

function writeToFile(data) {

    fs.writeFile('logo.svg', logoGen(data), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Generated logo.svg :D');
        }
    });
}

function logoGen(data) {

    if (data.shape !== undefined) {
        
        if (data.shape == 'Circle') {
            data = new Circle(data.color, data.text, data.textColor);
        } else if (data.shape == 'Triangle') {
            data = new Triangle(data.color, data.text, data.textColor);
        } else {
            data = new Square(data.color, data.text, data.textColor);
        }
    } else {

        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1"><${data.dimension} style="fill:${data.color}"/><${data.specialText}${data.textColor}">${data.text}</text></svg>`
    }
};

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
                name: 'color',
                message: 'Select a color for the shape. Can be a hex code or a simple color name.',
            },
        ])
        .then((answers) => {

            const data = answers;

            writeToFile(data);
    
        })
}

init();

module.exports = logoGen;