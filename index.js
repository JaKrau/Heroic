const inquirer = require('inquirer');


function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter three characters for logo text:',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Enter a color, by keyword or hexadecimal code, for text color:',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Select a shape for your logo:',
            name: 'shape',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            message: 'Enter a color, by keyword or hexadecimal code, for shape color:',
            name: 'shapeColor',
        },
    ]).then((response) => {
        console.log(response);
        
        switch(response.shape) {
            case 'Triangle':
            case 'Circle':
            case 'Square':
        }
    })
}

init();