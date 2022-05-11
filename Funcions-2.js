/*function sayHello(nameOfPerson, age) {
  console.log("Hello my name is" + nameOfPerson + "and i'm " + age);
}


sayHello("jun", 28);
sayHello("ho", 25);
sayHello("say", 21);


function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber)
}
function divide(a, b) {
  console.log(a / b)
}
plus(8, 60)
divide(98, 20)
*/



const player = {
  name: "jun",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you!");
  },
};


console.log(player.name);
player.sayHello("seho");
player.sayHello("dainy");
