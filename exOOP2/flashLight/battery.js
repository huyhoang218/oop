class Battery {
    constructor(energy) {
        this.energy = energy
    }
    getEnergy(){
        return this.energy
    }
    minusBattery() {
        if (this.energy > 0) this.energy--
    }
}