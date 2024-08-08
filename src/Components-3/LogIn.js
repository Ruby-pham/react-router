import {Link} from "react-router-dom";

export function LogIn(){
    return(
        <>
            <div className="login">
                <Link to={'/'}>Back to list</Link>
                <div>Detail login</div>
            </div>
        </>
    )
}