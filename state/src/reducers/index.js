export function helloWorld(state = 'Hello', action) {
    switch(action.type) {
        case "TOGGLE": return state === 'Hello' ? 'Bye' : 'Hello';
        default: return state;
    }
}