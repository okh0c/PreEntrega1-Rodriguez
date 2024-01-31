import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartWidget.css"

function CartWidget(){

    return(
        <div className="cartwidget">
            <AiOutlineShoppingCart />
            <h6>0</h6>
        </div>
    )
        
}


export default CartWidget;