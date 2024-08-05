import '../style-css/admin.css'
import {Link, Outlet} from "react-router-dom";

export function Admin() {
    return (
        <>
            <div className="admin-container">
                <div className="admin-sidebar">
                    <div className='custom-item sidebar-item'>
                        <Link className='sidebar-item' to={'/admin/productPage'}>
                            <button>Product</button>
                        </Link>
                    </div>
                    <div>
                        <Link className='sidebar-item' to={'/admin/orderPage'}>
                            <button>Order</button>
                        </Link>
                    </div>
                    <div>
                        <Link className='sidebar-item' to={'/admin/students'}>
                            <button>Student</button>
                        </Link>
                    </div>
                </div>
                <div className="admin-main">
                    <div className="admin-menu"> Menu Admin</div>
                    <div className="admin-content">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}