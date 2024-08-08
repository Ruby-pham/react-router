import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {StudentData} from "./StudentData";

export function Add(props) {
    let navigate = useNavigate();
    let handleOnClick = () => {
        navigate('/admin/students');
    }
    let[students, setStudents]=useState([])
    useEffect(() => {
        setStudents(StudentData)
    }, []);
    let [newStudent, setNewStudent] = useState(
        {
            id: '',
            name: '',
            class: '',
            email: '',
            phone: '',

        }
    );
    const getInpValue = (e) => {
        let {name, value} = e.target;
        setNewStudent({...newStudent, [name]: value})
    }

    // Hàm xử lý khi nhấn nút "Save"
    const handleSave = () => {
        setStudents([...students, newStudent]);
        setNewStudent({
            id: '',
            name: '',
            class: '',
            email: '',
            phone: '',
        })
        console.log(students)
    //     // Chuyển hướng về danh sách sinh viên
    //     navigate('/admin/students');
    };
    return (
        <>
            <div className="add-container">
                <button onClick={handleOnClick}>Back to list</button>
                <div className="add-student">
                    <h3>Add Student</h3>
                    <label>Id: </label>
                    <input name='id' value={newStudent.id} onChange={getInpValue}/><br/>
                    <label>Name : </label>
                    <input name='name' value={newStudent.name} onChange={getInpValue}/><br/>
                    <label>Class</label>
                    <input name='class' value={newStudent.class} onChange={getInpValue}/><br/>
                    <label>Email</label>
                    <input name='email' value={newStudent.email} onChange={getInpValue}/><br/>
                    <label>Phone</label>
                    <input name='phone' value={newStudent.phone} onChange={getInpValue}/><br/>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </>
    )
}