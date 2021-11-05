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
                        <h2 className="home-page"><img className="logo" src="https://imgyukle.com/f/2021/11/05/kOZKhA.jpg" /></h2>
                    </Link>
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="ınput" type="text" placeholder="Ürün arayın.." />
                            <i className="search icon"></i>
                        </div>
                        <div className="results"></div>
                    </div>
                    <div>
                        <div class="ui labeled button" tabindex="0">
                            <div class="ui red button">
                                <i class="heart icon"></i>Favoriler
                            </div>
                        </div>
                        <button className="ui right labeled icon button" onClick={() => cıkısYap()}>
                            <i className="right arrow icon"></i>Çıkıs</button>
                    </div>
                </ul>


            </nav>
        </div>
    )
}
export default Nav;