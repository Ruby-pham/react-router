import './App.css';
import {User} from "./Components-2/User/User";
import {Route, Routes} from "react-router-dom";
import {Header} from "./Components-2/User/Header";
import {Footer} from "./Components-2/User/Footer";
import {Main} from "./Components-2/User/Main";
import {DetailProduct} from "./Components-2/User/DetailProduct";
import {HotProduct} from "./Components-2/User/HotProduct";
import {Category} from "./Components-2/User/Category";
import {Admin} from "./Components-2/Admin";


function App() {
    return (

        //Outlet

        <div className="App">
            <>
                <Routes>
                    <Route path={'/admin'} element={<Admin/>}/>
                    <Route path={'/user'} element={<User/>}>
                        <Route index element={<Main/>}/>
                        <Route path={'detail-product'} element={<DetailProduct/>}/>
                        <Route path={'hot-product'} element={<HotProduct/>}/>
                        <Route path={'category'} element={<Category/>}/>
                    </Route>
                </Routes>
            </>
        </div>

        // <div className="App">
        //     <>
        //
        //         <Routes>
        //             <Route path={'/home'} element={<Home/>}>
        //                 <Route path={'list'} element={<List/>}/>
        //                 <Route path={'add'} element={<Add/>}/>
        //             </Route>
        //         </Routes>
        //     </>
        // </div>



        // <div className="App">
        //     <>
        //
        //         <Routes>
        //             <Route path={'/'} element={<Login/>}/>
        //             <Route path={'register'} element={<Register/>}/>
        //             <Route path={'home'} element={<Home/>}>
        //                 <Route path={'productPage'} element={<ProductPage/>}/>
        //                 <Route path={'orderPage'} element={<OrderPage/>}/>
        //             </Route>
        //             <Route path={'admin'} element={<Admin/>}>
        //                 <Route path={'users'} element={<User/>}/>
        //                 <Route path={'productPage'} element={<ProductPage/>}/>
        //                 <Route path={'orderPage'} element={<OrderPage/>}/>
        //                 <Route path={'students'} element={<Student/>}/>
        //                 <Route path={'students/add'} element={<Add/>}/>
        //                 <Route path={'students/detail'} element={<Detail/>}/>
        //             </Route>
        //         </Routes>
        //     </>
        // </div>

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
