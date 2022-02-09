/* 
let person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number, string];

} = {
    name: 'Angelo', 
    age: 20,
    hobbies: ['gaming', 'playing guitar', 'singing', 'programming'],
    role: [2, 'admin']
} */
enum Role {ADMIN, SELLER, BUYER}
let person = {
    name: 'Angelo', 
    age: 20,
    hobbies: ['gaming', 'playing guitar', 'singing', 'programming'],
    role: Role.ADMIN
}

for(const hobby of person.hobbies) {
    console.log(hobby);
}

console.log(person.age, person.name)