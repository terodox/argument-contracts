"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isTypeMatch(argument, type) {
    if (type == String) {
        return typeof argument == 'string' || argument instanceof String;
    }
    if (type == Number) {
        return typeof argument == 'number' || argument instanceof Number;
    }
    if (type == Date) {
        return (argument instanceof Date || argument) && JSON.stringify(new Date(argument)) !== 'null';
    }
    if (type == Function) {
        return typeof argument == 'function' || argument instanceof Function;
    }
    if (type == Object) {
        return argument !== null && typeof argument == 'object';
    }
    if (type == Boolean) {
        return typeof argument == 'boolean';
    }
    if (typeof Symbol != 'undefined' && type == Symbol) {
        return typeof argument == 'symbol';
    }
    return argument instanceof type;
}
function throwError(argument, argumentName, typeString) {
    var argumentString;
    try {
        argumentString = JSON.stringify(argument);
    }
    catch (_) {
        argumentString = argument;
    }
    throw new TypeError("Expected " + (argumentName || 'argument') + " to be " + typeString + ". Value received: " + argumentString);
}
var ArgumentContracts = (function () {
    function ArgumentContracts() {
    }
    ArgumentContracts.assertArray = function (argument, argumentName) {
        if (!Array.isArray(argument)) {
            throwError(argument, argumentName, 'an array');
        }
    };
    ArgumentContracts.assertArrayOf = function (argument, type, argumentName) {
        ArgumentContracts.assertArray(argument, argumentName);
        if (!argument.every(function (item) { return isTypeMatch(item, type); })) {
            throwError(argument, argumentName, "an array of " + type);
        }
    };
    ArgumentContracts.assertBoolean = function (argument, argumentName) {
        if (!isTypeMatch(argument, Boolean)) {
            throwError(argument, argumentName, 'a boolean');
        }
    };
    ArgumentContracts.assertDate = function (argument, argumentName) {
        if (!isTypeMatch(argument, Date)) {
            throwError(argument, argumentName, 'a boolean');
        }
    };
    ArgumentContracts.assertFunction = function (argument, argumentName) {
        if (!isTypeMatch(argument, Function)) {
            throwError(argument, argumentName, 'a function');
        }
    };
    ArgumentContracts.assertNumber = function (argument, argumentName) {
        if (!isTypeMatch(argument, Number)) {
            throwError(argument, argumentName, 'a number');
        }
    };
    ArgumentContracts.assertString = function (argument, argumentName) {
        if (!isTypeMatch(argument, String)) {
            throwError(argument, argumentName, 'a string');
        }
    };
    ArgumentContracts.assertSymbol = function (argument, argumentName) {
        if (!isTypeMatch(argument, Symbol)) {
            throwError(argument, argumentName, 'a symbol');
        }
    };
    ArgumentContracts.assertType = function (argument, type, argumentName) {
        if (!isTypeMatch(argument, type)) {
            throwError(argument, argumentName, "a " + type);
        }
    };
    return ArgumentContracts;
}());
exports.default = ArgumentContracts;
;
