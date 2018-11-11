// # Problem 1:
// # Write a method that prints out every number from 1 to 100. 

// var i = 0;
// while (i <= 100) {
//   console.log(i);
//   i += 1;
// }

// # Problem 2: 
// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// var i = 1;
// while (i <= 101) {
//   console.log(i);
//   i += 2;
// }

// # Problem 3:
// # Write a method that accepts an array of numbers as a parameter, and counts how many 55's there are in the array.

// var numbers = [1,3,4,55,55];
// var i = 0;
// var count = 0;
// while (i < numbers.length) {
//   if (numbers[i] === 55) {
//     count += 1;
//   }
//   i += 1;
// }
// console.log(count);

// # Problem 4:
// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// print_awesomesauce(["a", "b", "c", "d", "e"]);
function PrintAwesomesauce(strings) {
  var index = 0;
  strings.forEach(function(string) {
    if (index % 1 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
PrintAwesomesauce(["a", "b", "c", "d", "e"]);
 
