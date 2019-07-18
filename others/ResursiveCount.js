const people = [1, 1, 1, 1, 1, 1, 1, 1];

function recursiveCount(people, i) {
  if (!people[i]) return 0;
  return 1 + recursiveCount(people, ++i);
}

console.log(recursiveCount(people, 0));
