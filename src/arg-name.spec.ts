import { argName } from './arg-name';

describe('argName', () => {
    it('should throw if not provided an object', () => {
        const superFunName = '1234';
        expect(() => argName(superFunName)).toThrowError('of type "object"');
    });

    it('should return argument name passed as object', () => {
        const superFunName = '1234';
        expect(argName({ superFunName })).toEqual('superFunName');

        const NAME_WITH_UNDERSCORES = '1234';
        expect(argName({ NAME_WITH_UNDERSCORES })).toEqual('NAME_WITH_UNDERSCORES');

        const nameWithNumbers0011 = '1234';
        expect(argName({ nameWithNumbers0011 })).toEqual('nameWithNumbers0011');
    });
});
