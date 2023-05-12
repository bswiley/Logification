class Circle {
    constructor(sColor="red",tColor="blue",text="RED"){
    this.sColor = sColor;
    this.tColor =tColor;
    this.text = text
    }
    render(){
     return `<circle cx="150" cy="100" r="100" fill="${this.sColor}"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tColor}">${this.text}</text>\n</svg>\n`
    }}

class Square {
    constructor(sColor="red",tColor="blue",text="RED"){
        this.sColor = sColor;
        this.tColor =tColor;
        this.text = text
        }
    render(){
     return `<rect x="50" y="0" width="200" height ="200" fill="${this.sColor}"/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tColor}">${this.text}</text>\n</svg>\n` 
    }}

 class Triangle {
    constructor(sColor="red",tColor="blue",text="RED"){
        this.sColor = sColor;
        this.tColor =tColor;
        this.text = text
        }
     render(){
      return`<polygon points ="0,200 150,0 300,200" fill="${this.sColor}"/>\n<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.tColor}">${this.text}</text>\n</svg>\n`
 
     }}
 module.exports = {Circle, Square, Triangle}
