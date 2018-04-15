# argument-contracts
A small and simple library for asserting argument are the correct types

# Install

```bash
npm i argument-contracts
```

# Usage

```javascript
// Without passing an argumentName
function functionNeedingAString(stringArgument) {
    ArgumentContracts.assertString(stringArgument, 'stringArgument');

    //... Functuon relying on stringArgument being a string ...
}
functionNeedingAString(1234);
// Will throw error: Expected argument to be a string. Value received: 1234

// With an argumentName
function functionNeedingANumber(numberArgument) {
    ArgumentContracts.assertNumber(numberArgument, 'numberArgument');

    //... Functuon relying on stringArgument being a string ...
}
functionNeedingANumber('some string');
// Will throw error: Expected numberArgument to be a number. Value received: "1234"
```

For more usage examples please see [Demo](demo/index.js)

# Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

