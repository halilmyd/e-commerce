import React, { useState } from 'react'
import { Link } from "react-router-dom";




function Nav() {
    
    const [keyword,setKeyword] = useState("")

    const searchClick =()=> {
     window.location.href="/search/" +( keyword || " " )
    } 

    const onKeyUp =(event)=> {
        if(event.charCode === 13){
            searchClick()
        }
    }
        
    return (
        <div className="Nav">
            <ul className="description">
                <li>Temizlikten gıdaya, kahveden oyuncağa 1000'in üzerinde ürünü avantajlı fiyatlarla alın!</li>
                <li><a href="#">İletişim</a></li>
                <li><a href="#">Kampanyalar</a></li>
            </ul>
            <nav className="container">
                <ul className="nav-Links">
                    <Link to="/">
                        <h2 className="home-page"><img className="logo" src="https://imgyukle.com/f/2021/11/07/kcJ8zY.png   " /></h2>
                    </Link>
                    <div className="ui icon input" >
                        <input className="ınput" type="text" placeholder="Ürün arayın..." onChange={(e)=> setKeyword(e.target.value)} onKeyPress={onKeyUp}/>
                        <i className="inverted circular search link icon" onClick={searchClick} ></i>
                    </div>
                    <div className="nav-right">
                        <Link to="/profil">
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">Profil</div>
                                <div className="visible content">
                                    <i className="user icon"></i>
                                </div>
                            </div>
                        </Link>
                        <Link to="/sepetim">
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">Sepet</div>
                                <div className="visible content">
                                    <i className="shop icon"></i>
                                </div>
                            </div>
                        </Link>
                        <Link to="/favoriler">
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">Favoriler</div>
                                <div className="visible content">
                                    <i className="heart icon"></i>
                                </div>
                            </div>
                        </Link>
                        
                    </div>
                </ul>


            </nav>
        </div >
    )
}
export default Nav;