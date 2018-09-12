// WORKING WITH OBJECTS

const pen = {
    type: "Ballpoint",
    color: "blue",
    brand: "Bic"
}
console.log(pen.type, pen.color, pen.brand);

//Changing of a property

pen.color = "red"; // Modify the pen color property
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

//Dynamically adding properties to an existing object
pen.price = "2.5$";
console.log(`My pen costs ${pen.price}`);

//Example of an object: RPG character

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
}
console.log(`${aurora.name} has ${aurora.health} HP and ${aurora.strength} as strength`);

//Aurora is harmed by an arrow reduce health by 20
aurora.health -= 20;
//Aurora equips a strenght necklace +10 str
aurora.strength += 10;

//console.log(`${aurora.name} has ${aurora.health} HP and ${aurora.strength} as strength`);

function Describe(character){ //Does the same thing using a function
    console.log(`${character.name} has ${character.health} HP and ${character.strength} as strength`);

}
Describe(aurora);

const mario = {
    name: "Mario",
    hp: "150",
    str: "25",
    describe(){
        return `${this.name} has ${this.hp} HP and ${this.str} as strength` // this.object refers to the object inside of which a method is allocated in 
    }
}
console.log(mario.describe());
