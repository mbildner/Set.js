var Set = require('./Set.js');

function hasDuplicates (arr) {
  return arr.some(function (member) {
    var indx = arr.indexOf(member);
    var lastIndex = arr.lastIndexOf(member);
    return (indx !== -1 && lastIndex !== -1 && indx !== lastIndex);
  });
}

describe('Set', function () {
  var words,
    words2,
    wordsSet,
    wordsSet2,
    wordsExpectedMembers,
    words2ExpectedMembers,
    wordsSetExpectedLength,
    wordsSet2ExpectedLength,
    intersectionExpectedMembers,
    emptySetExpectedLength;

  beforeEach(function () {
    words = 'case tower processor memory memory network network'.split(' ');
    words2 = 'case tower wall tank shell shell rifle rifle'.split(' ');

    wordsExpectedMembers = 'case tower processor memory network'.split(' ');
    words2ExpectedMembers = 'case tower wall tank shell rifle'.split(' ');
    emptySetExpectedMembers = [];

    intersectionExpectedMembers = 'case tower'.split(' '),
    unionExpectedMembers = 'case tower processor memory network wall tank shell rifle'.split(' ');

    wordsSet = new Set(words);
    wordsSet2 = new Set(words2);
    emptySet = new Set([]);

    // counted by hand
    wordsSetExpectedLength = 5;
    wordsSet2ExpectedLength = 6;
    // by definition
    emptySetExpectedLength = 0;

  });

  it('should produce unique sets when newed', function () {
    expect(hasDuplicates(wordsSet.members())).toBe(false);
    expect(hasDuplicates(wordsSet2.members())).toBe(false);
    expect(hasDuplicates(emptySet.members())).toBe(false);
  });

  it('should support getting length', function () {
    expect(wordsSet.length()).toBe(wordsSetExpectedLength);
    expect(wordsSet2.length()).toBe(wordsSet2ExpectedLength);
    expect(emptySet.length()).toBe(emptySetExpectedLength);
  });

  it('should support adding a member', function () {
    wordsSet.add('thisisalmostdefinitelyunique');
    expect(wordsSet.length()).toBe(wordsSetExpectedLength + 1);
    expect(wordsSet.isMember('thisisalmostdefinitelyunique')).toBe(true);

    wordsSet2.add('thisisalmostdefinitelyunique');
    expect(wordsSet2.length()).toBe(wordsSet2ExpectedLength + 1);
    expect(wordsSet2.isMember('thisisalmostdefinitelyunique')).toBe(true);

    emptySet.add('thisisalmostdefinitelyunique');
    expect(emptySet.length()).toBe(emptySetExpectedLength + 1);
    expect(emptySet.isMember('thisisalmostdefinitelyunique')).toBe(true);

  });

  it('should support membership testing', function () {
    expect(wordsSet.isMember('notthewordsyourelookingfor')).toBe(false);
    expect(wordsSet2.isMember('notthewordsyourelookingfor')).toBe(false);
    expect(emptySet.isMember('notthewordsyourelookingfor')).toBe(false);

    expect(wordsSet.isMember('case')).toBe(true);
    expect(wordsSet2.isMember('shell')).toBe(true);

    // cannot test positive for empty set
  });

  it('should support getting all set members', function () {
    expect(wordsSet.members().sort()).toEqual(wordsExpectedMembers.sort());
    expect(wordsSet2.members().sort()).toEqual(words2ExpectedMembers.sort());
    expect(emptySet.members().sort()).toEqual(emptySetExpectedMembers.sort());
  });

  it('should find intersection of sets', function () {
    expect(wordsSet.intersect(wordsSet2).members().sort()).toEqual(intersectionExpectedMembers.sort());
    expect(wordsSet.intersect(emptySet).members().sort()).toEqual([]);
  });

  it('should find the union of sets', function () {
    expect(wordsSet.union(wordsSet2).members().sort()).toEqual(unionExpectedMembers.sort());
    expect(wordsSet.union(emptySet).members()).toEqual(wordsSet.members());
  });

  it('should pop random elements from set', function () {
    var poppedWordElement = wordsSet.pop();

    expect(wordsSet.members()).not.toContain(poppedWordElement);
    expect(words).toContain(poppedWordElement);
    expect(wordsSet.length()).toBe(wordsSetExpectedLength - 1);

    expect(emptySet.pop()).toBeUndefined();
    expect(emptySet.length()).toBe(0);
  });

  it('should find random element', function () {
    var randomWord = wordsSet.random();

    expect(wordsSet.members()).toContain(randomWord);
    expect(words).toContain(randomWord);

    expect(emptySet.random()).toBeUndefined();
  });

  it('should remove elements from set', function () {
    var wordToRemove = 'case';

    wordsSet.remove(wordToRemove);
    wordsSet.remove('something it does not contain');

    expect(wordsSet.members()).not.toContain(wordToRemove);
    expect(wordsSet.length()).toBe(wordsSetExpectedLength - 1);
  });


});
