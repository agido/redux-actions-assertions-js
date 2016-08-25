import expect from 'expect';
import {
  buildInitialStoreState,
  registerInitialStoreState,
  getInitialStoreState
} from '../../src/initialState';
import { expectedInitialState, reducerWithNesterReducers } from '../testingData/reducers';

describe('initialState', () => {
  describe('getInitialStoreState', () => {
    describe('by default', () => {
      it('should return null', () => {
        expect(getInitialStoreState()).toBe(null);
      });
    });

    describe('when registerInitialStoreState was called', () => {
      const initialStoreState = { initialStoreStateKey: 'initialStoreStateValue' };

      before(() => {
        registerInitialStoreState(initialStoreState);
      });

      after(() => {
        registerInitialStoreState(null);
      });

      it('should return registered value', () => {
        expect(getInitialStoreState()).toEqual(initialStoreState);
      });

      it('should return deep clone of registered value', () => {
        const initialState = getInitialStoreState();
        initialState.newInitialStoreStateKey = 'newInitialStoreStateKey';

        expect(getInitialStoreState().newInitialStoreStateKey)
          .toNotEqual(initialState.newInitialStoreStateKey);
      });
    });
  });

  describe('buildInitialStoreState', () => {
    it('should return initial state of all reducers', () => {
      const initialState = buildInitialStoreState(reducerWithNesterReducers);

      expect(initialState).toEqual(expectedInitialState);
    });
  });
});
