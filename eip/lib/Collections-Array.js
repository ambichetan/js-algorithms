function testArray() {
  // create-1
  log('\n// create-1');
  let chars = ['l', 'o', 'l'];
  log(chars); // [ 'l', 'o', 'l' ]
  log(chars.length); // 3

  // create-2
  log('\n// create-2');
  chars = new Array('l', 'o', 'l');
  log(chars); // [ 'l', 'o', 'l' ]
  log(chars.length); // 3

  // create-2
  log('\n// create-2');
  chars = new Array(3);
  chars[0] = 'l';
  chars[1] = '0';
  chars[2] = 'l';
  log(chars); // [ 'l', 'o', 'l' ]
  log(chars.length); // 3

  // create-4
  log('\n// create-4');
  chars = Array.of('l'); // with a variable number of arguments, regardless of number or type of the arguments
  log(chars); // [ 'l' ]
  log(chars.length); // 1

  // create-5
  log('\n// create-5');
  chars = Array.from('lol'); // from an array-like or iterable object
  log(chars); // [ 'l', 'o', 'l' ]
  log(chars.length); // 3

  // fill
  log('\n// fill');
  chars = Array.from('lol');
  chars.fill('c');
  log(chars); // [ 'c', 'c', 'c' ]

  chars = new Array(3);
  chars.fill('c', 1);
  log(chars); // [ <1 empty item>, 'c', 'c' ]
  chars.fill('c');
  log(chars); // [ 'c', 'c', 'c' ]

  chars = Array.from('lol');
  chars.fill('c', 1, 3);
  log(chars); // [ 'l', 'c', 'c' ]

  // copy
  log('\n// copy');
  chars = Array.from('dad');
  const copy = chars.slice();
  copy.push('l');
  log(copy); // [ 'd', 'a', 'd', 'l' ]
  log(chars); // [ 'd', 'a', 'd' ]

  // push
  log('\n// push');
  chars = Array.from('lol');
  chars.push('l');
  log(chars); // [ 'l', 'o', 'l', 'l' ]

  // pop
  log('\n// pop');
  log(chars.pop('l')); // l
  log(chars); // [ 'l', 'o', 'l' ]

  // shift
  log('\n// shift');
  log(chars.shift()); // l
  log(chars); // [ 'o', 'l' ]

  // unshift
  log('\n// unshift');
  chars.unshift('l');
  log(chars); // [ 'l', 'o', 'l' ]

  // reverse
  log('\n// reverse');
  chars = Array.from('dude'); // modifies array
  chars.reverse()
  log(chars); // [ 'e', 'd', 'u', 'd' ]

  // sort
  log('\n// sort');
  chars = Array.from('dude');
  chars.sort(); // modifies array
  log(chars); // [ 'd', 'd', 'e', 'u' ]

  // concat
  log('\n// concat');
  chars = Array.from('dude');
  chars.concat(['e']); // gives new array
  log(chars); // [ 'd', 'u', 'd', 'e' ]
  log(chars.concat(['e'])); // [ 'd', 'u', 'd', 'e', 'e' ]

  // inlcudes
  log('\n// inlcudes');
  log(chars.includes('e')); // true
  log(chars.includes('f')); // false

  // indexof
  log('\n// indexof');
  log(chars.indexOf('d')); // 0
  log(chars.indexOf('f')); // -1

  // lastindexof
  log('\n// lastindexof');
  log(chars.lastIndexOf('d')); // 2
  log(chars.lastIndexOf('f')); // -1

  // join
  log('\n// join');
  log(chars.join()); // d,u,d,e
  log(chars.join('')); // dude

  // toString
  log('\n// toString');
  log(chars.toString()); // d,u,d,e

  // iteration
  log('\n// iteration');
  chars = Array.from('dude');

  for (let i = 0; i < chars.length; i++) {
    log(chars[i]);
  }
  // d
  // u
  // d
  // e

  for (let char of chars) {
    log(char);
  }
  // d
  // u
  // d
  // e

  for (let char of chars.entries()) {
    log(char);
    // [ 0, 'd' ]
    // [ 1, 'u' ]
    // [ 2, 'd' ]
    // [ 3, 'e' ]
  }
  for (let char of chars.keys()) {
    log(char);
    // 0
    // 1
    // 2
    // 3
  }
  // not in nodejs
  // for (let char of chars.values()) { 
  //   log(char);
  // }

  chars.forEach((char, index, array) => log(char));
  // d
  // u
  // d
  // e

  // map
  log('\n// map');
  log(chars.map((char, index, array) => char + char)); // [ 'dd', 'uu', 'dd', 'ee' ]

  // reduce
  log('\n// reduce');
  log(chars.reduce((acc, char, index, array) => acc + char)); // dude
  log(chars.reduce((acc, char, index, array) => acc + char, 'hello ')); // hello dude

  // reduce right
  log('\n// reduce right');
  log(chars.reduceRight((acc, char, index, array) => acc + char)); // edud
  log(chars.reduceRight((acc, char, index, array) => acc + char, 'hello ')); // hello edud

  // every
  log('\n// every');
  log(chars.every((char, index, array) => char > 'a')); // true

  // some
  log('\n// some');
  log(chars.some((char, index, array) => char === 'u')); // true

  // filter
  log('\n// filter');
  log(chars.filter((char, index, array) => char === 'd')); // [ 'd', 'd' ]

  // find
  log('\n// find');
  log(chars.find((char, index, array) => char === 'd')); // d

  // find index
  log('\n// find index');
  log(chars.findIndex((char, index, array) => char === 'd')); // 0
};

// same for all the iteration methods, including for..of
function testArrayIteration() {
  log('\n// testArrayIteration');

  // The range of elements processed by forEach() is set before the first invocation of callback.
  // Elements which are appended to the array after the call to forEach() begins will not be visited by callback. 
  let chars = Array.from('lol');
  chars.forEach((char, index, array) => {
    chars.push('1');
    log(char);
  });
  // l
  // o
  // l
  log(chars); // [ 'l', 'o', 'l', '1', '1', '1' ]

  // If existing elements of the array are changed their value as passed to callback will be the value at the time forEach() visits them; 
  chars = Array.from('lol')
  chars.forEach((char, index, array) => {
    chars[1] = 'l';
    log(char);
  });
  // l
  // l
  // l
  log(chars); // [ 'l', 'l', 'l' ]

  // If existing elements of the array are delete their value as passed to callback will be the value at the time forEach() visits them;
  // elements that are deleted before being visited are not visited.  
  chars = Array.from('lol')
  chars.forEach((char, index, array) => {
    chars.pop();
    log(char);
  });
  // l
  // o
  log(chars); // [ 'l' ]

  // If elements that are already visited are removed (e.g. using shift()) during the iteration, later elements will be skipped
  chars = Array.from('abcdef')
  chars.forEach((char, index, array) => {
    chars.shift();
    log(char);
  });
  // a
  // c
  // e
  log(chars); //[ 'd', 'e', 'f' ]

  // No early termination
  chars = Array.from('lol');
  chars.forEach((char, index, array) => {
    // break; error
    log(char);
  });
  // l
  // o
  // l
  log(chars); // [ 'l', 'o', 'l' ]
};

//----Run----//
testArray();
testArrayIteration();

//-----------------------------Utility---------------------------//
function log(data) {
  console.log(data);
}
