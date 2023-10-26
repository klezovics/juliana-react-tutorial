import {useQuery} from "react-query";

// F1 - Can use a function to mock data
const dataProvider = () => {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randomIntegersArray = [];
    for (let i = 0; i < 4; i++) {
        randomIntegersArray.push(getRandomInt(1, 100)); // Adjust the range as needed
    }

    if(randomIntegersArray[0]  <= 50) {
        console.log("Bom explode!")
        throw new Error("Error")
    }

    return randomIntegersArray
}

export const Page = () => {

    const {data, isLoading, isFetching, isError, refetch} = useQuery(
        "my-data",
        dataProvider,
        {
            onError: (error) => {console.log("Oh no error", error)},
            onSuccess: (data) => {console.log("Oh yes success", data)}
        }
    )

    if(!data) {
        console.log("No data")
    }

    return (
        <>
            <h1>Welcome to RQ!</h1>
            {/*F2: Can use refetch button*/}
            <button onClick={refetch}>Fetch</button>
            <ul>
                {data && data.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Page
