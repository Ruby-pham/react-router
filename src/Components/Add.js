import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";


export function Add(){
    let navigate=useNavigate();
    let [newStudents,setNewStudents]=useState([
        {
            id:'',
            name:'',
            class:'',
            email:'',
            phone:'',
        }
    ]);
    let handleOnClick=()=>{
        navigate('/admin/students');
    }
    let getInpValue = (e)=>{
        let {name,value}=e.target;
        setNewStudents({...newStudents, [name]: value})
        console.log(newStudents);
    }
    return(
        <>
            <div className="add-container">
                    <button onClick={handleOnClick}>Back to list</button>
                <div className="add-student">
                    <h3>Add Student</h3>
                    <label>Id: </label>
                    <input name='id' value={newStudents.id} onChange={getInpValue}/><br/>
                    <label>Name : </label>
                    <input name='name' value={newStudents.name} onChange={getInpValue}/><br/>
                    <label>Class</label>
                    <input name='class' value={newStudents.class} onChange={getInpValue}/><br/>
                    <label>Email</label>
                    <input name='email' value={newStudents.email} onChange={getInpValue}/><br/>
                    <label>Phone</label>
                    <input name='phone' value={newStudents.phone} onChange={getInpValue}/><br/>
                    <button>Save</button>

                </div>
            </div>
        </>
    )
}