import React, { useReducer } from 'react';

// Reducer function to handle state updates
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

function Counter() {
    // Initialize the state using useReducer
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    // Event handlers to dispatch actions
    const increment = () => {
        dispatch({ type: 'INCREMENT', incrementBy: 5 });
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <h1>Counter Value: {state.count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
