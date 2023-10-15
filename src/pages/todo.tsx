import ToDoList from "@/components/ToDoList";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: red;
`

const ToDoPage = () => {
    return (
        <>
            <StyledHeader>Welcome: This is todo page</StyledHeader>
            <ToDoList/>
        </>
    )
}

export default ToDoPage;