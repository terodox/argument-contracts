const ArgumentContracts = require('../index').default;
const { argName } = require('../arg-name');

function consoleLogErrors(throwingFunc) {
    try {
        throwingFunc();
    } catch (error) {
        console.error(error); // eslint-disable-line no-console
    }
}

class SomeMagicalType { }

const NUMBER_VALUE = 1234;
const STRING_VALUE = '1234';
consoleLogErrors(() => ArgumentContracts.assertArray(NUMBER_VALUE));
consoleLogErrors(() => ArgumentContracts.assertArray(NUMBER_VALUE, 'arrayArgument'));
consoleLogErrors(() => ArgumentContracts.assertArray(NUMBER_VALUE, argName({ NUMBER_VALUE })));
consoleLogErrors(() => ArgumentContracts.assertArrayOf(NUMBER_VALUE, String));
consoleLogErrors(() => ArgumentContracts.assertArrayOf(NUMBER_VALUE, String, 'arrayOfStringArgument'));
consoleLogErrors(() => ArgumentContracts.assertArrayOf(NUMBER_VALUE, String, argName({ NUMBER_VALUE })));
consoleLogErrors(() => ArgumentContracts.assertArrayOf([NUMBER_VALUE], String));
consoleLogErrors(() => ArgumentContracts.assertArrayOf([NUMBER_VALUE], String, 'arrayOfStringArgument'));
consoleLogErrors(() => ArgumentContracts.assertFunction(NUMBER_VALUE));
consoleLogErrors(() => ArgumentContracts.assertFunction(NUMBER_VALUE, 'functionArgument'));
consoleLogErrors(() => ArgumentContracts.assertFunction(NUMBER_VALUE, argName({ NUMBER_VALUE })));
consoleLogErrors(() => ArgumentContracts.assertNumber(STRING_VALUE));
consoleLogErrors(() => ArgumentContracts.assertNumber(STRING_VALUE, 'numberArgument'));
consoleLogErrors(() => ArgumentContracts.assertNumber(STRING_VALUE, argName({ STRING_VALUE })));
consoleLogErrors(() => ArgumentContracts.assertObject(STRING_VALUE));
consoleLogErrors(() => ArgumentContracts.assertObject(STRING_VALUE, 'objectArgument'));
consoleLogErrors(() => ArgumentContracts.assertObject(STRING_VALUE, argName({ STRING_VALUE })));
consoleLogErrors(() => ArgumentContracts.assertString(NUMBER_VALUE));
consoleLogErrors(() => ArgumentContracts.assertString(NUMBER_VALUE, 'stringArgument'));
consoleLogErrors(() => ArgumentContracts.assertString(NUMBER_VALUE, argName({ NUMBER_VALUE })));
consoleLogErrors(() => ArgumentContracts.assertType(STRING_VALUE, SomeMagicalType));
consoleLogErrors(() => ArgumentContracts.assertType(STRING_VALUE, SomeMagicalType, 'somMagicalTypeArgument'));
consoleLogErrors(() => ArgumentContracts.assertType(STRING_VALUE, SomeMagicalType, argName({ STRING_VALUE })));
