class Circle {
    constructor(color="red"){
    this.color = color;
    }
    render(){
     return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>\n`
    }}

class Square {
    constructor(color="blue"){
    this.color = color
    }
    render(){
     return `<rect x="50" y="0" width="200" height ="200" fill="${this.color}"/>\n`
    }}

 class Triangle {
     constructor(color="blue"){
     this.color = color
     }
     render(){
      return `<polygon points ="0,200  150,0  300,200" fill="${this.color}"/>\n`}
 
 }
 module.exports = {Circle, Square, Triangle}
