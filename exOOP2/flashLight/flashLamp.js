class FlashLamp {
    constructor(battery) {
        this.battery = battery
    }
    getBatteryInfor() {
        return this.battery.getEnergy()
    }
    turnOn() {
        this.status = true
    }
    turnOff() {
        this.status = false
    }
    displayLight() {
        if(this.status) return true
        else return false
    }
}

let b = new Battery()
b.getEnergy(10)
let flashLamp = new FlashLamp()
