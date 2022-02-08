import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './actions';

function Counter() {
    let count = useSelector(state => {
        return state.counter;
    });

    const dispatch = useDispatch();

    return (
        <>
            Counter: {count}
            <div className='button'>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </>);;
}

export default Counter;