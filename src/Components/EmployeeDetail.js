import {useLocation} from "react-router-dom";

export function EmployeeDetail (){
    let location=useLocation();
    let {employee}=location.state || {};
    if(!employee){
        return <div>No employee data available</div>
    }
    return(
        <>
            <h2>Employee Detail</h2>
            <p>ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Age: {employee.age}</p>
        </>
    )
}