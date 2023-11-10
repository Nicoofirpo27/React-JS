import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom' 8.3k (gzipped: 3.4k)

const NavBar = () => {
    return (
        <nav className="NavBar" >
            <link to='/'>
            <h3>°°° Nuscaa Indumentaria °°°</h3>
            </link>
            <div className="Categories">
               <NavLink to={`/category/remera`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remera</NavLink>
               <NavLink to={`/category/pantalon`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pantalon</NavLink>
               <NavLink to={`/category/buzo`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Buzo</NavLink>

            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar