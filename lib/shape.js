class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    newShape() {
        return `<polygon points="0 200 150 0 300 200" fill="${this.shapeColor}" />`;
    }

    newText() {
        return `<text x="150" y="120" font-size="4em" font-weight="bold" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

    renderSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.newShape()}${this.newText()}</svg>`
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    newShape() {
            return `<polygon points="0 200 150 0 300 200" fill="${this.shapeColor}" />`;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    newShape() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    newShape() {
            return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}" />`;
    }
}

module.exports = { Shape, Triangle, Circle, Square };