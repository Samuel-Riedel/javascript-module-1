let mentor1 = "Daniel";
let mentor2 = "Irina";
let mentor3 = "Mimi";
let mentor4 = "Rob";
let mentor5 = "Yohannes";

// write a function that logs a string to uppercase (with the name Daniel it should log HELLO DANIEL)
function upperString(Hola) {
    return "Hello my name is : " + Hola.toUpperCase()
}
const upperCaseName = upperString("Hola")


function newFunction(Hola="Saludo", nombre="user"){
    return upperString(Hola) + nombre
}

console.log(newFunction("Hola ",mentor1))
console.log(newFunction("Hola ",mentor2))
console.log(newFunction("Hola ",mentor3))
console.log(newFunction("Hola ",mentor4))
console.log(newFunction("Hola ",mentor5))
/*
greetingMentors(mentor1)
greetingMentors(mentor2)
greetingMentors(mentor3)
greetingMentors(mentor4)
greetingMentors(mentor5)
*/
