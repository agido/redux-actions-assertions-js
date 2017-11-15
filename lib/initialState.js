'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialStoreState = exports.registerInitialStoreState = exports.buildInitialStoreState = undefined;

var _lodash = require('lodash.clonedeep');

var _lodash2 = _interopRequireDefault(_lodash);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = null;

function registerInitialStoreState(newState) {
  state = newState;
}

function buildInitialStoreState(reducer) {
  var store = (0, _redux.createStore)(reducer);
  return store.getState();
}

function getInitialStoreState() {
  return (0, _lodash2.default)(state);
}

exports.buildInitialStoreState = buildInitialStoreState;
exports.registerInitialStoreState = registerInitialStoreState;
exports.getInitialStoreState = getInitialStoreState;