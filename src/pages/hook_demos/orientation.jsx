import {useOrientation} from "@uidotdev/usehooks";
import { useWindowSize } from "@uidotdev/usehooks";



export const Page = () => {
    const {type, angle} = useOrientation();
    const {width, height} = useWindowSize();

    return (
        <>
            <h1>angle is {angle} </h1>
            <h1>orientation: {type}</h1>
            <p>w:{width} h:{height}</p>
            { type === "landscape-primary" && <p>LANDSCAPE IS GOOD!</p>}
            { type === "portrait-primary" && <p>Portrait sucks!</p>}
        </>
    )
}

export default Page;