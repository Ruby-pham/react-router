import {useNavigate} from "react-router-dom";

const employees = [
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
]

export function Employee() {
    let navigate = useNavigate()
    let handleOnclick=(employee)=>{
        navigate('/EmployeeDetail',{state:{employee}})
    }
    return (
        <>
            <h1>Employee List</h1>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee, index) => (
                    <>
                        <tr>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>
                                <button onClick={()=>handleOnclick(employee)}>detail</button>
                            </td>
                        </tr>
                    </>
                ))}
                </tbody>
            </table>
        </>
    )
}