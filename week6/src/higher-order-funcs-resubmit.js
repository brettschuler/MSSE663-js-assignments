"use strict";
exports.__esModule = true;
/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
var things = ['thing1', 'thing2'];
// create callback here
exports.mappedThings = things.map(function (thing, p) {
    return {
        id: p + 1,
        name: thing
    };
});
// create map here
exports.mappedThings = things.map(callback);
var filter = function (key) { return function (thing) { return thing.name === key; }; };
exports.filteredThing = function (key) { return exports.mappedThings.filter(filter(key)); };
