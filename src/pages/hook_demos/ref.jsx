import React, { useRef } from 'react';

function MyComponent() {
    // Create a ref for the element you want to delete
    const elementRef = useRef(null);

    const handleDeleteClick = () => {
        // Access the DOM element using the ref
        const element = elementRef.current;

        if (element) {
            // Remove the element from the DOM
            element.remove();
        }
    };

    return (
        <div>
            <p ref={elementRef}>This is the element to delete.</p>
            <button onClick={handleDeleteClick}>Delete Element</button>
        </div>
    );
}

export default MyComponent;
