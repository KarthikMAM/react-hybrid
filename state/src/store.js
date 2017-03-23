import {createStore} from 'redux';
import {helloWorld} from './reducers';

export const store = createStore(helloWorld);