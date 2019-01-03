const ArgumentContracts = require('./index');

describe('ArgumentContracts', () => {
    it('should exist', () => {
        expect(ArgumentContracts).toEqual(expect.any(Function));
    });

    describe('assertString', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertString).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a string', () => {
            expect(() => ArgumentContracts.assertString(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertString(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertString(1234)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertString({})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertString([])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertString(()=>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertString(class thing {})).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a string and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertString(null, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is a string', () => {
            expect(() => ArgumentContracts.assertString('The string you need')).not.toThrow();
        });

        it('should NOT throw if argument is a String', () => {
            expect(() => ArgumentContracts.assertString(new String('The string you need'))).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertString(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertString(argument)).toThrowError(/Expected/);
        });
    });

    describe('assertNumber', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertNumber).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a number', () => {
            expect(() => ArgumentContracts.assertNumber(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNumber(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNumber('Some stringy thingy')).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNumber({})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNumber([])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNumber(()=>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNumber(class thing {})).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a number and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertNumber(null, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is a number', () => {
            expect(() => ArgumentContracts.assertNumber(1234)).not.toThrow();
        });

        it('should NOT throw if argument is a Number', () => {
            expect(() => ArgumentContracts.assertNumber(new Number(1234))).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertNumber(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertNumber(argument)).toThrowError(/Expected/);
        });
    });

    describe('assertDate', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertDate).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a Date', () => {
            expect(() => ArgumentContracts.assertDate(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate('Some stringy thingy')).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate({})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate([])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate(()=>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate(class thing {})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate(new Date('asdf'))).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a Date and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertDate(null, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is an Number because numbers are valid dates!', () => {
            expect(() => ArgumentContracts.assertDate(1234)).not.toThrow();
            expect(() => ArgumentContracts.assertDate(1234.1234)).not.toThrow();
        });

        it('should NOT throw if argument is a Date', () => {
            expect(() => ArgumentContracts.assertDate(new Date())).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertDate(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertDate(argument)).toThrowError(/Expected/);
        });
    });

    describe('assertFunction', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertFunction).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a function', () => {
            expect(() => ArgumentContracts.assertFunction(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertFunction(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertFunction('Some stringy thingy')).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertFunction({})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertFunction([])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertFunction(1234)).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a function and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertFunction(null, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is a function', () => {
            expect(() => ArgumentContracts.assertFunction(() => {})).not.toThrow();
            expect(() => ArgumentContracts.assertFunction(new Function())).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertFunction(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertFunction(argument)).toThrowError(/Expected/);
        });
    });

    describe('assertArray', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertArray).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a array', () => {
            expect(() => ArgumentContracts.assertArray(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArray(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArray('Some stringy thingy')).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArray({})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArray(1234)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArray(()=>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArray(class thing {})).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a array and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertArray(null, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is a array', () => {
            expect(() => ArgumentContracts.assertArray([])).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertArray(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertArray(argument)).toThrowError(/Expected/);
        });
    });

    describe('assertArrayOf', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertArrayOf).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a array', () => {
            expect(() => ArgumentContracts.assertArrayOf(null, String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArrayOf(undefined, String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArrayOf({}, String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArrayOf(1234, String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArrayOf(()=>{}, String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArrayOf(class thing {}, String)).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a array and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertArrayOf(null, String, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is an array of String', () => {
            expect(() => ArgumentContracts.assertArrayOf([ "Yay strings" ], String)).not.toThrow();
        });

        it('should NOT throw if argument is an array of String', () => {
            expect(() => ArgumentContracts.assertArrayOf([ new String("Yay strings") ], String)).not.toThrow();
        });

        it('should NOT throw if argument is an array of Number', () => {
            expect(() => ArgumentContracts.assertArrayOf([ 1234 ], Number)).not.toThrow();
        });

        it('should NOT throw if argument is an array of Number', () => {
            expect(() => ArgumentContracts.assertArrayOf([ new Number(1324) ], Number)).not.toThrow();
        });

        it('should NOT throw if argument is an array of Function', () => {
            expect(() => ArgumentContracts.assertArrayOf([ () => {} ], Function)).not.toThrow();
            expect(() => ArgumentContracts.assertArrayOf([ function () {} ], Function)).not.toThrow();
        });

        it('should NOT throw if argument is an array of Function', () => {
            expect(() => ArgumentContracts.assertArrayOf([ new Function(() => {}) ], Function)).not.toThrow();
        });

        it('should throw if argument is an array of Object, but contains a null', () => {
            expect(() => ArgumentContracts.assertArrayOf([ null ], Object)).toThrowError(/Expected/);
        });

        it('should NOT throw if argument is an array of Object', () => {
            expect(() => ArgumentContracts.assertArrayOf([ {} ], Object)).not.toThrow();
        });

        it('should NOT throw if argument is an array of Object', () => {
            expect(() => ArgumentContracts.assertArrayOf([ new Object() ], Object)).not.toThrow();
        });

        it('should NOT throw if argument is an array of Boolean', () => {
            expect(() => ArgumentContracts.assertArrayOf([ true ], Boolean)).not.toThrow();
            expect(() => ArgumentContracts.assertArrayOf([ false ], Boolean)).not.toThrow();
        });

        it('should NOT throw if argument is an array of Symbol', () => {
            expect(() => ArgumentContracts.assertArrayOf([ Symbol() ], Symbol)).not.toThrow();
        });

        it('should NOT throw if argument is an array of a specific type', () => {
            class TheTypeExists {}

            expect(() => ArgumentContracts.assertArrayOf([ new TheTypeExists() ], TheTypeExists)).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertArrayOf(argument, String);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertArrayOf(argument, String)).toThrowError(/Expected/);
        });
    });

    describe('assertType', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertType).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a array', () => {
            expect(() => ArgumentContracts.assertType(null, String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertType(undefined, String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertType({}, String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertType(1234, String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertType(()=>{}, String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertType(class thing {}, String)).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a array and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertType(null, String, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is a String', () => {
            expect(() => ArgumentContracts.assertType( "Yay strings" , String)).not.toThrow();
        });

        it('should NOT throw if argument is a String', () => {
            expect(() => ArgumentContracts.assertType( new String("Yay strings") , String)).not.toThrow();
        });

        it('should NOT throw if argument is a Number', () => {
            expect(() => ArgumentContracts.assertType( 1234 , Number)).not.toThrow();
        });

        it('should NOT throw if argument is a Number', () => {
            expect(() => ArgumentContracts.assertType( new Number(1324) , Number)).not.toThrow();
        });

        it('should NOT throw if argument is a Function', () => {
            expect(() => ArgumentContracts.assertType( () => {} , Function)).not.toThrow();
            expect(() => ArgumentContracts.assertType( function () {} , Function)).not.toThrow();
        });

        it('should NOT throw if argument is a Function', () => {
            expect(() => ArgumentContracts.assertType( new Function(() => {}) , Function)).not.toThrow();
        });

        it('should throw if argument is an Object, but contains a null', () => {
            expect(() => ArgumentContracts.assertType( null , Object)).toThrowError(/Expected/);
        });

        it('should NOT throw if argument is an Object', () => {
            expect(() => ArgumentContracts.assertType( {} , Object)).not.toThrow();
        });

        it('should NOT throw if argument is an Object', () => {
            expect(() => ArgumentContracts.assertType( new Object() , Object)).not.toThrow();
        });

        it('should NOT throw if argument is an Boolean', () => {
            expect(() => ArgumentContracts.assertType( true , Boolean)).not.toThrow();
            expect(() => ArgumentContracts.assertType( false , Boolean)).not.toThrow();
        });

        it('should NOT throw if argument is a Symbol', () => {
            expect(() => ArgumentContracts.assertType( Symbol() , Symbol)).not.toThrow();
        });

        it('should NOT throw if argument is a a specific type', () => {
            class TheTypeExists {}

            expect(() => ArgumentContracts.assertType( new TheTypeExists() , TheTypeExists)).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertType(argument, String);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertType(argument, String)).toThrowError(/Expected/);
        });
    });

    describe('assertBoolean', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertBoolean).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a string', () => {
            expect(() => ArgumentContracts.assertBoolean(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertBoolean(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertBoolean(1234)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertBoolean({})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertBoolean([])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertBoolean(()=>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertBoolean(class thing {})).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a string and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertBoolean(null, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is a boolean', () => {
            expect(() => ArgumentContracts.assertBoolean(false)).not.toThrow();
        });

        it('should NOT throw if argument is a Boolean', () => {
            expect(() => ArgumentContracts.assertBoolean(Boolean(true))).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertBoolean(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertBoolean(argument)).toThrowError(/Expected/);
        });
    });

    describe('assertSymbol', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertSymbol).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a string', () => {
            expect(() => ArgumentContracts.assertSymbol(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertSymbol(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertSymbol(1234)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertSymbol({})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertSymbol([])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertSymbol(()=>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertSymbol(class thing {})).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a string and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertSymbol(null, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is a known Symbol', () => {
            expect(() => ArgumentContracts.assertSymbol(Symbol.iterator)).not.toThrow();
        });

        it('should NOT throw if argument is a custom Symbol', () => {
            expect(() => ArgumentContracts.assertSymbol(Symbol(1))).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertSymbol(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertSymbol(argument)).toThrowError(/Expected/);
        });
    });
});