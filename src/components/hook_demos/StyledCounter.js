import React from 'react';
import styled from 'styled-components';
import useCounter from "@/hooks/useCounters";

const StyledCounterWrapper = styled.div`
  font-size: 20px;
  margin: 20px;
  padding: 15px;
  background-color: orange;
  border: 2px solid #333;
  border-radius: 10px;
  display: inline-block;
`;

const StyledButton = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  margin: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledCounter = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <StyledCounterWrapper>
            <StyledButton onClick={decrement}>Decrement</StyledButton>
            <StyledButton onClick={increment}>Increment</StyledButton>
            <p>Count: {count}</p>
        </StyledCounterWrapper>
    );
};

export default StyledCounter;