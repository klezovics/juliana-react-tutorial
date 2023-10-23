import React, { useState } from 'react';

export const MyCounter = () => {
    const [state, setState] = useState(0);
    const increment = () => setState(state + 1);

    return (
        <>
            <h1>Count: {state}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default MyCounter;
