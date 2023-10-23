import React, { useState } from 'react';

export const MyCounter = () => {
    const [state, setState] = useState(0);

    return (
        <>
            <h1>Count: {state}</h1>
            <button onClick={() => setState(state + 1)}>Increment</button>
        </>
    )
}

export default MyCounter;
