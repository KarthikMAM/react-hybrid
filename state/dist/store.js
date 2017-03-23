'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = require('redux');

var _reducers = require('./reducers');

var store = exports.store = (0, _redux.createStore)(_reducers.helloWorld);