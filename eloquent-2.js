//Looping a triangle
for (var hashtag ="#"; hashtag.length < 8; hashtag += "#")
  console.log(hashtag);


/* FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/

for (var num = 1; num <= 100; num++) {
  var output = "";
  if (num % 3 == 0)
    output += "Fizz";
  if (num % 5 == 0)
    output += "Buzz";

  console.log(output || num);
}

/* Chess board
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. */

/* Define a variable size = 8 and change the program so that it works for any size */
var size = 8;
/*The string can be built by starting with an empty one ("") and repeatedly adding characters.*/
var chessBoard = "";
//To work with two dimensions, you will need a loop inside of a loop.
/* You’ll need two variables to track your progress. To know whether to put a space or a hash sign at a given position, you could test whether the sum of the two counters is even (% 2). */
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 == 0)
    chessBoard += " ";
    else
    chessBoard += "#";
  }
//A newline character is written "\n".
  chessBoard += "\n";
}
//Use console.log to inspect the output of your program.
console.log(chessBoard);
