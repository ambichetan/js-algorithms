const TrieNode = function () {
  this.children = Array(26);
  this.end = false;
}

const Trie = class {
  constructor() {
    this.root = new TrieNode();
  }
  insert(key) {
    let ite = this.root;
    for (let char of key) {
      const code = char.charCodeAt('0') - 'a'.charCodeAt('0');
      if (!ite.children[code]) {
        ite.children[code] = new TrieNode();
      }
      ite = ite.children[code];
    }
    ite.end = true;
  }
  search(key) {
    let ite = this.root;
    for (let char of key) {
      const code = char.charCodeAt('0') - 'a'.charCodeAt('0');
      if (!ite.children[code]) {
        return false;
      }
      ite = ite.children[code];
    }
    return ite.end;
  }
};

const trie = new Trie();
const words = ["the", "a", "there", "answer", "any", "by", "bye", "their"];
words.forEach(word => { trie.insert(word) });
words.push('hello', 'aa', 'thee', 'an');
console.log(words.map(word => trie.search(word)));

module.exports = Trie;
