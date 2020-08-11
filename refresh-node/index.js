const rect = require('./rectangle');


function solveRect(l,b ) {
    console.log(`Solving for rectangle with l = ${l} and b = ${b}`);
    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log(`Error: ${err.message}`)
        } else {
            console.log(`The area of the rectangle is ${rectangle.area()}`)
            console.log(`The perimeter of the rectangle is ${rectangle.perimeter()}`);
        }
    });

}

solveRect(2, 4);
solveRect(4, 40);
solveRect(7, 14);
solveRect(18, 4);
