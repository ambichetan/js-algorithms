//-----------------------------Set---------------------------//
// Same as Map except add instead of set and no get as in map.
// creation, has, delete, copy, iteration, entries, keys, values, clear are same as Map
function testSet() {
  // Set maintains insertions order
  let chars = new Set(['d', 'u', 'd', 'e']); // an iterable object
  log(chars); // Set { 'd', 'u', 'e' }
  log(chars.size); // 3

  // add
  chars.add('c');
  log(chars); // Set { 'd', 'u', 'e', 'c' }
  log(chars.size); // 4

  // delete 
  chars.delete('c');
  log(chars); // Set { 'd', 'u', 'e' }
  log(chars.size); // 3

  // no get

  // has 
  log(chars.has('d')); // true
  log(chars.has('c')); // false

  // entries
  log(chars.entries()); // SetIterator { [ 'd', 'd' ], [ 'u', 'u' ], [ 'e', 'e' ] }

  // keys
  log(chars.keys()); // SetIterator { 'd', 'u', 'e' }

  // values
  log(chars.values()); // SetIterator { 'd', 'u', 'e' }

  // iterate
  for (let char of chars) {
    log(char);
  }
  // d
  // u
  // e

  for (let char of chars.keys()) {
    log(char);
  }
  // d
  // u
  // e

  for (let char of chars.values()) {
    log(char);
  }
  // d
  // u
  // e

  for (let [key, value] of chars.entries()) {
    log(key + value);
  }
  // dd
  // uu
  // ee

  chars.forEach(function (value) {
    log(value);
  });
  // d
  // u
  // e

  //copy
  const chars2 = new Set(chars);
  chars2.add('c');
  log(chars); // Set { 'd', 'u', 'e' }
  log(chars2); // Set { 'd', 'u', 'e', 'c' }

  //clear
  chars.clear();
  log(chars); // Set {}
  log(chars.size); // 0
}

// same for all the iteration methods, including for..of
function testIterations() {
  log('\n// testIterations');
  let chars = new Set(['d', 'u', 'e']);

  // Each value is visited once, except in the case when it was deleted and re-added  
  chars.forEach(function (value, key, set) {
    if (value === 'u') {
      chars.delete('d');
      chars.add('d');
    }
    log(value);
  });
  // d
  // u
  // e
  // d
  log(chars); // Set { 'u', 'e', 'd' }

  // is not invoked for values deleted before being visited. 
  chars.forEach(function (value, key, map) {
    if (value === 'u') {
      chars.delete('e');
    }
    log(value);
  });
  // u
  // d
  log(chars); // Set { 'u', 'd' }

  //New values added before forEach has finished will be visited.
  chars.forEach(function (value, key, map) {
    if (value === 'd') {
      chars.add('e');
    }
    log(value);
  });
  // u
  // d
  // e
  log(chars); // Set { 'u', 'd', 'e' }
}

//----Run----//
testSet();
testIterations();

//-----------------------------Utility---------------------------//
function log(data) {
  console.log(data);
}
