import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export function Student(){
    let[students, setStudents]=useState([
        {
            id:'C03_1',
            name:'Mary Smith',
            class:'C03',
            email:'mary@gmail.com',
            phone:'097123456'

        }
    ])
    let navigate = useNavigate()
    let handleOnClick=(student)=>{
        navigate('/admin/students/detail',{state:{student}})
    }
    return(
        <>
            <h1> Student List</h1>
            <div className="student-container">
                <Link to={'/admin/students/add'}>
                    <button>Add</button>
                </Link>

                <table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student,index)=>(
                        <>
                            <tr>
                                <td>{index+1}</td>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.class}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td><button onClick={()=>handleOnClick(student)}>Detail</button></td>
                            </tr>
                        </>
                    ))}
                    </tbody>
                </table>
            </div>

        </>

    )
}