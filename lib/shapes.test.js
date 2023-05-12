const {Circle, Square, Triangle} = require('./Shapes/Shapes')  

describe ("Circle",()=>{
test("circle is being built (default color",()=>{
const circle= new Circle()
const renderCircle = `<circle cx="150" cy="100" r="100" fill="red"/>\n`
expect(renderCircle).toEqual(circle.render())
})

test("circle is being built chosen color (this time yellow)",()=>{
const circle = new Circle("yellow")
const renderCircle = `<circle cx="150" cy="100" r="100" fill="yellow"/>\n`
expect(renderCircle).toEqual(circle.render())
});});

describe ("Triangle",()=>{
test("Triangle is being built (default color",()=>{
const triangle= new Triangle()
const renderTriangle = `<polygon points ="0,200  150,0  300,200" fill="blue"/>\n`
expect(renderTriangle).toEqual(triangle.render())
})

test("Triangle is being built chosen color (this time yellow)",()=>{
const triangle= new Triangle("yellow")
const renderTriangle = `<polygon points ="0,200  150,0  300,200" fill="yellow"/>\n`
expect(renderTriangle).toEqual(triangle.render())
});});

describe ("Square",()=>{
test("Square is being built (default color",()=>{
const square= new Square()
const renderSquare = `<rect x="50" y="0" width="200" height ="200" fill="blue"/>\n`
expect(renderSquare).toEqual(square.render())
})

test("square is being built chosen color (this time yellow)",()=>{
const square= new Square("yellow")
const renderSquare = `<rect x="50" y="0" width="200" height ="200" fill="yellow"/>\n`
expect(renderSquare).toEqual(square.render())
});});
