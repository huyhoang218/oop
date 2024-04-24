class electricLamp {
    constructor() {
        this.status = false
    }
    turnOn() {
        this.status = true
    }
    turnOff() {
        this.status = false
    }
}

let electricLamp1 = new electricLamp()
let electricLamp2 = new electricLamp()
// e1.turnOn()
// e2.turnOff()