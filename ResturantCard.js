import { useNavigate } from "react-router-dom";

const ResturantCard=({item})=>{

    const navigate = useNavigate();
    
    const handleViewMenu = ()=>{
        navigate(`/menu/${item.id}`);
        
    }
    return(
        <div className="resto-card">
            <h3>{item.name}</h3>
            <p>{item.cuisine}</p>
            <p>Rating : {item.rating}</p>
            <p>Delivery Time : {item.deliveryTime}</p>
            <button onClick={handleViewMenu}>View Menu</button>
        </div>
    )
}
export default ResturantCard;