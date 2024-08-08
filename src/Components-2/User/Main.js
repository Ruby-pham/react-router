import {Product} from "./Product";

export function Main(){
    return(
        <>
                <div className="slide"> Slides</div>
                <div className="list-product">
                    <Product/>
                </div>
                <div className="top-product">Top Product</div>
        </>
    )
}