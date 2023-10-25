import React, { useState, useEffect } from 'react';


function MyComponentWithEffect() {
    const [todos, setTodos] = useState(null);
    const [message, setMessage] = useState("Juliana is hot chick!");

    // const myEffect = () => {
    //     console.log("Use effect is here!!!");
    // }

    useEffect(() => {});

    return (
        <div>
            <h1>Hello!</h1>
        </div>
    )
}

function Page() {

    return (
        <div>
           <MyComponentWithEffect/>
        </div>
    );
}

export default Page;
