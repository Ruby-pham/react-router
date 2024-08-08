import {useLocation, useNavigate} from "react-router-dom";

export function DetailProduct() {
    let navigate=useNavigate()
    let handleOnClickBack=()=>{
        navigate('/user')
    }
    let location = useLocation();
    let {product} = location.state || {};
    if (!product) {
        return <div>No product data available</div>
    }
    return (
        <>

            <div className="detail-product">
                <p>Product detail: </p>
                <p>Id: {product.id} </p>
                <p>Name: {product.name}</p>
                <p>Model: {product.model}</p>
                <p>Price: {product.price}</p>
                <button onClick={handleOnClickBack}>Back to list</button>
            </div>

        </>
    )


}