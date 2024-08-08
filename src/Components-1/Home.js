import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {Outlet} from "react-router-dom";

export function Home(){
    return(
        <>
            <NavBar/>
            <hr/>
            <Outlet/>
            <hr/>
            <Footer/>
        </>

    )
}