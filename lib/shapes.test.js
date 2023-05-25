const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');
const logoGen = require('../index');

describe('Circle', () => {

    describe('Circle Color', () => {
        it('should return a string equal to "<circle cx="150" cy="100" r="100" fill="blue"/>"', () => {
            const circle = new Circle();

            circle.color = 'blue';
            
            expect(logoGen(circle)).toEqual('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1"><circle cx="150" cy="100" r="100" style="fill:blue"/><text x="150" y="125" text-anchor="middle" style="font-size:75px;font-weight:bold;fill:undefined">undefined</text></svg>');
        })
    })
});

describe('Triangle', () => {

    describe('Triangle Color', () => {
        it('should return a string equal to "<polygon points="25 200, 150 0, 275 200" style="fill:salmon"/>"', () => {
            const triangle = new Triangle();

            triangle.color = 'salmon';
            
            expect(logoGen(triangle)).toEqual('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1"><polygon points="25 200, 150 0, 275 200" style="fill:salmon"/><text x="150" y="150" text-anchor="middle" style="font-size:60px;font-weight:bold;fill:undefined">undefined</text></svg>');
        })
    })
});

describe('Square', () => {

    describe('Square Color', () => {
        it('should return a string equal to "<rect x="50" width="200" height="200" style="fill:purple"/>"', () => {
            const square = new Square();

            square.color = 'purple';
            
            expect(logoGen(square)).toEqual('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="50" width="200" height="200" style="fill:purple"/><text x="150" y="125" text-anchor="middle" style="font-size:75px;font-weight:bold;fill:undefined">undefined</text></svg>');
        })
    })
});