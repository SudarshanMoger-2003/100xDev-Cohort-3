class Animal{
    constructor(name, legcount, speaks){
        this.name = name
        this.legcount = legcount
        this.speaks = speaks
    }
    walk(){
        console.log("Walks")
    }
    static myType(){
        console.log("Only called with Animal class")
    }
}

let dog = new Animal("dog",4,"bhow bhow ")
dog.walk()
Animal.myType()

