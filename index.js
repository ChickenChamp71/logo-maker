const inquirer = require('inquirer');
const maxLengthInquirer = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlength-input', maxLengthInquirer);

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
                name: 'color',
                message: 'Select a color. Can be a hex code or a simple color name.'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose between these shapes:',
                choices: ['Circle', 'Triangle', 'Square']
            }
        ])
        .then((answers) => {

            const data = answers;

            console.log(data);
        })
}

test();