import {Link, useNavigate} from "react-router-dom";



export function Product(){
    let Products=[
        {
            id:'1',
            name:'tesla',
            model:'2024',
            price:'90.000'
        },
        {
            id:'2',
            name:'Lexus',
            model:'2010',
            price:'10.000'
        },
        {
            id:'3',
            name:'toyota',
            model:'2008',
            price:'2.000'
        },

    ]
    let navigate = useNavigate()
    let handleOnClick=(product)=>{
        navigate('detail-product',{state:{product}})
    }


    return(
        <>
            <h3>Product List</h3>
            <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Model</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
                {Products.map((product) => (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.model}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={()=>handleOnClick(product)}>Detail</button>
                                {/*<Link to={'/detail-product'}>Detail</Link>*/}
                            </td>
                        </tr>

                ))}

            </table>
        </>
    )
}