const Shape = require('./shapes');

class Square extends Shape {
    constructor (color, text, textColor) {
        super(color, text, textColor)
        dimension = 'rect x="50" width="200" height="200"';
        specialText = 'text x="150" y="125" text-anchor="middle" style="font-size:75px;font-weight:bold;fill:';
    }
};

module.exports = Square;