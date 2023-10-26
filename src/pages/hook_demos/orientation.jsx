import {useOrientation} from "@uidotdev/usehooks";
import { useWindowSize } from "@uidotdev/usehooks";



export const Page = () => {
    const {type} = useOrientation();
    const {width, height} = useWindowSize();

    return (
        <>
            <h1>orientation: {type}</h1>
            <p>w:{width} h:{height}</p>
        </>
    )
}

export default Page;