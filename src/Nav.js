import React from 'react'
import { Link } from "react-router-dom";


function Nav() {

    const cıkısYap = () => {
        localStorage.setItem("isLogin", "false")
        window.location.href = "/login"
    }

    return (
        <div className="Nav">
            <ul className="description">
                <li>Temizlikten gıdaya, kahveden oyuncağa 1000'in üzerinde ürünü avantajlı fiyatlarla alın!</li>
                <li><a href="#">İletişim</a></li>
                <li><a href="#">Kampanyalar</a></li>
            </ul>
            <nav>
                <ul className="nav-Links">
                    <Link to="/">
                        <h2 className="home-page"><img className="logo" src="https://i.hizliresim.com/lu1fmra.png" /></h2>
                    </Link>
                    <div className="ui icon input">
                        <input className="ınput" type="text" placeholder="Ürün arayın..." />
                        <i className="inverted circular search link icon"></i>
                    </div>
                    <div>
                        <Link to="/sepetim">
                            <div className="ui vertical animated button" tabindex="0">
                                <div className="hidden content">Sepetim</div>
                                <div className="visible content">
                                    <i className="shop icon"></i>
                                </div>
                            </div>
                        </Link>
                        <Link to="/favoriler">
                            <div className="ui vertical animated button" tabindex="0">
                            <div className ="hidden content">Favoriler</div>
                            <div className ="visible content">
                            <i className="heart icon"></i>
                            </div>
                            </div>
                        </Link>
                        <div className="ui animated button" tabindex="0" onClick={() => cıkısYap()}>
                            <div className="visible content" >Çıkış</div>
                            <div className="hidden content">
                                <i className="right arrow icon" ></i>
                            </div>
                        </div>
                    </div>
                </ul>


            </nav>
        </div >
    )
}
export default Nav;