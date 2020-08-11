export function argName(input) {
    if (typeof input !== "object") {
        throw new TypeError('The provided input must be of type "object"');
    }
    return Reflect.ownKeys(input).shift();
}
