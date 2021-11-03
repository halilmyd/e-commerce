import React from 'react'
import { Link } from "react-router-dom";


function Nav() {

    return (
        <div className="Nav">
            <nav>
                <ul className="nav-Links">
                    <Link to="/">
                    <h1><li className="hknd">Ürün Listesi</li></h1>    
                    </Link>
                    <Link to="/favoriler">
                      <h1><li className="ilts">Favoriler</li></h1> 
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;