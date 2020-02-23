// Source code here
var patient = {
    firstName: "James",
    lastName: "Smith",
    clientNew: "Yes",
    acknowledge: function () { return "Good afternoon"; }
};
console.log("Patient Object ");
console.log(patient.firstName);
console.log(patient.lastName);
console.log(patient.acknowledge());
var employee = {
    firstName: "Kelly",
    lastName: "Slater",
    clientNew: "Yes",
    acknowledge: function () { return "Hello!!!"; }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
var list2 = ["Mike", 25, "Steve"]; //Error. 1 is not type string  
var agelist;
agelist["Mike"] = 53; // Ok 
agelist[2] = "forty-two"; // Error
interface Patient { 
    age:number 
 } 
 
 interface Doctor extends Patient {
     heartbeat: number; 
    stethoscope:string 
 } 
 
 var doctor = <Doctor>{}; 
 doctor.heartbeat = 27 
 doctor.stethoscope = "Rate" 
 console.log("HeartBeat:  "+doctor.age); 
 console.log("Stethoscope:  "+doctor.stethoscope);

 interface HeartBeat1 { 
    b1:number 
 } 
 
 interface HeartBeat2 { 
    b2:number 
 } 
 
 interface HeartBeat3 { 
    b3:number 
 } 

 interface Lung extends HeartBeat1, HeartBeat2, HeartBeat3{ } 
 var obj:Lung = { b1:12, b2:23, b3:46,} 
 console.log("value 1: "+this.b1+" value 2: "+this.b2+" value 3: "+this.b3)





interface HeartBeat1 {
    b1:number 
} 

interface HeartBeat2 { 
   b2:number 
} 

interface HeartBeat3 { 
   b3:number 
} 


class Body implements HeartBeat1 {
    b1: number
    b2: number
    b3: number
    }
console.log(Body);


class Body2 implements HeartBeat2 {
    b1: number
    b2: number
    b3: number
    }
console.log(Body2);

class Body3 implements HeartBeat3 {
    b1: number
    b2: number
    b3: number
    }
console.log(Body3);

