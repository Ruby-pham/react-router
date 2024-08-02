// Bài tập Router: tạo compoent Login('/'), Register('/register'), Home('/home')
// Ở Login thì có 1 nút chuyển sang register, 2 ô input, Nếu usn='admin', pass='admin' chuyển sang trang home
// Ở register có 1 nút chuyển sang Login, 2 ô input
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export function Login() {
    let [Form, setForm] = useState([
        {
            userName: '',
            passWord: '',

        }
    ])
    let navigate = useNavigate()
    let handleOnChange = (e) => {
        let {name, value} = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));

    }
    let handleLogin = () => {
        let {userName, passWord} = Form;
        if (userName === 'admin' && passWord === 'admin') {
            navigate('/Home')
        }else{alert('Invalid username or password')}
    }


    return (
        <>
            <h1>Please Login</h1>
            <label>User Name :</label>
            <input name='userName' value={Form.userName} onChange={handleOnChange}/><br/>
            <label>Pass Word :</label>
            <input name='passWord' value={Form.passWord} onChange={handleOnChange}/><br/>
            <button onClick={handleLogin}>Login</button>
            <br/>
            <button onClick={() => {
                navigate('/Register')
            }}>Register
            </button>
        </>
    )
}