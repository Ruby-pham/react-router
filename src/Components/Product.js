import {useLocation} from "react-router-dom";

export function Product() {
    const {state}=useLocation();
    return (
        <div>
            <h3>Id selected {state.categoryID}</h3>
        </div>

    )


}