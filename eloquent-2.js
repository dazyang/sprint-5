//Looping a triangle
for (var hashtag ="#"; hashtag.length < 8; hashtag += "#")
  console.log(hashtag);


/* FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

/* Chess board
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. */

var size = 8;
var chessBoard = "";

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 == 0)
    chessBoard += " ";
    else
    chessBoard += "#";
  }
  chessBoard += "\n";
}

console.log(chessBoard);
