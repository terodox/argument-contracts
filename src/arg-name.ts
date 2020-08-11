export function argName(input) {
    return Reflect.ownKeys(input).shift();
}
