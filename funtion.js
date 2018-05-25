function sayHi() {
  console.log('say hi');
  console.log('say bye');
}


function square(num) {
  console.log(num*num);

}


function sayHello(name) {
  console.log("Hello there " + name + "!");

}


function area(length, width) {
  console.log(length * width);

}
function greet(person1, person2, person3) {
  console.log("Hi " + person1);
  console.log("Hi " + person2);
  console.log("Hi " + person3);
}

function sqaure(x) {
  return x * x;

}

var result = sqaure(104);


function isEven(x) {
  if (x % 2 === 0) {
    console.log("true");

  }
  else {
    console.log("false");
  }

}

function even(num) {
  if (num % 2 ===0) {
    return true;

  }

}

// factorial (4) 4 x 3 x 2 x 1

function factorial(num) {
  var result = 1;
  for (var i = 2; i <= num; i++) {
    result = result * i;
    // result *= i;
  }
  return result;
}

// kebabToSnake

function kebabToSnake(str) {
  // replace all - with _
  var newStr = str.replace(/-/g , "_");
  // return str
  return newStr;

}
