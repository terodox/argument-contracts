# argument-contracts

[![Build Status](https://cloud.drone.io/api/badges/terodox/argument-contracts/status.svg)](https://cloud.drone.io/terodox/argument-contracts)

A small and simple library for asserting arguments are the correct types

## Install

```bash
npm i -E argument-contracts
```

## Uses

We all need to validate objects at the edges of our code.  Whether it's handling an API response or accepting user input, validating objects can be a monotonous and tedious task. The aim of this library is to simplify that task as much as possible.

## Usage

### javascript

```javascript
const ArgumentContracts = require('argument-contracts');

/**
 *  Without passing an argumentName
 */
function functionNeedingAString(stringArgument) {
    ArgumentContracts.assertString(stringArgument);

    //... Function relying on stringArgument being a string ...
}
functionNeedingAString(1234);
// Will throw error: Expected argument to be a string. Value received: 1234

/**
 *  With an argumentName
 */
function functionNeedingANumber(numberArgument) {
    ArgumentContracts.assertNumber(numberArgument, 'numberArgument');

    //... Function relying on numberArgument being a number ...
}
functionNeedingANumber('some string');
// Will throw error: Expected numberArgument to be a number. Value received: "some string"

/**
 *  Type validation
 */
class MySpecialType {
    constructor({ id }) {}
}

function functionNeedingMySpecialType(specialTypeArgument) {
    ArgumentContracts.assertType(specialTypeArgument, MySpecialType, 'specialTypeArgument');

    //... Function relying on specialTypeArgument being of type MySpecialType
}

functionNeedingMySpecialType();
// Will throw error: Expected specialTypeArgument to be a MySpecialType. Value Received: undefined
```

### typescript

```typescript
import ArgumentContracts from 'argument-contracts';

/**
 *  Without passing an argumentName
 */
function functionNeedingAString(stringArgument: any) {
    ArgumentContracts.assertString(stringArgument);

    //... Function relying on stringArgument being a string ...
}
functionNeedingAString(1234);
// Will throw error: Expected argument to be a string. Value received: 1234

/**
 *  With an argumentName
 */
function functionNeedingANumber(numberArgument: any) {
    ArgumentContracts.assertNumber(numberArgument, 'numberArgument');

    //... Function relying on numberArgument being a number ...
}
functionNeedingANumber('some string');
// Will throw error: Expected numberArgument to be a number. Value received: "some string"

/**
 *  Type validation
 */
class MySpecialType {
    constructor({ id: any }) {}
}

function functionNeedingMySpecialType(specialTypeArgument: any) {
    ArgumentContracts.assertType<MySpecialType>(specialTypeArgument, MySpecialType, 'specialTypeArgument');

    //... Function relying on specialTypeArgument being of type MySpecialType
}

functionNeedingMySpecialType();
// Will throw error: Expected specialTypeArgument to be a MySpecialType. Value Received: undefined
```

For more usage examples please see [Demo](demo/index.js)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)
