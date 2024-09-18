import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { decrement, increment, incrementByAmount, selectCount } from '../store/counter/slice';
import './Counter.css';

export const Counter = (): JSX.Element => {
  const count = useAppSelector(state => state.counter.value);
  const count_2 = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div data-testid={'counter'}>
      <main>
        <h2>Welcome to the Counter page!</h2>
        <h2>Count is {count} === {count_2}</h2>
        <button
          className="button button-ten"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          +10
        </button>
        <button
          className="button button-increment"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className="button button-decrement"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
      </main>
      <br/>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </div>
  );
}
