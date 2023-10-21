/*
* Props:
* - Components can accept props
* - A prop can be a function also !
* - A prop can be a component !
* - There exists a children prop
* - There exist style and className props
*
* - You can do conditional rendering in react
* - You can render lists using map
* */


// F1: Components can accepts props (PROPS)
import styled from "styled-components";

const Hello = ({name, age}) => {

    return (
        <>
            <h1>Hello {name}</h1>
            <p>You are {age} years old</p>
        </>
    )
}

// F2: Conditional rendering (CONDITIONAL RENDERING/PROPS)
const HelloImportant = ({name, isImportant, tellJoke}) => {
    const greetingString = `Hello ${name}`;
    return (
        <>
            {tellJoke && <p>Knock knock!</p>}
            {isImportant ? <h1>{greetingString}</h1> : <p>{greetingString}</p>}
        </>
    )
}

// F3: Redering lists (MAP)
const UserList = ({users}) => {
    return (
        <>
            <h1>User list</h1>
            <ul>
                {users.map(user => <li>{user}</li>)}
            </ul>
        </>
    )
}

// F4: Higher order components (PROPS)
// F5: The children prop (PROPS)
const Card = ({cardTitle, cardText, children}) => {
    return (
        <div className="card">
            <p>This is card header!!</p>
            {cardTitle}
            {cardText}
            <p>This is card footer</p>
            {children}
        </div>
    )
}

// F6: Passing in functions as a prop (PROPS)
const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

// F7: style, clasName and styled components (PROPS)
const StylingInReact = () => {
    return (
        <>
            <h1 className={"my-cool-class"}>Title</h1>
            <p style={{color: "green", backgroundColor:"orange"}}>This is a paragraph</p>
            <JulianaDiv>This is a styled div</JulianaDiv>
            <br/>
            <AdvancedJulianaDiv>MY EGO IS HUGE!!</AdvancedJulianaDiv>
        </>
    )
}

const JulianaDiv = styled.div`
  color: yellow;
  background-color: orange;
`

const AdvancedJulianaDiv = styled(JulianaDiv)`
    height: 200px;
`

const BigTitle = () => (<h1>Big title</h1>);
const SmallTitle = () => (<p>Small title</p>);
const doAlert = () => alert("Alert!");
const doLog = () => console.log("Log!");
const Page = () => {
    return (
        <>
            <h1>Test!</h1>
            {/*<Button text={"Make alert!"} onClick={doAlert}/>*/}
            {/*<Button text={"Make log!"} onClick={doLog}/>*/}
            <StylingInReact/>
        </>
    )
};

export default Page;