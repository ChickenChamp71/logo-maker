





function shapes(data) {
    
    class Shape {
        constructor(dimension, color, text) {
            this.dimension = dimension;
            this.color = color;
            this.text = text;
        }
    };
    
    const circle = new Shape(
        'circle cx="150" cy="100" r="100"',
        'style="fill:' + data.shapeColor + '"',
        'text x="150" y="125" text-anchor="middle" style="font-size:75px;font-weight:bold;fill:' + data.textColor + '">' + data.text,
    );

    const triangle = new Shape(
        'polygon points="25 200, 150 0, 275 200"',
        'style="fill:' + data.shapeColor + '"',
        'text x="150" y="150" text-anchor="middle" style="font-size:70px;font-weight:bold;fill:' + data.textColor + '">' + data.text,
    );

    const square = new Shape(
        'rect x="50" width="200" height="200"',
        'style="fill:' + data.shapeColor + '"',
        'text x="150" y="125" text-anchor="middle" style="font-size:75px;font-weight:bold;fill:' + data.textColor + '">' + data.text,
    );
    
    var shapeDimension = '';
   
    if (data.shape == 'Circle') {
        shapeDimension = circle;
        console.log('hello');
    } else if (data.shape == 'Triangle') {
        shapeDimension = triangle;
    } else {
        shapeDimension = square;
    };

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <${shapeDimension.dimension} ${shapeDimension.color}/>
    <${shapeDimension.text}</text>
</svg>`;
}

module.exports = shapes;