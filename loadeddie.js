// var rollDie = function () {
//   return Math.floor(1 + Math.random() * 6);
// }

// console.log(rollDie());  // 1 (for example)


function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here The following is the cheat sheet function */
  var counter = -1

  return function() {
    if (counter < (list.length - 1)) {
      counter ++;
    }
   else {
    counter = 0

    } console.log("counter: " + counter);
    return list[counter];
  }

}

var rollLoadedDie = makeLoadedDie();



console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6








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