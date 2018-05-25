// // Print all numbers between -10 and 19
// var num = -10;
//
// while (num >= -10 && num <= 19) {
//   console.log(num);
//   num++;
//
// }
//
// // Print all even numbers between 10 and 40
// var num = 10;
//
// while (num >= 10 && num <= 40) {
//   console.log(num);
//   num+=2;
//
// }
//
// // Print all odd numbers between 300 and 333
//
// var num = 300;
//
// while (num >= 300 && num <= 333) {
//   console.log(num + 1);
//   num+=2;
// }
//
// // Print all numbers divisible by 5 AND 3 between 5 and 50
//
// var num = 5;
//
//   while (num <= 50) {
//     if (num % 5 === 0 && num % 3 === 0) {
//       console.log(num);
//     }
//     num++;
//   }



// Print all numbers between -10 and 19

for (var num = -10; num <= 19; num++) {
  console.log(num);
}

// Print all even numbers between 10 and 40

for (var num = 10; num <= 40; num+=2) {
  console.log(num);
}

for (var num = 10; num <= 40; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
  
}
// Print all odd numbers between 300 and 333

for (var num = 300; num <= 333; num++) {
  if (num % 2 !== 0) {
      console.log(num);

  }


}
// Print all numbers divisible by 5 AND 3 between 5 and 50


for (var num = 5; num <= 50; num++) {
  if (num % 5 === 0 && num % 3 ===0) {
    console.log(num);

  }


}
