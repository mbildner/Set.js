;(function (global) { 'use strict';
  function makeUnique (arr) {
    var obj = {};

    arr.forEach(function (member) {
      obj[member] = true;
    });

    return Object.keys(obj);
  }

  function Set (list) {
    this.internalStore = makeUnique(list);
  }

  Set.prototype.add = function (value) {
    this.internalStore.push(value);
    this.internalStore = makeUnique(this.internalStore);
  };

  Set.prototype.intersect = function (set) {
    var foreignSet = {};
    var intersectList = [];

    set.members().forEach(function (member) {
      foreignSet[member] = true;
    });

    this.members().forEach(function (member) {
      if (foreignSet[member]) {
        intersectList.push(member);
      }
    });

    return new Set(intersectList);
  };

  Set.prototype.union = function (set) {
    var allMembers = this.members().concat(set.members());
    return new Set(allMembers);
  };

  Set.prototype.length = function () {
    return this.internalStore.length;
  };

  Set.prototype.isMember = function (value) {
    return this.internalStore.indexOf(value) !== -1;
  };

  Set.prototype.members = function () {
    return this.internalStore;
  };

  Set.prototype.pop = function () {
    return this.internalStore.pop();
  };

  Set.prototype.random = function () {
    if (this.internalStore.length) {
      return this.internalStore[Math.round(Math.random() * this.internalStore.length)];
    }
  };

  Set.prototype.remove = function (value) {
    this.internalStore = this.internalStore.filter(function (member) {
      return member !== value;
    });
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Set;
    }

    exports.Set = Set;
  } else {
    this['Set'] = Set;
  }
}).call(this);




