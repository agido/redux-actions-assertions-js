import isEqual from 'lodash.isequal';
import {notDispatchedActionError} from '../errors/notDispatchedActionError';

function assertDispatchedActions(dispatched, expected) {
    const availableActions = dispatched.slice();

    for (let index = 0; index < Math.max(availableActions.length, expected.length); index++) {
        if (!isEqual(availableActions[index], expected[index]))
            throw notDispatchedActionError(dispatched, expected, expected[index]);
    }
}

export {assertDispatchedActions};
