const { Shape, Triangle, Circle, Square } = require('./shape');

// Shape test, verifying we've generated a new instance of the Shape class
describe ('Shape', () => {
    describe('Instantiate', () => {
        it('should create an instance of the Shape class', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape);
        });
        describe('Text', () => {
            it('should return text response', () => {
                const shape = new Shape('TST', 'white', 'Triangle', 'black');
                expect(shape.newText()).toBe('<text x="150" y="120" font-size="4em" font-weight="bold" text-anchor="middle" fill="white">TST</text>');
            });
        });
        describe('renderSVG', () => {
            it('should render an SVG', () => {
                const shape = new Shape('TST', 'white', 'Triangle', 'black');
                expect(shape.renderSVG()).toBe('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="0 200 150 0 300 200" fill="black" /><text x="150" y="120" font-size="4em" font-weight="bold" text-anchor="middle" fill="white">TST</text></svg>');
            });
        });
    });

    // Triangle tests, ensuring class and shape are set correctly
    describe('Triangle', () => {
        describe('Create Triangle', () => {
            it('should be an instance of the Triangle class', () => {
                const triangle = new Triangle('TST', 'white', 'Triangle', 'black');
                expect(triangle).toBeInstanceOf(Triangle);
            });
        });
        describe('it is a triangle', () => {
            it('should be a triangle', () => {
                const triangle = new Triangle('TST', 'white', 'Triangle', 'black');
                expect(triangle.newShape()).toBe('<polygon points="0 200 150 0 300 200" fill="black" />');
            });
        });
    });

    // Circle tests, ensuring class and shape are set correctly
    describe('Circle', () => {
        describe('Create Circle', () => {
            it('should be an instance of the Circle class', () => {
                const circle = new Circle('TST', 'white', 'Circle', 'black');
                expect(circle).toBeInstanceOf(Circle);
            });
        });
        describe('it is a circle', () => {
            it('should be a circle', () => {
                const circle = new Circle('TST', 'white', 'Circle', 'black');
                expect(circle.newShape()).toBe('<circle cx="150" cy="100" r="100" fill="black" />');
            });
        });
    });

        // Square tests, ensuring class and shape are set correctly
        describe('Square', () => {
            describe('Create Square', () => {
                it('should be an instance of the Square class', () => {
                    const square = new Square('TST', 'white', 'Square', 'black');
                    expect(square).toBeInstanceOf(Square);
                });
            });
            describe('it is a square', () => {
                it('should be a square', () => {
                    const square = new Square('TST', 'white', 'Square', 'black');
                    expect(square.newShape()).toBe('<rect x="50" y="0" width="200" height="200" fill="black" />');
                });
            });
        });
});