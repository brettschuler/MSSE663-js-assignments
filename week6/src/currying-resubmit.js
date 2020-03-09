"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function curryMe(string1, string2, string3) {
    return string1 + ' ' + string2 + ' ' + string3;
}
// source code here
exports.curryMe2 = function (string1) { return function (string2) { return function (string3) {
    return string1 + ' ' + string2 + ' ' + string3;
}; }; };
// #2 Hoist and convert nested functions to curried functions
function doMath(a) {
    return function add(b) {
        return function subtract(c) {
            return a + b - c;
        };
    };
}
// source code here
exports.subtract = function (a) { return function (b) { return function (c) { return a + b - c; }; }; };
exports.add = function (a) { return function (b) { return function (c) { return exports.subtract(a)(b)(c); }; }; };
exports.doMath2 = function (a) { return function (b) { return function (c) { return exports.add(a)(b)(c); }; }; };
// #3 Write a curried function that returns an array containing the ninjas who have a black belt
var ninjasOne = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Leonardo', belt: 'black' },
    { name: 'Mr. Miyagi', belt: 'black' },
    { name: 'Rocky', belt: 'black' },
    { name: 'Colt', belt: 'green' },
    { name: 'Tum Tum', belt: 'white' },
    { name: 'Haru', belt: 'white' },
    { name: 'The Bride', belt: 'black' },
    { name: 'Cammy', belt: 'black' },
    { name: 'Wong Fei-hung', belt: 'green' }
];
var ninjasTwo = [
    { name: 'Michelangelo', belt: 'white' },
    { name: 'Donatello', belt: 'green' },
    { name: 'Raphael', belt: 'black' },
    { name: 'Jim', belt: 'black' },
    { name: 'The Rat', belt: 'black' }
];
// source code here
exports.blackBelts = __spreadArrays(ninjasOne, ninjasTwo).filter(function (ninja) { return ninja.belt === "black"; });
var statusTypes = {
    white: 'grasshopper',
    green: 'warrior',
    black: 'sensei'
};
var gamerStatusTypes = {
    white: 'Noob',
    green: 'Choob',
    black: 'Legend'
};
// source code here
exports.NinjaWarrior1 = ninjasOne.map(function (ninja) {
    return __assign(__assign({}, ninjasOne), { status: statusTypes[ninja.belt] });
});
