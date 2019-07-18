//-----------------------------String---------------------------//
function testString() {
  // create-1
  log('\n// create-1');
  let string = 'test'
  log(string);
  log(string.length);

  // create-2
  log('\n// create-2');
  string = new String('test');
  log(string);
  log(string.length);

  // create-3
  log('\n// create-3');
  string = String.fromCharCode(65, 66, 67);
  log(string);
  log(string.length);

  // charAt
  log('\n// charAt')
  log(string.charAt(0));

  // charCodeAt
  log('\n// charCodeAt')
  log(string.charCodeAt(0));

  // concat
  log('\n// concat')
  log(string.concat('EFG'));

  // includes
  log('\n// includes')
  log(string.includes('A'));
  log(string.includes('EFG'));

  // ends with
  log('\n// endswith')
  log(string.endsWith('C'));

  // indexOf
  log('\n// indexOf')
  log(string.indexOf('A'));

  // lastIndexOf
  log('\n// lastIndexOf')
  log(string.lastIndexOf('C'));

  // slice
  log('\n// slice')
  log(string.slice(0, 1));
  log(string.slice(1));
  log(string.slice());

  // split
  log('\n// split')
  log(string.split(''));

  // starts with
  log('\n// startswith')
  log(string.startsWith('A'));

  // substr
  log('\n// substr')
  log(string.substr(1, 2));
  log(string.substr(0));

  // substring
  log('\n// substring')
  log(string.substring(1, 2));
  log(string.substring(1));

  // toLowerCase
  log('\n// toLowerCase')
  log(string.toLowerCase());

  // toUpperCase
  log('\n// toUpperCase')
  log(string.toUpperCase());

  // trim
  log('\n// trim')
  log('  lol'.trim());

  //search, replace, match, repeat - refer Mozilla MDN

  // iteration
  log('\n// iteration')
  for (let char of string) log(char);
  [...string].forEach(char => log(char)); // array methods
  // error
  // string.forEach(char => log(char));
}

//----Run----//
testString();


//-----------------------------Utility---------------------------//
function log(data) {
  console.log(data);
}
