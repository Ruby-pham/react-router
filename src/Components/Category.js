import {useNavigate} from "react-router-dom";

export function Category(){
    let navigate=useNavigate();
    const sendDataToProduct = (event)=>{

        navigate('/Product',{state:{categoryID:event.target.value}})

    }
    return(
        <>
            <h2>Select a Category</h2>
            <select value='' onChange={sendDataToProduct}>
                <option value='' disabled hidden>--choose your car--</option>
                <option value='Honda'>Honda</option>
                <option value='Suzuki'>Suzuki</option>
                <option value='Yamaha'>Yamaha</option>

            </select>
        </>

    )
}