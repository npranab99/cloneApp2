import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Reducers/CartReducer";

const MenuList = ()=>{

    const {id} = useParams();
    const [menuItem, setMenuItems]= useState([]);
    const [resName, setResName] = useState('');

    const fetchData = async()=>{
            try{
                const res = await fetch(`http://localhost:3001/restaurants/`)
                const data = await res.json();


                console.log(data.find((r)=> r.id === parseInt(id),"data"));

                const resturent = data.find((r)=> r.id === parseInt(id));
                if(resturent){
                    setMenuItems(resturent.menu)
                    setResName(resturent.name)

                }
            }catch (error){
                console.log(error,"error")
            }
        };

    useEffect(()=>{
        
        fetchData();
    },[id])

        const dispatch = useDispatch();
    const cart = useSelector((state)=> state.CartReducer.items);


    const getQuantity = (itemId)=>{
        const item = cart.find((i)=> i.idf === itemId);
        return item ? item.quantity : 0;
    }

    return (
  <div>
    <h2>{resName}</h2>
    <h3>Menu List</h3>
    {menuItem.map((item, index) => (
      <div className="menu-item" key={index}>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <p>Category: {item.category}</p>

        <div>
          <button onClick={() => dispatch(addToCart(item))}>+</button>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            disabled={getQuantity(item.id) === 0}
          >
            -
          </button>
          <span>Quantity: {getQuantity(item.id)}</span>
        </div>
      </div>
    ))}
  </div>
);


}

export default MenuList;


