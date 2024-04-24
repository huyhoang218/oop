class switchButton {
    constructor(lamp) {
        this.status = false
        this.lamp = lamp
    }
    switchOff() {
        this.status = false
        this.lamp.status = false
    }
    switchOn() {
        this.status = true
        this.lamp.status = true
    }
    connectToLamp(newLamp){
        this.lamp = newLamp
    }
}

let switch1 = new switchButton(electricLamp1)
let switch2 = new switchButton(electriclamp2)
// s1.switchOn()
// s2.switchOn()