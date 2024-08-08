import {useNavigate} from "react-router-dom";
import {useState} from "react";

export function Add(props) {
    let navigate = useNavigate();
    let handleOnClick = () => {
        navigate('/admin/students');
    }
    let [students, setStudents] = useState([
        {
            id:'C03_1',
            name:'Mary Smith',
            class:'C03',
            email:'mary@gmail.com',
            phone:'097123456'

        }])
    let [newStudent, setNewStudent] = useState(
        {
            id: '',
            name: '',
            class: '',
            email: '',
            phone: '',

        }
    );
    // Hàm xử lý khi nhập giá trị vào input
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
                    {students.map((student, index) => (
                        <>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.class}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>
                                    <button onClick={() => handleOnClick(student)}>Detail</button>
                                </td>
                            </tr>
                        </>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}