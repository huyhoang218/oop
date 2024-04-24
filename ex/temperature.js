class Temperature{
    constructor(c){
        this.c = c
    }
    getCovertToF(){
        return 9/5 * this.c + 32
    }
    getCovertToK(){
        return this.c + 273.15
    }
}

let temp = new Temperature(25)
let tempC = temp.c
let tempF = temp.getCovertToF()
let tempK = temp.getCovertToK()
document.write(`${tempC}C = ${tempF}F <br>`)
document.write(`${tempC}C = ${tempK}K`)