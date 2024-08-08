import {Link} from "react-router-dom";

export function Cart(){
    return(
        <>
            <div className="cart">
                <Link to={'/'}>Back to list</Link>
                <div>Detail Cart</div>
            </div>

        </>
    )
}