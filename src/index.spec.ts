import ArgumentContracts from './index';

class SimpleClass {
    public readonly value: string;
    constructor(options) {
        if(typeof options.value !== 'string') {
            throw new TypeError('Failure is always an options');
        }
    }
}

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
            expect(() => ArgumentContracts.assertString(<any>1234)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertString(<any>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertString(<any>[])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertString(<any>(()=>{}))).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertString(<any>class thing {})).toThrowError(/Expected/);
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
            const argument: any = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertString(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument: any = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertString(argument)).toThrowError(/Expected/);
        });
    });

    describe('assertNonWhiteSpaceString', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertNonWhiteSpaceString).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a string', () => {
            expect(() => ArgumentContracts.assertNonWhiteSpaceString(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNonWhiteSpaceString(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNonWhiteSpaceString('')).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNonWhiteSpaceString('     ')).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNonWhiteSpaceString(<any>1234)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNonWhiteSpaceString(<any>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNonWhiteSpaceString(<any>[])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNonWhiteSpaceString(<any>(()=>{}))).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNonWhiteSpaceString(<any>class thing {})).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a string and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertNonWhiteSpaceString(null, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is a string', () => {
            expect(() => ArgumentContracts.assertNonWhiteSpaceString('The string you need')).not.toThrow();
        });

        it('should NOT throw if argument is a String', () => {
            expect(() => ArgumentContracts.assertNonWhiteSpaceString(new String('The string you need'))).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument: any = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertNonWhiteSpaceString(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument: any = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertNonWhiteSpaceString(argument)).toThrowError(/Expected/);
        });
    });

    describe('assertNotNil', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertNotNil).toEqual(expect.any(Function));
        });

        it('should throw if argument is null or undefined', () => {
            expect(() => ArgumentContracts.assertNotNil(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNotNil(undefined)).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is null and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertNotNil(null, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is not null or undefined', () => {
            expect(() => ArgumentContracts.assertNotNil('A non null or undefined value')).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument: any = null;
            try {
                ArgumentContracts.assertNotNil(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });
    });

    describe('assertNumber', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertNumber).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a number', () => {
            expect(() => ArgumentContracts.assertNumber(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNumber(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNumber(<any>'Some stringy thingy')).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNumber(<any>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNumber(<any>[])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNumber(<any>(()=>{}))).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertNumber(<any>(class thing {}))).toThrowError(/Expected/);
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
            const argument: any = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertNumber(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument: any = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertNumber(argument)).toThrowError(/Expected/);
        });
    });

    describe('assertObject', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertObject).toEqual(expect.any(Function));
        });

        it('should throw if argument is not an object', () => {
            expect(() => ArgumentContracts.assertObject(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertObject(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertObject(<any>'Some stringy thingy')).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertObject(<any>1234)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertObject(<any>true)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertObject(<any>(()=>{}))).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertObject(<any>(class thing {}))).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a object and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertObject(null, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is an object', () => {
            expect(() => ArgumentContracts.assertObject({})).not.toThrow();
        });

        it('should NOT throw if argument is an Object', () => {
            expect(() => ArgumentContracts.assertObject(new Object())).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument: any = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertObject(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });
    });

    describe('assertDate', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertDate).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a Date', () => {
            expect(() => ArgumentContracts.assertDate(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate(<any>'Some stringy thingy')).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate(<any>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate(<any>[])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate(<any>(()=>{}))).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertDate(<any>(class thing {}))).toThrowError(/Expected/);
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
            const argument: any = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertDate(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument: any = { herWeGo: 'again' };
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
            expect(() => ArgumentContracts.assertFunction(<any>'Some stringy thingy')).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertFunction(<any>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertFunction(<any>[])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertFunction(<any>1234)).toThrowError(/Expected/);
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
            const argument:any = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertFunction(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument: any = { herWeGo: 'again' };
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
            expect(() => ArgumentContracts.assertArray(<any>'Some stringy thingy')).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArray(<any>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArray(<any>1234)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArray(<any>(()=>{}))).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArray(<any>(class thing {}))).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a array and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertArray(null, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is a array', () => {
            expect(() => ArgumentContracts.assertArray([])).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument: any = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertArray(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument: any = { herWeGo: 'again' };
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
            expect(() => ArgumentContracts.assertArrayOf(<any>{}, String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArrayOf(<any>1234, String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArrayOf(<any>(()=>{}), String)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertArrayOf(<any>(class thing {}), String)).toThrowError(/Expected/);
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
            expect(() => ArgumentContracts.assertArrayOf<Number>([ 1234 ], Number)).not.toThrow();
        });

        it('should NOT throw if argument is an array of Number', () => {
            expect(() => ArgumentContracts.assertArrayOf([ new Number(1324) ], Number)).not.toThrow();
        });

        it('should NOT throw if argument is an array of Function', () => {
            expect(() => ArgumentContracts.assertArrayOf([ () => {} ], Function)).not.toThrow();
            expect(() => ArgumentContracts.assertArrayOf([ function () {} ], Function)).not.toThrow();
        });

        it('should NOT throw if argument is an array of Function', () => {
            expect(() => ArgumentContracts.assertArrayOf([ new Function() ], Function)).not.toThrow();
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

            expect(() => ArgumentContracts.assertArrayOf<TheTypeExists>([ new TheTypeExists() ], <any>TheTypeExists)).not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument: any = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertArrayOf(argument, String);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument: any = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertArrayOf(argument, String)).toThrowError(/Expected/);
        });

        it('should not throw for objects that are duck typable', () => {
            const argument = {
                value: 'abcd'
            };

            expect(() => ArgumentContracts.assertArrayOf<SimpleClass>([argument, argument, argument, argument], SimpleClass, 'argument')).not.toThrow();
        });

        it('should not throw for objects that fail to be duck typed', () => {
            const argument: any = {
                value: 1234
            };

            expect(() => ArgumentContracts.assertArrayOf<SimpleClass>([argument, argument, argument, argument], SimpleClass, 'argument')).toThrowError(/argument/);
        });

        it('should throw for an array of arrays that is passed strings', () => {
            const argument:any = 'abcd';

            expect(() => ArgumentContracts.assertArrayOf<Array<any>>([argument, argument, argument, argument], Array, 'argument')).toThrowError(/argument/);
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
            expect(() => ArgumentContracts.assertType( new Function() , Function)).not.toThrow();
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
            const argument: any = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertType(argument, String)).toThrowError(/Expected/);
        });

        it('should not throw for objects that are duck typable', () => {
            const argument = {
                value: 'abcd'
            };

            expect(() => ArgumentContracts.assertType(argument, SimpleClass, 'argument')).not.toThrow();
        });

        it('should throw for objects that fail to be duck typed', () => {
            const argument: any = {
                value: 1234
            };

            expect(() => ArgumentContracts.assertType<SimpleClass>(argument, SimpleClass, 'argument')).toThrowError(/argument/);
        });
    });

    describe('assertBoolean', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertBoolean).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a string', () => {
            expect(() => ArgumentContracts.assertBoolean(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertBoolean(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertBoolean(<any>1234)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertBoolean(<any>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertBoolean(<any>[])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertBoolean(<any>(()=>{}))).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertBoolean(<any>(class thing {}))).toThrowError(/Expected/);
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
            const argument: any = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertBoolean(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument: any = { herWeGo: 'again' };
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
            expect(() => ArgumentContracts.assertSymbol(<any>1234)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertSymbol(<any>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertSymbol(<any>[])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertSymbol(<any>(()=>{}))).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertSymbol(<any>class thing {})).toThrowError(/Expected/);
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
            const argument: any = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertSymbol(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument: any = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertSymbol(argument)).toThrowError(/Expected/);
        });
    });

    describe('assertUrl', () => {
        it('should be a static method', () => {
            expect(ArgumentContracts.assertUrl).toEqual(expect.any(Function));
        });

        it('should throw if argument is not a string', () => {
            expect(() => ArgumentContracts.assertUrl(null)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertUrl(undefined)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertUrl(<any>1234)).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertUrl(<any>{})).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertUrl(<any>[])).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertUrl(<any>(()=>{}))).toThrowError(/Expected/);
            expect(() => ArgumentContracts.assertUrl(<any>class thing {})).toThrowError(/Expected/);
        });

        it('should throw error with argumentName if argument is not a string and argument name is provided', () => {
            const argumentName = 'thatThingYouLike';
            expect(() => ArgumentContracts.assertUrl(null, argumentName)).toThrowError(new RegExp(argumentName));
        });

        it('should NOT throw if argument is a string', () => {
            expect(() => ArgumentContracts.assertUrl('https://things.and.stuff')).not.toThrow();
        });

        it('should NOT throw if argument is a complex Url', () => {
            expect(() => ArgumentContracts.assertUrl(new String('http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&docid=nIv5rk2GyP3hXM&tbnid=isiOkMe3nCtexM:&ved=0CAUQjRw&url=http%3A%2F%2Fanimalcrossing.wikia.com%2Fwiki%2FLion&ei=ygZXU_2fGKbMsQTf4YLgAQ&bvm=bv.65177938,d.aWc&psig=AFQjCNEpBfKnal9kU7Zu4n7RnEt2nerN4g&ust=1398298682009707')))
                .not.toThrow();
        });

        it('should NOT throw if argument is a simple Url', () => {
            expect(() => ArgumentContracts.assertUrl(new String('http://this.is.a.simple.url')))
                .not.toThrow();
        });

        it('should stringify argument when throwing error', () => {
            const argument: any = { herWeGo: 'again' };
            try {
                ArgumentContracts.assertUrl(argument);
            } catch(error) {
                expect(error.message).toMatch(JSON.stringify(argument));
            }
        });

        it('should throw correct message if stringfy fails', () => {
            const argument: any = { herWeGo: 'again' };
            argument.then = argument;
            expect(() => ArgumentContracts.assertUrl(argument)).toThrowError(/Expected/);
        });
    });
});
