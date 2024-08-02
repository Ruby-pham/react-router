import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Home} from "./Components/Home";
import {Login} from "./Components/Login";
import {Register} from "./Components/Register";

function App() {
  return (
      // <div className="App">
      //     <>
      //         <Link to={'Home'}>Home</Link>-
      //         <Link to={'Login'}>Login</Link>-
      //         <Link to={'Register'}>Register</Link>
      //         <Routes>
      //             <Route path={'Home'} element={<Home/>}/>
      //             <Route path={'Login'} element={<Login/>}/>
      //             <Route path={'Register'} element={<Register/>}/>
      //         </Routes>
      //     </>
      // </div>
      <div className="app-container">
          <>
              <button>Hello</button>
          </>
      </div>

  );
}

export default App;
