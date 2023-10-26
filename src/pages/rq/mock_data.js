import {useQuery} from "react-query";

const dataProvider = () => {
    return [1,2,3,4]
}

export const Page = () => {

    const {data, isLoading, isError} = useQuery("my-data", dataProvider)

    if(!data) {
        console.log("No data")
    }

    return (
        <>
            <h1>Welcome to RQ!</h1>
            <ul>
                {data && data.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Page
