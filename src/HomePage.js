import React from 'react'



const HomePage = () => {

    
    return (
        <div className="HomePage">
            <div>
                <h3 className="header-categories">Kategoriler</h3>
                <div className="categories">
                            <ul>
                                <li><a>Gıda</a>
                                     <ul>
                                        <li><a href="#">Peynir</a></li>
                                    </ul>
                                </li>
                                <li><a>Giyim</a>
                                     <ul>
                                        <li><a href="#">Kadın Giyim</a></li>
                                    </ul>
                                </li>
                                <li><a>Teknoloji</a>
                                     <ul>
                                        <li><a href="#">Bilgisayar</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
            </div>
        </div>
    )
}
export default HomePage;

