const Shape = require('./shapes');

class Circle extends Shape {
    constructor (color, text, textColor) {
        super(color, text, textColor)
        this.dimension = 'circle cx="150" cy="100" r="100"';
        this.specialText = 'text x="150" y="125" text-anchor="middle" style="font-size:75px;font-weight:bold;fill:';
    }
};

module.exports = Circle;