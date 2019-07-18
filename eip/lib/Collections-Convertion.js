//-----------------------------String to Array to Map to Set---------------------------//
let string = '123';
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
let map = new Map([
  [1, 'a'],
  [2, 'b'],
  [3, 'c']
]);

function testToString() {
  // string from array
  log('\n// string from array');
  string = array.join('');
  log(string); // 123
  string = String(array); // wrong
  log(string); // 1,2,3

  // string from set
  log('\n// string from set');
  string = Array.from(set.keys()).join('');
  log(string); // 123
  string = Array.from(set).join('');
  log(string); // 123

  // string from map
  log('\n// string from map');
  string = Array.from(map.keys()).join('');
  log(string); // 123
  string = Array.from(map.values()).join('');
  log(string); // abc
  string = Array.from(map).join(''); //  wrong
  log(string); // 1,a2,b3,c
}

function testToArray() {
  // array from string
  log('\n// array from string');
  string = '123';
  array = string.split('');
  log(array); // [ '1', '2', '3' ]
  array = Array.from(string);
  log(array); // [ '1', '2', '3' ]

  // array from number
  log('\n// array from number');
  let number = 123;
  array = Array.of(number);
  log(array); // [ 123 ]
  array = Array.from(number); // wrong
  log(array); // []
  log(array.length); // 0
  array = Array.from(String(number)); // right
  log(array); // [ '1', '2', '3' ]
  log(array.length); // 3

  // array from set
  log('\n// array from set');
  array = Array.from(set);
  log(array); // [ 1, 2, 3 ]
  array = Array.from(set.entries());
  log(array); // [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ]
  array = Array.from(set.keys());
  log(array); // [ 1, 2, 3 ]
  array = Array.from(set.values());
  log(array); // [ 1, 2, 3 ]
  array = [...set];
  log(array); // [ 1, 2, 3 ]

  // array from map
  log('\n// array from map');
  array = Array.from(map);
  log(array); // [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]
  array = Array.from(map.entries());
  log(array); // [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]
  array = Array.from(map.keys());
  log(array); // [ 1, 2, 3 ]
  array = Array.from(map.values());
  log(array); // [ 'a', 'b', 'c' ]
  array = [...map];
  log(array); // [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]
}

function testToSet() {
  // set from string
  log('\n// set from string')
  string = '1233';
  set = new Set(string);
  log(set); // Set { '1', '2', '3' }

  // set from array
  log('\n// set from array')
  array = [1, 2, 3];
  set = new Set(array);
  log(set); // Set { 1, 2, 3 }
  set = new Set(array.entries());
  log(set); // Set { [ 0, 1 ], [ 1, 2 ], [ 2, 3 ] }
  set = new Set(array.keys());
  log(set); // Set { 0, 1, 2 }
  // no nodejs support
  // set = new Set(array.values());
  // log(set); // Set { 1, 2, 3 }

  // set from map
  log('\n// set from map')
  set = new Set(map);
  log(set); // Set { [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] }
  set = new Set(map.entries());
  log(set); // Set { [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] }
  set = new Set(map.keys());
  log(set); // Set { 1, 2, 3 }
  set = new Set(map.values());
  log(set); // Set { 'a', 'b', 'c' }
}

function testToMap() {
  // map from string
  log('\n// map from string')
  string = '123';
  map = new Map(Array.from(string).entries());
  log(map); // Map { 0 => '1', 1 => '2', 2 => '3' }

  // map from array
  log('\n// map from array')
  array = [1, 2, 3];
  map = new Map(array.entries());
  log(map); // Map { 0 => 1, 1 => 2, 2 => 3 }
  // all errors
  // map = new Map(array);
  // log(map);
  // map = new Map(array.keys());
  // log(map);
  // map = new Map(array.values());
  // log(map);


  // map from set
  log('\n// map from set')
  set = new Set([1, 2, 3]);
  map = new Map(set.entries());
  log(map); // Map { 1 => 1, 2 => 2, 3 => 3 }
  // all errors
  // map = new Map(set);
  // log(map);
  // map = new Map(set.keys());
  // log(map);
  // map = new Map(set.values());
  // log(set);
}

//----Run----//
testToString();
testToArray();
testToMap();
testToSet();


//-----------------------------Utility---------------------------//
function log(data) {
  console.log(data);
}
