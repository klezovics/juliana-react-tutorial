/*
     Using useContext hook in React

     1. Create a context
     2. Use context
 */

import React, {createContext, useContext, useState} from 'react';

// Create a context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
    const [data, setData] = useState('Hello from Context');

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    );
};

// Create a custom hook for consuming the context
function ComponentA() {
    const { data, setData } = useContext(AppContext);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const updateData = () => {
        setData(inputValue);
    };

    return (
        <div>
            <h2>Component A</h2>
            <p>Data from Context: {data}</p>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={updateData}>Update Data</button>
        </div>
    );
}


function ComponentB() {
    const { data } = useContext(AppContext);

    return (
        <div>
            <h2>Component B</h2>
            <p>Data from Context in Component B: {data}</p>
        </div>
    );
}


function Page() {
    return (
        <AppProvider>
            <div className="App">
                <ComponentA />
                <ComponentB />
            </div>
        </AppProvider>
    );
}

export default Page;
