/*const player = {
  name: "jun",
  age: 28,
};

console.log(player);
player.name = "jun";
console.log(player);
player.sexy = "soon";
console.log(player, console);
*/

/*function minusFive(potato) {
  console.log(potato - 5);
}


minusFive(5, 10, 12, 34, 4, 5, 6, 7);*/

const calcultor = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calcultor.add(5, 1);
calcultor.minus(3, 2);
calcultor.div(4, 7);
calcultor.multi(5, 2);
calcultor.power(2, 8);