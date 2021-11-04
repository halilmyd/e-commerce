import React from 'react'
import { Link } from "react-router-dom";


function Nav() {

    const cıkısYap = () => {
        localStorage.setItem("isLogin", "false")
        window.location.href = "/login"
    }

    return (
        <div className="Nav">
            <nav>
                <ul className="nav-Links">
                    <Link to="/">
                        <h2><li className="hknd">Anasayfa</li></h2>
                    </Link>
                </ul>  
            </nav>
        </div>
    )
}
export default Nav;