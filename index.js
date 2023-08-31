const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shape.js');
const { logoTextLength, logoColorValidator, writeToFile } = require('./lib/validators.js');

function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter up to three characters for logo text:',
            name: 'text',
            validate: logoTextLength
        },
        {
            type: 'input',
            message: 'Enter a color by name (using lowercase characters) for text color:',
            name: 'textColor',
            validate: logoColorValidator
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
            validate: logoColorValidator
        },
    ]).then((response) => {
        console.log(response);
        
        switch(response.shape) {
            case 'Triangle':
                const triangle = new Triangle(response.text, response.textColor, response.shape, response.shapeColor);
                const renderTriangle = triangle.renderSVG();
                writeToFile('./examples/logo.svg', renderTriangle);
                break;
            case 'Circle':
                const circle = new Circle(response.text, response.textColor, response.shape, response.shapeColor);
                const renderCircle = circle.renderSVG();
                writeToFile('./examples/logo.svg', renderCircle);
                break;
            case 'Square':
                const square = new Square(response.text, response.textColor, response.shape, response.shapeColor);
                const renderSquare = square.renderSVG();
                writeToFile('./examples/logo.svg', renderSquare);
                break;
        }
    })
}

init();