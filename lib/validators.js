const fs = require('fs');
const colorString = require('color-string');

const logoTextLength = (input) => {
    if (input.length > 3 || input.length < 1) {
        return 'Enter 1 to 3 characters for your logo text';
    }
    return true;
}

const logoColorValidator = (input) => {
    const useColorString = colorString.get(input);
    if (useColorString !== null) {
        return true;
    } else {
        return 'Please enter a valid color';
    }
}

function writeToFile(fileName, response) {
    fs.writeFile(fileName, response, (error) => {
        error ? console.error(error) : console.log('check the examples folder for logo.svg')
    });
}

module.exports = { logoTextLength, logoColorValidator, writeToFile }