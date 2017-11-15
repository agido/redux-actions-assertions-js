'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertDispatchedActions = undefined;

var _lodash = require('lodash.isEqual');

var _lodash2 = _interopRequireDefault(_lodash);

var _notDispatchedActionError = require('../errors/notDispatchedActionError');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assertDispatchedActions(dispatched, expected) {
    var availableActions = dispatched.slice();

    for (var index = 0; index < Math.max(availableActions.length, expected.length); index++) {
        if (!(0, _lodash2.default)(availableActions[index], expected[index])) throw (0, _notDispatchedActionError.notDispatchedActionError)(dispatched, expected, expected[index]);
    }
}

exports.assertDispatchedActions = assertDispatchedActions;