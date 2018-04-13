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

module.exports = class ArgumentContracts {
    static assertArray(argument, argumentName) {
        if(!Array.isArray(argument)) {
            throw new TypeError(`Expected ${argumentName || 'argument'} to be a string. Value received: ${argument}`);
        }
    }

    static assertArrayOf(argument, type, argumentName) {
        ArgumentContracts.assertArray(argument, argumentName);
        if(!argument.every(item => isTypeMatch(item, type))) {
            throw new TypeError(`Expected ${argumentName || 'argument'} to be an array of ${type}. Value received: ${argument}`);
        }
    }

    static assertFunction(argument, argumentName) {
        if(!isTypeMatch(argument, Function)) {
            throw new TypeError(`Expected ${argumentName || 'argument'} to be a function. Value received: ${argument}`);
        }
    }

    static assertNumber(argument, argumentName) {
        if(!isTypeMatch(argument, Number)) {
            throw new TypeError(`Expected ${argumentName || 'argument'} to be a number. Value received: ${argument}`);
        }
    }

    static assertString(argument, argumentName) {
        if(!isTypeMatch(argument, String)) {
            throw new TypeError(`Expected ${argumentName || 'argument'} to be a string. Value received: ${argument}`);
        }
    }

    static assertType(argument, type, argumentName) {
        if(!isTypeMatch(argument, type)) {
            throw new TypeError(`Expected ${argumentName || 'argument'} to be a ${type}. Value received: ${argument}`);
        }
    }
}