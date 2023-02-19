import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,  reset, incrementByAmount } from './counterSlice';

const Counter = () => {
  const [ incrementAmount, setIcrementAmount ] = useState(0);

  const addValue = Number(incrementAmount) || 0;

   const resetAll = () => {
     setIcrementAmount(0);
     dispatch(reset());
   };
    const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();

   

  return (
    <>
      <section>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
         
        </div>

        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIcrementAmount(e.target.value)}
        />
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>
            Add Amount
          </button>
          <button onClick={resetAll}>
            Reset
          </button>
        </div>
      </section>
    </>
  );
}

export default Counter