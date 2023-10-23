import ToDoList from "@/components/ToDoList";
import styled from "styled-components";

//F1: Can use CSS in JS using the styled object
const StyledHeader = styled.h1`
  color: red;
`

const H2Base = styled.h2`
    color: blue;
    background-color: yellow;
`
// F2 Inheritance
const H2Variant1 = styled(H2Base)`
    font-size: 30px;
`
const H2Variant2 = styled(H2Base)`
    font-size: 50px;
    color: red;
`

//F3 Conditional styling
const ImportantP = styled.p`
    color: ${(props) => props.isImportant ? 'red' : 'blue'};
`

const ToDoPage = () => {
    return (
        <>
            <StyledHeader>This is some info about me</StyledHeader>
            <ImportantP isImportant={true}>Some important text</ImportantP>
            <ImportantP>Some not so important text</ImportantP>
            <H2Variant1>Variant 1</H2Variant1>
            <H2Variant2>Variant 2</H2Variant2>


        </>
    )
}

export default ToDoPage;