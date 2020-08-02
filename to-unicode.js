'use strict';
/**
 * Namespace for static methods that convert characters and strings to Unicode
 * @author S0AndS0
 * @copyright AGPL-3.0
 */
class toUnicode {
    /**
     * Converts character to Hex Unicode
     * @param {string} character
     * @return {string}
     * @author S0AndS0
     * @copyright AGPL-3.0
     * @example
     * toUnicode.fromCharacter('🐼');
     * //> "1f43c"
     */
    static fromCharacter(character) {
        return character.codePointAt(undefined).toString(16);
    }
    /**
     * Converts string to character array of Unicode(s)
     * @param {string} characters
     * @return {string[]}
     * @author S0AndS0
     * @copyright AGPL-3.0
     * @example
     * toUnicode.fromString('🎉 👋');
     * //> [ '1f389', '20', '1f44b' ]
     */
    static fromString(characters, prefix = '') {
        return [...characters].reduce((accumulator, character) => {
            const unicode = toUnicode.fromCharacter(character);
            accumulator.push(`${prefix}${unicode}`);
            return accumulator;
        }, []);
    }
}
/* istanbul ignore next */
if (typeof module !== 'undefined') {
    module.exports = toUnicode;
}
