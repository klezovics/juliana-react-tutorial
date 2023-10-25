import React, { useState, useEffect } from 'react';


function MyComponentWithEffect() {

    console.log("Before use effect")

    const runMyEffect = () => {
        console.log("Running my effect")
    }

    // no arg -> run every time -> always -> ALMOST NEVER USED
    // [] -> run once -> once -> When need to fetch data only once
    // [x,y] -> run when x or y changes -> When something changes -> get order data by id

    // useEffect 2 parts -> What to do ? When to do ?
    useEffect(runMyEffect, []);

    console.log("After use effect")

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
