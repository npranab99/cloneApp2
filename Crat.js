import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart, addToCart } from "./Reducers/CartReducer";


const Cart =()=>{
    const cart = useSelector((state)=> state.CartReducer.items);
    const dispatch = useDispatch();
     const totalPrice = cart.reduce((sum, item)=> sum + item.price * item.quantity, 0)

     if(cart.length === 0){
        return <h3> Cart is empty</h3>
     }
    return(
        <>
        <h3>Your Cart is here</h3>
        {cart.map((item)=>(
            <div key={item.id}>
                <h4>{item.name}</h4>
                <p>price: {item.price}</p>
                <p>quantity: {item.quantity}</p>
            </div>
        ))}

        <h3>total: ${totalPrice}</h3>
        <button onClick={()=> dispatch(clearCart())}>Clear cart</button>
        </>
    )
}

export default Cart;