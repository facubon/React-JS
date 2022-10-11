//Bara de Navegacion//

import { Link } from "react-router-dom"

const NavBar = () => {
    return (

        <div className="justify-center navbar bg-base-100">

        

        <div className="flex text-lg pr-96">
            <h1 className="titulo">BurgerBon </h1>
        </div>

        <div className="flex text-lg pr-96">
            <Link to='/shop' className="titulo">Menu</Link> 
        </div>

    

    <div className="flex-none">

    <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
    <div className="indicator">
        
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <span className="badge badge-sm indicator-item">0</span>
    </div>
        </label>


    <div tabIndex={0} className="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100">
    <div className="card-body">
        <span className="text-lg font-bold">carrito vacio</span>
        <span className="text-info">Subtotal: $0</span>
    <div className="card-actions">
        <button className="btn btn-primary btn-block">Comprar!</button>
    </div>

    </div>
    </div>
</div>


    <div className="dropdown dropdown-end">


</div>
</div>
</div>










    )}

export default NavBar