import coerce from '@meltwater/coerce';

function isTypeMatch(argument, type) {
    if (type == String) {
        return typeof argument === 'string' || argument instanceof String;
    }

    if (type == Number) {
        return typeof argument === 'number' || argument instanceof Number;
    }

    if (type == Date) {
        return (argument instanceof Date || argument) && JSON.stringify(new Date(argument)) !== 'null';
    }

    if (type == Function) {
        return typeof argument === 'function' || argument instanceof Function;
    }

    if (type == Object) {
        return argument !== null && typeof argument === 'object';
    }

    if (type == Boolean) {
        return typeof argument === 'boolean';
    }

    if (typeof Symbol != 'undefined' && type == Symbol) {
        return typeof argument === 'symbol';
    }

    return false;
}

interface isPassedTypeResponse {
    isTypeMatch: Boolean;
    innerError?: Error;
}

function isPassedType(argument, type): isPassedTypeResponse {
    debugger;
    if(argument === null || argument === undefined) {
        return {
            isTypeMatch: false,
            innerError: new Error('argument provided was either null or undefined')
        };
    }

    if(!isTypeMatch(argument, type)) {
        try {
            coerce(argument, type, '');
            return {
                isTypeMatch: true
            };
        } catch(error) {
            return {
                isTypeMatch: false,
                innerError: error
            };
        }
    }
    return {
        isTypeMatch: true
    };
}

interface ArgumentError {
    argument: any;
    argumentName?: String|undefined;
    typeString: String;
}

function throwError(argumentError: ArgumentError) {
    let argumentString;
    try {
        argumentString = JSON.stringify(argumentError.argument);
    } catch (_) {
        argumentString = argumentError.argument;
    }
    throw new TypeError(`Expected ${argumentError.argumentName || 'argument'} to be ${argumentError.typeString}. Value received: ${argumentString}`);
}

export default class ArgumentContracts {
    static assertArray(argument: Array<any>, argumentName?: String) {
        if (!Array.isArray(argument)) {
            throwError({ argument, argumentName, typeString: 'an array' });
        }
    }

    static assertArrayOf<T>(argument: Array<T>, type: any, argumentName?: String) {
        ArgumentContracts.assertArray(argument, argumentName);
        argument.forEach(item => {
            const isPassedTypeResponse = isPassedType(item, type);
            if(!isPassedTypeResponse.isTypeMatch) {
                throwError({ argument, argumentName, typeString: `an array of ${type}` });
            }
        });
    }

    static assertType<T>(argument: T, type: any, argumentName?: String) {
        const isPassedTypeResponse = isPassedType(argument, type);
        if(!isPassedTypeResponse.isTypeMatch) {
            throwError({ argument, argumentName, typeString: `an array of ${type}` });
        }
    }

    static assertBoolean(argument: Boolean, argumentName?: String) {
        if (!isTypeMatch(argument, Boolean)) {
            throwError({ argument, argumentName, typeString: 'a boolean' });
        }
    }

    static assertDate(argument: Date|Number, argumentName?: String) {
        if (!isTypeMatch(argument, Date)) {
            throwError({ argument, argumentName, typeString: 'a boolean' });
        }
    }

    static assertFunction(argument: Function, argumentName?: String) {
        if (!isTypeMatch(argument, Function)) {
            throwError({ argument, argumentName, typeString: 'a function' });
        }
    }

    static assertNumber(argument: Number, argumentName?: String) {
        if (!isTypeMatch(argument, Number)) {
            throwError({ argument, argumentName, typeString: 'a number' });
        }
    }

    static assertString(argument: String, argumentName?: String) {
        if (!isTypeMatch(argument, String)) {
            throwError({ argument, argumentName, typeString: 'a string' });
        }
    }

    static assertSymbol(argument: Symbol, argumentName?: String) {
        if (!isTypeMatch(argument, Symbol)) {
            throwError({ argument, argumentName, typeString: 'a symbol' });
        }
    }
}