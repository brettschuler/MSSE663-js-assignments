/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Calls the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its method and output to the console.
 */

const monkey = {
    type: 'Tamarin',
    age:   17,
    color: 'Redish Orange',
    getType: () => this.type,
    getColor: () => this.color
};

class Monkey {
    type;
    age;
    color;

constructor(type, age, color) {
    this.type = type;
    this.age = age;
    this.color = color;
}

getType() {
    return this.type;
}
getColor() {
    return this.color;
}

}

const moreMonkey = new Monkey('Tamrin',17,'Reddish Orange');
console.log(moreMonkey.getColor());