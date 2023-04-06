class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.age=age;
        this.lastName=lastName;
    }
    fullName(){
        return `My Name is ${this.firstName} ${this.lastName}`
    }
}
const person1= new Person("Harshit","Raj",25);
console.log(person1.fullName());


const person2= new Person("Rahul","Jain",26);
console.log(person2.fullName());
//any function inside a class is called method
//this keyword inside classes refer to the object that is being initialaised via that class

console.log(person1);
// console.log(person2);