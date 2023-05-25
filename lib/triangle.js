const Shape = require('./shapes');

class Triangle extends Shape {
    constructor (color, text, textColor) {
        super(color, text, textColor);
        this.dimension = 'polygon points="25 200, 150 0, 275 200"';
        this.specialText = 'text x="150" y="150" text-anchor="middle" style="font-size:60px;font-weight:bold;fill:';
    }
};

module.exports = Triangle;