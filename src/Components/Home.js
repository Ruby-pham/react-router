import '../style-css/home.css'
import {Link, Outlet} from "react-router-dom";

export function Home() {
    return (
        <>
            <div className="header">
                <div className="logo">Logo</div>
                <div className="banner">Banner</div>
            </div>
            <div className="menu">
                <div className="menu-left">
                    <div className="home menu-item">
                        <Link className='link' to={'/home'}>Home</Link>
                    </div>
                    <div className="product menu-item">
                        <Link className='link' to={'/home/productPage'}>Product</Link>
                    </div>
                </div>
                <div className="menu-right">
                    <div className="order menu-item">
                        <Link className='link' to={'/home/orderPage'}>Orders</Link>
                    </div>
                    <div className="menu-item">
                        <Link className='link' to={'/'}>Logout</Link>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="sidebar">Side bar</div>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}