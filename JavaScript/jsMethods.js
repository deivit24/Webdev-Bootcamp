var obj = {
  name: "chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function (x,y) {
    return x + y;
  }
};

var catSpeak = {};
var dogSpeak = {};

dogSpeak.speak = function () {
  return "Woof!";
};

catSpeak.speak = function () {
  return "Meow!";
};
