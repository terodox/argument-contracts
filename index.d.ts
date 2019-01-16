export default class ArgumentContracts {
    static assertArray(argument: Array<any>, argumentName?: String): void;
    static assertArrayOf<T>(argument: Array<T>, type: () => T, argumentName?: String): void;
    static assertBoolean(argument: Boolean, argumentName?: String): void;
    static assertDate(argument: Date | Number, argumentName?: String): void;
    static assertFunction(argument: any, argumentName?: String): void;
    static assertNumber(argument: any, argumentName?: String): void;
    static assertString(argument: any, argumentName?: String): void;
    static assertSymbol(argument: any, argumentName?: String): void;
    static assertType(argument: any, type: any, argumentName?: String): void;
}
