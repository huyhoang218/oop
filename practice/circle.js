// let Circle = function(radius){
//     this.radius = radius
//     this.getRadius = function(){
//         return radius
//     } 
//     this.getArea = function(){
//         return Math.PI * radius * radius
//     }
// }
// let circle = new Circle(2)
// let radius = circle.getRadius()
// let area = circle.getArea()
// alert(`radius is ${radius}, area of circle ${area}`)

class Circle {
    constructor(radius, color){
        this.radius = radius
        this.color = color
    }
    getRadius(){
        return this.radius
    }
    getArea(){
        return Math.PI * radius * radius
    }
    getColor(){
        return this.color
    }
}
let circle = new Circle(10, 'red')
let radius = circle.getRadius()
let area = circle.getArea()
let color = circle.getColor()
alert(`radius is ${radius}, area of circle ${area}, color is ${color}`)
