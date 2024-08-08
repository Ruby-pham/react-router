import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {StudentData} from "./StudentData";

export function Student(props){
    let[students, setStudents]=useState([])
    let navigate = useNavigate()
    useEffect(() => {
        setStudents(StudentData)
    }, []);
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
                <Link to={'/admin/students/add'}>
                    <button>Detail</button>
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
                        <th colSpan={3}>Action</th>
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
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        </>
                    ))}
                    </tbody>
                </table>
            </div>

        </>

    )
}