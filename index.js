const inquirer = require('inquirer');

function test() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'test',
                message: 'Testing testing?',
            }
        ])
}

test();