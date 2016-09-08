var Immutable = require('immutable');

var list = Immutable.List([ 1, 2, 3, 'ab', 213 , 99, 0]);


console.log(list.findKey(function(item) { return item === 1; }));

console.log(list.insert(2, 'okokokok'));
