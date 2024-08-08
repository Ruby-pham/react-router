import '../../style-css/user.css';
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";
import {Outlet} from "react-router-dom";

export function User(){
    return(
        <>
            <div className="user-container">
                <div className="header">
                    <Header/>
                </div>
                <div className="main">
                    <Outlet/>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>

        </>
    )
}