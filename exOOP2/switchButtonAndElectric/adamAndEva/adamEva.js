class Apple {
    constructor(weight) {
        this.weight = weight
    }
    getWeight(){
        return this.weight
    }
    setWeight(){
        this.weight = weight
    }
    isEmpty(){
        if(this.weight > 0) return true
        else return false
    }
    decreaseApple(){
        if (!this.isEmpty()) alert('out of apples')
        else this.weight--
    }
}

class Human{
    constructor(name, gender, weight){
        this.name = name
        this.weight = weight
        this.gender = gender
    }
    getName(){
        return this.name
    }
    setName(){
        this.name = name
    }
    getWeight(){
        return this.weight
    }
    setWeight(){
        this.weight = weight
    }
    setGender(){
        if(this.gender === 'men') return 'Male'
        else if(this.gender === 'girl') return 'Femele'
        else return 'Gender undetermined'
    }
    eat(apple){
        if(apple.getWeight() > 0){
            decreaseApple()
            this.weight++
        }else alert('out of apples')
    }
    say(string){
        console.log(string)
    }
    getInfoHuman(){
        alert(`${human.name} ${human.setGender()} ${human.weight}`)
    }
}