'use strict';

module.exports = class JumpNode {
  constructor(value) {
    this.value = value;
    this.order = -1;
    this.next = null;
    this.jump = value;
  }
};
