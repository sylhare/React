import { counterReducer, decrement, increment, incrementByAmount, initialState } from '../../src/store/counter/slice';
import { AnyAction } from 'redux';

describe('counter slice counterReducer', () => {

  it('returns the initial state by default', () => {
    const anyAction: AnyAction = { type: 'ANY_ACTION', };
    expect(counterReducer(undefined, anyAction)).toEqual(initialState);
  });

  it('returns the initial state on random action', () => {
    const randomAction: AnyAction = {
      type: 'RANDOM_ACTION',
      payload: { value: 2 },
    };
    expect(counterReducer(initialState, randomAction)).toEqual(initialState);
  });

  it('increments', () => {
    expect(counterReducer(initialState, increment()))
      .toMatchObject({ value: 1 });
  });

  it('decrements', () => {
    expect(counterReducer(initialState, decrement()))
      .toMatchObject({ value: -1 });
  });


  it('increments by amount', () => {
    expect(counterReducer(initialState, incrementByAmount(10)))
      .toMatchObject({ value: 10 });
  });

  it('increments by 10', () => {
    const manualAction: AnyAction = {
      type: 'counter/incrementByAmount',
      payload: 10,
    };
    expect(counterReducer(initialState, manualAction)).toEqual({ value: 10 });
  });
});
