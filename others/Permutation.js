function permutation(string, i, n) {
  (i === n) && console.log(i, string);
  for (let j = i; j <= n; j++) {
    console.log(i, j, string);
    [string[i], string[j]] = [string[j], string[i]];
    permutation(string, i + 1, n);
    [string[j], string[i]] = [string[i], string[j]];
  }
}

permutation('abc'.split(''), 0, 2);
