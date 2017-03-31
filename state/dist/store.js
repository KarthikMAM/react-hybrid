"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = require("redux");

var _reducers = require("./reducers");

var store = exports.store = function store() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return (0, _redux.createStore)(_reducers.helloWorld, initialState);
};