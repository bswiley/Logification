const {Circle, Square, Triangle} = require('./lib/Shapes/Shapes');
const fs = require('fs');
const inquirer = require("inquirer");



// inquirer.prompt([
// {
// type: 'list',
// message: 'What kind of shape would you like the letters to be shown inside of?',
// name: 'shap',
// choices: ["Circle","Triangle","Square"]
// },

// {
// type: 'input',
// message: 'What letters would you like to use in your logo? (You can choose up to three letters; case sensitive)',
// name: 'text',
// },

// {  
// type: 'input',
// message: 'What color would you like your chosen shape to be? (it can be a popular color name or a hexadecimal color value)',
// name: 'sColo',
// },

// {
// type: 'input',
// message: "What color would you like the text to be in?(it can be a popular color name or a hexadecimal color value)",
// name: 'tColo',
// }
// ])
//     .then((response)=>{
//     console.log(response)
//     const {text, shape, sColor, tColor} = response;
var text = "BSW"
var shape = "square"
var sColor = "#1b54b5"
var tColor = "#ed6f7c"
writeSVG(text, shape, sColor, tColor);
// })


function writeSVG(text, shap, sColo, tColo){
   let shape = shap.toLowerCase();
   let sColor = sColo.toLowerCase();
   let tColor = tColo.toLowerCase();
   console.log (shape, sColor, tColor)
}

fs.writeFile(`./examples/${shape}.svg`,'<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n', err  =>
err ? console.error(err): console.log ("SVG started"));

switch (shape){

case 'square':
let sFigure = new Square(sColor)
console.log(sFigure.render());

fs.appendFile(`./examples/${shape}.svg`, sFigure.render() , err  =>
err ? console.error(err): console.log ("square written"));

fs.appendFile(`./examples/${shape}.svg`, `<text x="150" y="125" font-size ="60" text-anchor="middle" fill="${tColor}">${text}</text>\n </svg>\n` , err  =>
err ? console.error(err): console.log ("text written"));
break;

case "circle":
let cFigure = new Circle(sColor)   

fs.appendFile(`./examples/${shape}.svg`, cFigure.render(), err  =>
err ? console.error(err): console.log ("circle written"));

fs.appendFile(`./examples/${shape}.svg`, `<text x="150" y="125" font-size ="60" text-anchor="middle" fill="${tColor}">${text}</text>\n </svg>\n` , err  =>
err ? console.error(err): console.log ("text written"));
break;

case "triangle":
let tFigure = new Triangle(sColor)   

fs.appendFile(`./examples/${shape}.svg`, tFigure.render(sColor), err  =>
err ? console.error(err): console.log ("triangle written"));

fs.appendFile(`./examples/${shape}.svg`, `<text x="150" y="150" font-size ="60" text-anchor="middle" fill="${tColor}">${text}</text>\n </svg>\n` , err  =>
err ? console.error(err): console.log ("text written"));
break;
}

