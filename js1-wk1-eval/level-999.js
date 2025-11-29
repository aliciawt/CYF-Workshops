
// Without running code,
// predict and explain what will get logged to the console for each line below
// think carefully about the difference between each line
// write down your predictions
// Look up documentation for Math.abs if you've not used it before

console.log(Math.abs); // it will return SyntaxError because no () for Math.abs
console.log(Math.abs()); // it will return undefined because no argument inside () for Math.abs
console.log(Math.abs(-100)); // it will return 100

// Run the file with Node to check your answer
// no. 1 answer is [Function: abs] because you can log a function without executing it, so console just prints function reference
// no. 2 answer is NaN because argument wasn't given, thus math operation failed, thus JS produces NaN