import {useNavigate} from "react-router-dom";
export function Register(){
    let navigate = useNavigate()
    return(
        <>
            <h1>Please Register</h1>
            <input/><br/>
            <input/><br/>
            <button>Register</button>
            <br/>
            <button onClick={()=>{
                navigate('/Login')
            }}>Login</button>

        </>
    )
}