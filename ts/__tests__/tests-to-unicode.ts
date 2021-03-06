'use strict';


/**
 * Tests modules within `to-unicode.js` script
 * @author S0AndS0
 * @copyright AGPL-3.0
 */
class toUnicode_Test {
  toUnicode: any;
  min_code_point: number;
  max_code_point: number;

  constructor(min_code_point: number = 161, max_code_point: number = 1114111) {
    this.toUnicode = require('../to-unicode.js');
    this.min_code_point = min_code_point;
    this.max_code_point = max_code_point;
  }

  /**
   *
   */
  randomCodePoint() {
    return Math.random() * (this.max_code_point - this.min_code_point + 1) + this.min_code_point | 0;
  }

  /**
   * Runs all tests in specified order
   */
  runTests() {
    this.testInvariance()
  }

  /**
   * Tests if `fromCharacter()` and `fromString()` functions are reversible.
   */
  testInvariance() {
    const character_code_list = Array(99).fill(0).map((_) => {
      return this.randomCodePoint();
    });

    let unicode_list = [];
    let characters_string = '';

    test('Is `fromCharacter()` invariant?', () => {
      character_code_list.forEach((code_point) => {
        const character = String.fromCodePoint(code_point);
        const unicode = this.toUnicode.fromCharacter(character);
        const decimal = Number(`0x${unicode}`);

        expect(decimal).toEqual(code_point);

        unicode_list.push(unicode);
        characters_string += character;
      });
    });

    test('Is `fromString()` invariant?', () => {
      expect(this.toUnicode.fromString(characters_string)).toStrictEqual(unicode_list);
    });
  }
}


const test_toUnicode: toUnicode_Test = new toUnicode_Test();
test_toUnicode.runTests();

