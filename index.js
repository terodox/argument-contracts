function isTypeMatch(argument, type) {
    if (type == String) {
        return typeof argument == 'string' || argument instanceof String;
    }

    if (type == Number) {
        return typeof argument == 'number' || argument instanceof Number;
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
    let argumentString;
    try {
        argumentString = JSON.stringify(argument);
    } catch (_) {
        argumentString = argument;
    }
    throw new TypeError(`Expected ${argumentName || 'argument'} to be ${typeString}. Value received: ${argumentString}`);
}

module.exports = class ArgumentContracts {
    static assertArray(argument, argumentName) {
        if (!Array.isArray(argument)) {
            throwError(argument, argumentName, 'an array');
        }
    }

    static assertArrayOf(argument, type, argumentName) {
        ArgumentContracts.assertArray(argument, argumentName);
        if (!argument.every(item => isTypeMatch(item, type))) {
            throwError(argument, argumentName, `an array of ${type}`);
        }
    }

    static assertFunction(argument, argumentName) {
        if (!isTypeMatch(argument, Function)) {
            throwError(argument, argumentName, 'a function');
        }
    }

    static assertNumber(argument, argumentName) {
        if (!isTypeMatch(argument, Number)) {
            throwError(argument, argumentName, 'a number');
        }
    }

    static assertString(argument, argumentName) {
        if (!isTypeMatch(argument, String)) {
            throwError(argument, argumentName, 'a string');
        }
    }

    static assertType(argument, type, argumentName) {
        if (!isTypeMatch(argument, type)) {
            throwError(argument, argumentName, `a ${type}`);
        }
    }
};