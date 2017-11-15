'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDispatchActionsWithState = undefined;

var _initialState = require('../initialState');

var _utils = require('../utils');

var _performAssertion = require('./utils/performAssertion');

var _assertDispatchedActions = require('./utils/assertDispatchedActions');

function toDispatchActionsWithState(state, action, expectedActions, done, fail) {
  var initialState = (0, _utils.isFunction)(state) ? state((0, _initialState.getInitialStoreState)()) : state;
  return (0, _performAssertion.performAssertion)(_assertDispatchedActions.assertDispatchedActions, initialState, action, expectedActions, done, fail);
}

exports.toDispatchActionsWithState = toDispatchActionsWithState;