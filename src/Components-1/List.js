import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";

export function List(){
    return(
        <>
            <Link to='/home/add'>Back to add</Link>
            <h1>List</h1>
        </>

    )
}