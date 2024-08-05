import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./Components/Home";
import {Login} from "./Components/Login";
import {ProductPage} from "./Components/ProductPage";
import {OrderPage} from "./Components/OrderPage";
import {Register} from "./Components/Register";
import {Admin} from "./Components/Admin";
import {User} from "./Components/User";
import {Student} from "./Components/Student";
import {Add} from "./Components/Add";
import {Detail} from "./Components/Detail";

function App() {
    return (

        //Outlet

        <div className="App">
            <>

                <Routes>
                    <Route path={'/'} element={<Login/>}/>
                    <Route path={'register'} element={<Register/>}/>
                    <Route path={'home'} element={<Home/>}>
                        <Route path={'productPage'} element={<ProductPage/>}/>
                        <Route path={'orderPage'} element={<OrderPage/>}/>
                    </Route>
                    <Route path={'admin'} element={<Admin/>}>
                        <Route path={'users'} element={<User/>}/>
                        <Route path={'productPage'} element={<ProductPage/>}/>
                        <Route path={'orderPage'} element={<OrderPage/>}/>
                        <Route path={'students'} element={<Student/>}/>
                        <Route path={'students/add'} element={<Add/>}/>
                        <Route path={'students/detail'} element={<Detail/>}/>
                    </Route>
                </Routes>
            </>
        </div>

        //form

        // <div className="App">
        //     <>
        //         <Link to={'Home'}>Home</Link>-
        //         <Link to={'/'}>Login</Link>-
        //         <Link to={'Register'}>Register</Link>
        //         <Routes>
        //             <Route path={'Home'} element={<Home/>}/>
        //             <Route path={'/'} element={<Login/>}/>
        //             <Route path={'Register'} element={<Register/>}/>
        //         </Routes>
        //     </>
        // </div>

        // Sử dụng được useNavigate để truyền dữ liệu là một object qua router giữa hai component

    // <div className="App">
    //     <>
    //         <Link to={'/'}>Login</Link>-
    //         <Link to={'Register'}>Register</Link>-
    //         <Link to={'Employee'}>Employee</Link>-
    //         <Link to={'EmployeeDetail'}>EmployeeDetail</Link>
    //         <Routes>
    //             <Route path={'/'} element={<Login/>}/>
    //             <Route path={'Register'} element={<Register/>}/>
    //             <Route path={'Employee'} element={<Employee/>}/>
    //             <Route path={'EmployeeDetail'} element={<EmployeeDetail/>}/>
    //         </Routes>
    //     </>
    // </div>

        //choose your car

        // <div className="App">
        //     <>
        //         <Routes>
        //             <Route path={'/'} element={<Category/>}/>
        //             <Route path={'Product'} element={<Product/>}/>
        //         </Routes>
        //     </>
        // </div>



        //hoi dan it
        // <div className="app-container">
        //     <div className="header-container">
        //         <Header/>
        //     </div>
        //     <div className="main-container">
        //         <div className="sidenav-container"></div>
        //         <div className="app-content">
        //              <Outlet/>
        //         </div>
        //     </div>
        // </div>

    )
        ;
}

export default App;
