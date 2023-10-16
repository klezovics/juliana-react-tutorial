// Synchronous function
function syncFunction(number) {
    console.log(`Sync function: ${number}`);
}

// Asynchronous function (using async/await)
async function asyncFunction(number) {
    await doALotOfWorkFunction()
    console.log(`Async function: ${number}`);
}

async function doALotOfWorkFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate an asynchronous delay
}

// Calling the functions with numbers 1, 2, and 3
console.log('Calling functions synchronously:');
syncFunction(1);

asyncFunction(1);
asyncFunction(2);
asyncFunction(3);

syncFunction(2);
syncFunction(3);

