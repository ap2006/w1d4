var words = ["ground", "control", "to", "major", "tom"];


function map(words, cb) {
  var array =[];
  for (word of words) {
    array.push(cb(word));
  }
  console.log(array)
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});



// function map(words, cb) {
//   var array =[];
//   for (i = 0; i < words.length; i++) {
//     array.push(cb(words[i]));
//   }
//   for (word of words) {
//     array.push(cb(word));
//   }
//   console.log(array)
// }