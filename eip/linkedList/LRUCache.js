var Node = function (value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.get(key)) {
    var node = this.map.get(key);
    this.deleteNode(node);
    this.addToTail(node);
    return node.value;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.get(key)) {
    var node = this.map.get(key);
    this.deleteNode(node);
    node.value = value;
    this.addToTail(node);
  } else {
    var node = new Node(value);
    this.addToTail(node);
    this.map.set(key, node);
  }
  return null;
};

LRUCache.prototype.addToTail = function (node) {
  if (this.size === 0) {
    this.head = node;
    this.tail = node;
    this.size++;
    return;
  }
  if (this.size === this.capacity) this.deleteNode(this.head);
  this.tail.next = node;
  this.tail = node;
  this.size++;
};

LRUCache.prototype.deleteNode = function (node) {
  if (this.head === node) {
    this.head = this.head.next;
  }
  if (this.tail === node) {
    this.tail = this.tail.prev;
  }
  if (node.prev) {
    node.prev.next = node.next;
  }
  node.next = null;
  this.map.delete(node.value);
  this.size--;
};

// null,null,1,null,-1,null,-1,3,4
var obj = new LRUCache(2);
console.log(obj.put(1, 1));
console.log(obj.put(2, 2));
console.log(obj.get(1));
console.log(obj.put(3, 3));
console.log(obj.get(2));
console.log(obj.put(4, 4));
console.log(obj.get(1));
console.log(obj.get(3));
console.log(obj.get(4));
