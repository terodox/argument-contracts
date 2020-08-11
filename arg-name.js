"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argName = void 0;
function argName(input) {
    return Reflect.ownKeys(input).shift();
}
exports.argName = argName;
