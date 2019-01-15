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
    } catch (_) {
        argumentString = argument;
    }
    throw new TypeError('Expected ' + (argumentName || 'argument') + ' to be ' + typeString + '. Value received: ' + argumentString);
}

module.exports = {
    assertArray: function(argument, argumentName) {
        if (!Array.isArray(argument)) {
            throwError(argument, argumentName, 'an array');
        }
    },

    assertArrayOf: function(argument, type, argumentName) {
        this.assertArray(argument, argumentName);
        if (!argument.every(item => isTypeMatch(item, type))) {
            throwError(argument, argumentName, 'an array of ' + type);
        }
    },

    assertBoolean: function(argument, argumentName) {
        if (!isTypeMatch(argument, Boolean)) {
            throwError(argument, argumentName, 'a boolean');
        }
    },

    assertDate: function(argument, argumentName) {
        if (!isTypeMatch(argument, Date)) {
            throwError(argument, argumentName, 'a boolean');
        }
    },

    assertFunction: function(argument, argumentName) {
        if (!isTypeMatch(argument, Function)) {
            throwError(argument, argumentName, 'a function');
        }
    },

    assertNumber: function(argument, argumentName) {
        if (!isTypeMatch(argument, Number)) {
            throwError(argument, argumentName, 'a number');
        }
    },

    assertString: function(argument, argumentName) {
        if (!isTypeMatch(argument, String)) {
            throwError(argument, argumentName, 'a string');
        }
    },

    assertSymbol: function(argument, argumentName) {
        if (!isTypeMatch(argument, Symbol)) {
            throwError(argument, argumentName, 'a symbol');
        }
    },

    assertType: function(argument, type, argumentName) {
        if (!isTypeMatch(argument, type)) {
            throwError(argument, argumentName, 'a ' + type);
        }
    }
};