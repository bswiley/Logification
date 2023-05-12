const {Circle, Square, Triangle} = require('./lib/Shapes/Shapes');
const fs = require('fs');
const inquirer = require("inquirer");



inquirer
.prompt([
{
type: 'list',
message: 'What kind of shape would you like the letters to be shown inside of?',
name: 'shape',
choices: ["Circle","Triangle","Square"]
},

{
type: 'input',
message: 'What letters would you like to use in your logo? (You can choose up to three letters; case sensitive)',
name: 'text',
},

{  
type: 'input',
message: 'What color would you like your chosen shape to be? (it can be a popular color name or a hexadecimal color value)',
name: 'sColor',
},

{
type: 'input',
message: "What color would you like the text to be in?(it can be a popular color name or a hexadecimal color value)",
name: 'tColor',
}
])
.then((response)=>{
console.log(response)
const {shape, text, sColor, tColor} = response;
writeSVG(text, shape, sColor, tColor);
})



function writeSVG(text, shap, sColo, tColo){
   let shape = shap.toLowerCase();
   let sColor = sColo.toLowerCase();
   let tColor = tColo.toLowerCase();
   console.log (shape, sColor, tColor)


fs.writeFile(`./examples/${shape}.svg`,'<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n', err  =>
err ? console.error(err): console.log ("SVG started"));

addShape(shape,sColor,tColor,text);
}

function addShape (shape,sColor,tColor,text){

switch (shape){

case 'square':
let sFigure = new Square(sColor, tColor, text)

fs.appendFile(`./examples/${shape}.svg`, sFigure.render() , err  =>
err ? console.error(err): console.log ("square written"));
break;

case "circle":
let cFigure = new Circle(sColor, tColor, text)  

fs.appendFile(`./examples/${shape}.svg`, cFigure.render(), err  =>
err ? console.error(err): console.log ("circle written"));
break;

case "triangle":
let tFigure = new Triangle(sColor, tColor, text)  

fs.appendFile(`./examples/${shape}.svg`, tFigure.render(), err  =>
err ? console.error(err): console.log ("triangle written"));
break;
}}
