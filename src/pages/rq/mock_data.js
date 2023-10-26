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

    return randomIntegersArray
}

export const Page = () => {

    const {data, isLoading, isFetching, isError, refetch} = useQuery(
        "my-data",
        dataProvider,
        {
            refetchInterval: 2000,
            // enabled: false
        }
    )


    console.log("isLoading", isLoading)
    console.log("isFetching", isFetching)

    if(!data) {
        console.log("No data")
    }

    return (
        <>
            <h1>Welcome to RQ!</h1>
            {/*F2: Can use refetch button*/}
            <button onClick={refetch}>Fetch</button>
            <ul>
                {data && data.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Page
