import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa6";
import { Space } from "./Space";
import { SearchBar } from "./SearchBar";


export const TopBar = ({ text }) => {
    const router = useRouter();

    return <div className="header row">
        <Space p={".5rem"}/>
        <FaArrowLeft className="btn" onClick={() => router.back()} />
        <SearchBar className={"top-search"}/>
        {/* <Space p={".25rem"} /> */}
        {text !== "" &&  <h1>{text}</h1>}
       
    </div>
}