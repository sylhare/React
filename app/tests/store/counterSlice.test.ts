import { counterSlice, decrement, increment, incrementByAmount, initialState } from '../../src/store/counter/slice';
import { AnyAction } from 'redux';

describe('counter slice reducer', () => {
  const reducer = counterSlice.reducer;

  it('returns the initial state by default', () => {
    const anyAction: AnyAction = { type: 'ANY_ACTION', };
    expect(reducer(undefined, anyAction)).toEqual(initialState);
  });

  it('returns the initial state on random action', () => {
    const randomAction: AnyAction = {
      type: 'RANDOM_ACTION',
      payload: { value: 2 },
    };
    expect(reducer(initialState, randomAction)).toEqual(initialState);
  });

  it('increments', () => {
    expect(reducer(initialState, increment()))
      .toMatchObject({ value: 1 });
  });

  it('decrements', () => {
    expect(reducer(initialState, decrement()))
      .toMatchObject({ value: -1 });
  });


  it('increments by amount', () => {
    expect(reducer(initialState, incrementByAmount(10)))
      .toMatchObject({ value: 10 });
  });
});
