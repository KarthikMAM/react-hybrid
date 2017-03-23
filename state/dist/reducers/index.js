'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.helloWorld = helloWorld;
function helloWorld() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var action = arguments[1];

    switch (action.type) {
        case "TOGGLE":
            return state === 'Hello' ? 'Bye' : 'Hello';
        default:
            return state;
    }
}