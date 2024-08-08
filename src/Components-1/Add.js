import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";

export function Add(){
    return(
        <>
            <Link to='/home/list'>Back to list</Link>
            <h1>Add</h1>
        </>

    )
}