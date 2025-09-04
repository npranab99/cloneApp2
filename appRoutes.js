import {Routes, Route} from 'react-router-dom'
import ResturentsList from './Components/ResturentsList'
import Cart from './Crat'
import MenuList from './Components/MenuList'

const routePath = {
    home: "/",
    cart: "/cart",
    menu: "/menu/:id",
    about: "/about"

}

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path={routePath.home} element={<ResturentsList/>}/>
            <Route path={routePath.cart} element={<Cart/>}/>
            <Route path={routePath.menu} element={<MenuList/>}/>
        </Routes>
    )
}

export default AppRoutes;