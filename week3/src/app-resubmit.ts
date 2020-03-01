// Source code here

enum GenderTypes {
    M = 'male',
    F = 'female',
    U = 'unknown'
}



interface Person {
    name: string;
    age: number;
    gender: GenderTypes;
    getNames:() => string;
    getGender: () => GenderTypes;
    }


export class Jose implements Person {
    constructor{
        public name: string,
        public age: number,
        public gender: GenderTypes
    } {}

 
    getAge()  {
        return this.age;
    }

    getGender()  {
        return this.gender;
    }
}

const newJose = new Jose('Jose', 24, GenderTypes.M);
console.group(newJose.getNames());