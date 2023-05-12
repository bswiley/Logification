const {Circle, Square, Triangle} = require('./Shapes/Shapes')  

describe ("Circle",()=>{
test("circle is being built (default colors & text",()=>{
const circle= new Circle()
const renderCircle = `<circle cx="150" cy="100" r="100" fill="red"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">RED</text>\n</svg>\n`
expect(renderCircle).toEqual(circle.render())
})

test("circle is being built chosen color & text (this time yellow,purple and YOU)",()=>{
const circle = new Circle("yellow","purple","YOU")
const renderCircle = `<circle cx="150" cy="100" r="100" fill="yellow"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">YOU</text>\n</svg>\n`
expect(renderCircle).toEqual(circle.render())
});});

describe ("Triangle",()=>{
test("Triangle is being built (default colors & text",()=>{
const triangle= new Triangle()
const renderTriangle = `<polygon points ="0,200 150,0 300,200" fill="red"/>\n<text x="150" y="150" font-size="60" text-anchor="middle" fill="blue">RED</text>\n</svg>\n`
expect(renderTriangle).toEqual(triangle.render())
})

test("Triangle is being built chosen color & text (this time yellow,purple and YOU)",()=>{
const triangle= new Triangle("yellow","purple","YOU")
const renderTriangle = `<polygon points ="0,200 150,0 300,200" fill="yellow"/>\n<text x="150" y="150" font-size="60" text-anchor="middle" fill="purple">YOU</text>\n</svg>\n`
expect(renderTriangle).toEqual(triangle.render())
});});

describe ("Square",()=>{
test("Square is being built (default colors & text)",()=>{
const square= new Square()
const renderSquare = `<rect x="50" y="0" width="200" height ="200" fill="red"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">RED</text>\n</svg>\n` 
expect(renderSquare).toEqual(square.render())
})

test("square is being built chosen color & text (this time yellow,purple and YOU)",()=>{
const square= new Square("yellow","purple","YOU")
const renderSquare = `<rect x="50" y="0" width="200" height ="200" fill="yellow"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">YOU</text>\n</svg>\n` 
expect(renderSquare).toEqual(square.render())
});});
