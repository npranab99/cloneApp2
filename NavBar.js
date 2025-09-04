import { Link, useNavigate } from "react-router-dom";


const NavBar = ()=>{
    const navigate = useNavigate()
    const handleHome = ()=>
        {
            navigate('/')
        } 

        const handleCart = ()=>{
            navigate ('/cart')
        }
    
    return(
        <div className='header'>
            <div className='logo-container'>
            <img className='logo' src='https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg'/>
        </div>
        <div className='nav-items'>
            <ul>
                <li onClick={handleHome}>Home</li>
                <li onClick={handleCart}>Cart - </li>

            </ul>
        </div>
        </div>
    )
}

export default NavBar;