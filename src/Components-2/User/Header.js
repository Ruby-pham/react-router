import {Link} from "react-router-dom";

export function Header(){
    return(
        <>
                <Link className='link' to={'/user'}>Home</Link>
                <Link className='link' to={'/user/hot-product'}>Hot</Link>
                <Link className='link' to={'/user/category'}>Category</Link>
        </>
    )
}