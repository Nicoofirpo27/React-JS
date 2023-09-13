import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>°°° Nuscaa Indumentaria °°°</h3>
            <div>
                <button>Remeras</button>
                <button>Pantalones</button>
                <button>Camperas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar