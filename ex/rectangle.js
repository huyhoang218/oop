class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
    getPerimeter() {
        return 2 * (this.height + this.width)
    }
    getArea() {
        return this.height * this.width
    }
    createRactangle() {
        let ctx = document.getElementById('myCanvas').getContext('2d')
        ctx.beginPath()
        ctx.rect(20, 20, this.width, this.height)
        ctx.fill()
    }
}
let rectangle = new Rectangle(300, 400)
let perimeter = rectangle.getPerimeter()
let area = rectangle.getArea()
alert(`per: ${perimeter}, area: ${area}`)
rectangle.createRactangle()