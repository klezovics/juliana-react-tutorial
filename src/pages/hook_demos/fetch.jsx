import React from 'react';
import {usePrevious} from "@uidotdev/usehooks";

export const Page = () => {

    const [count, setCount] = React.useState(1);
    const prev = usePrevious(count);


    return (
        <>
            <h1>Counter {count}</h1>
            <h2>Previous value {prev}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
}

export default Page;
