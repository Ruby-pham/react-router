import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

export function Main(){
    return(
        <>
                <div className="carousel">carousel</div>
                <div className="list-product">
                    <Link to={"detail"}>list-product</Link>
                </div>
        </>
    )
}