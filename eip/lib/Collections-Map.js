//-----------------------------Map---------------------------//
function testMap() {
  // Map maintains insertion order
  const users = new Map([ // An Array or other iterable object whose elements are key-value pairs
    [1, 'chetan'],
    [2, 'rahul']
  ]);
  // add
  users.set(3, 'sumeeth');
  log(users); // Map { 1 => 'chetan', 2 => 'rahul', 3 => 'sumeeth' }
  log(users.size); // 3

  // delete 
  users.delete(1);
  log(users); // Map { 2 => 'rahul', 3 => 'sumeeth' }
  log(users.size); // 2

  // get
  log(users.get(2)); // rahul
  log(users.get(1)); // undefined

  // has 
  log(users.has(2)); // true
  log(users.has(1)); // false

  // entries
  log(users.entries()); // MapIterator { [ 2, 'rahul' ], [ 3, 'sumeeth' ] }

  // keys
  log(users.keys()); // MapIterator { 2, 3 }

  // values
  log(users.values()); // MapIterator { 'rahul', 'sumeeth' }

  // iterate
  for (let user of users) {
    log(user);
  }
  // [2, 'rahul']
  // [3, 'sumeeth']

  for (let [id, name] of users) {
    log(id + name);
  }
  // 2rahul
  // 3sumeeth

  users.forEach(function (value, key, map) {
    log(key + value);
  });
  // 2rahul
  // 3sumeeth

  //copy
  const users2 = new Map(users);
  users.set(1, 'chetan');
  log(users); // Map { 2 => 'rahul', 3 => 'sumeeth', 1 => 'chetan' }
  log(users2); // Map { 2 => 'rahul', 3 => 'sumeeth' }

  //clear
  users.clear();
  log(users); // Map {}
  log(users.size); // 0
}

// same for all the iteration methods, including for..of
function testIterations() {
  log('\n// testIterations');
  const users = new Map([
    [1, 'chetan'],
    [2, 'rahul'],
    [3, 'vijay']
  ]);

  // Each value is visited once, except in the case when it was deleted and re-added before 
  users.forEach(function (value, key, map) {
    if (value === 'rahul') {
      users.delete(1);
      users.set(1, 'chetan');
    }
    log(key + value);
  });
  // 1chetan
  // 2rahul
  // 3vijay
  // 1chetan
  log(users); // Map { 2 => 'rahul', 3 => 'vijay', 1 => 'chetan' }

  // is not invoked for values deleted before being visited.
  users.forEach(function (value, key, map) {
    if (value === 'rahul') {
      users.delete(3);
    }
    log(key + value);
  });
  // 2rahul
  // 1chetan
  log(users); // Map { 2 => 'rahul', 1 => 'chetan' }

  //New values added before forEach has finished will be visited.
  users.forEach(function (value, key, map) {
    if (value === 'rahul') {
      users.set(3, 'vijay');
    }
    log(key + value);
  });
  // 2rahul
  // 1chetan
  // 3vijay
  log(users); // Map { 2 => 'rahul', 1 => 'chetan', 3 => 'vijay' }
}

//----Run----//
testMap();
testIterations();

//-----------------------------Utility---------------------------//
function log(data) {
  console.log(data);
}
