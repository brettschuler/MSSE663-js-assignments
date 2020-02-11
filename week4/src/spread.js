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
// #1 Array copying
exports.numbers = [1, 2, 3, 4, 5];
exports.originalNumbers = exports.numbers.map(function (number) { return number; });
console.log(exports.originalNumbers);
// refactor here
var numbersR = [1, 2, 3, 4, 5];
var even = numbersR[0], odd = numbersR.slice(1);
exports["default"] = numbersR;
exports.originalNumbersR = numbersR.map(function (number) { return number; });
console.log(exports.originalNumbersR);
// #2 Combining arrays
exports.winners = ['first'];
exports.runnerUps = ['second', 'third', 'fourth', 'fifth'];
exports.originalContenders = exports.runnerUps.unshift(exports.winners[0]);
console.log(exports.originalContenders);
// refactor here
exports.winnersR = ['first'];
exports.runnerUpsR = ['second', 'third', 'fourth', 'fifth'];
exports.combinedR = __spreadArrays(exports.winnersR, exports.runnerUpsR);
exports.originalContendersR = exports.runnerUpsR.unshift(exports.winnersR[0]);
console.log(exports.originalContendersR);
console.log(exports.combinedR);
// #3 Combining objects
exports.bob = {
    man: 'Bob'
};
exports.kyle = {
    boy: 'Kyle'
};
exports.originalPersons = Object.assign(exports.bob, exports.kyle);
// refactor here
exports.bobR = {
    manR: 'Bob'
};
exports.kyleR = {
    boyR: 'Kyle'
};
exports.originalPersonsR = Object.assign(__assign(__assign({}, exports.bobR), exports.kyleR));
console.log(exports.originalPersonsR);
// #4 Modifying values in arrays of objects
exports.data = [
    {
        id: 0,
        task: 'Do the thing'
    },
    {
        id: 1,
        task: 'Do the other thing'
    },
    {
        id: 2,
        task: 'Do the last thing'
    }
];
exports.update = {
    id: 1,
    task: 'Do the other thing... again'
};
exports.originalUpdates = exports.data.map(function (task) {
    if (task.id === exports.update.id) {
        return Object.assign(task, exports.update);
    }
    return task;
});
// refactor here
exports.dataR = [
    {
        id: 0,
        task: 'Do the thing'
    },
    {
        id: 1,
        task: 'Do the other thing'
    },
    {
        id: 2,
        task: 'Do the last thing'
    }
];
exports.updateR = {
    id: 1,
    task: 'Do the other thing... again'
};
exports.originalUpdatesR = exports.dataR.map(function (task) {
    if (task.id === exports.updateR.id) {
        return Object.assign(__spreadArrays(exports.dataR), exports.updateR);
    }
    return task;
});
console.log(exports.originalUpdatesR);
