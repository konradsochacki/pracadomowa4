// 2) Extend Number type with the reverse() function.
// The function is to reverse the value of the Number on which it was called.

Number.prototype.reverse = function() {
  return this.valueOf() * -1;
};

let someNumber = Math.floor(Math.random() * 100);

console.log(someNumber, " reversed is", someNumber.reverse());
