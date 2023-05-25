class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
};
// const square = new Shape(
//     ,
//     'style="fill:' + data.shapeColor + '"',
//      + data.textColor + '">' + data.text,
// );

function shapes(data) {

    var shapeDimension = '';
   
    if (data.shape == 'Circle') {
        shapeDimension = circle;
    } else if (data.shape == 'Triangle') {
        shapeDimension = triangle;
    } else {
        shapeDimension = square;
    };

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <${shapeDimension.dimension} ${shapeDimension.color}/>
    <${shapeDimension.text}</text>
</svg>`;
};

module.exports = Shape;