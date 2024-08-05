import {Link, useLocation, useNavigate} from "react-router-dom";

export function Detail() {
    let navigate = useNavigate()
    let location=useLocation()
    let {student}=location.state || {};
    let handleOnClick = () => {
        navigate('/admin/students');
    }
    if(!student){
        return (
            <div>
                No student data available
            </div>
        )
    }else{
        return (
            <>
                <button onClick={handleOnClick}>Back to list</button>
                <h1>Student detail</h1>
                <p>{student.id}</p>
                <p>{student.name}</p>
                <p>{student.class}</p>
                <p>{student.email}</p>
                <p>{student.phone}</p>

            </>
        )

    }

}