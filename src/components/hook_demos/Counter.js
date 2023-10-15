import React from 'react';
import styled from 'styled-components';
import useCounter from "@/hooks/useCounters";

const CounterWrapper = styled.div`
  font-size: 24px;
  margin: 20px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  display: inline-block;
`;

const Counter = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <CounterWrapper>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </CounterWrapper>
    );
};

export default Counter;
