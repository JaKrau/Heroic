const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shape.js')


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
                const triangle = new Triangle(response.text, response.textColor, response.shape, response.shapeColor);
            case 'Circle':
                const circle = new Circle(response.text, response.textColor, response.shape, response.shapeColor);
            case 'Square':
                const square = new Square(response.text, response.textColor, response.shape, response.shapeColor);
        }
    })
}

init();