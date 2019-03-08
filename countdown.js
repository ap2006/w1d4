// Implement a function countdownGenerator() that takes in a number x
// and returns a function that counts down when it is called (see starter code below).


var countdownGenerator = function (initialnumber) {
  /* your code here */
  var id = initialnumber;

  return function() {
    if (id >= 1)  {
      console.log("T-minus " + id + "...")
    }
    else if (id === 0) {
      console.log("Blast Off!")
    }
    else {
      console.log("Rockets already gone, bub!")
    }
    id -= 1;
    // return id;
  }

};

var countdown = countdownGenerator(10);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();






// function countdownPractice() {
//   var id = 10;

//   // The following is the closure function
//   return function() {
//     // This inner function accesses and assigns the value of
//     // the variable id, which was defined in the parent function
//     id -= 1;
//     return id;
//   }
// }

// // makeIdGenerator returns a function which is assigned to
// // the variable nextId
// var nextId = countdownPractice();

// console.log(nextId()); // Logs: 1
// console.log(nextId()); // Logs: 2
// console.log(nextId()); // Logs: 2
// console.log(nextId()); // Logs: 2
// console.log(nextId()); // Logs: 2
// console.log(nextId()); // Logs: 2



// function makeIdGenerator() {
//   var id = 0;

//   // The following is the closure function
//   return function() {
//     // This inner function accesses and assigns the value of
//     // the variable id, which was defined in the parent function
//     id += 1;
//     return id;
//   }
// }

// // makeIdGenerator returns a function which is assigned to
// // the variable nextId
// var nextId = makeIdGenerator();

// console.log(nextId()); // Logs: 1
// console.log(nextId()); // Logs: 2