import React from 'react'



const Semantic = ({ ad, fiyat, yeniFiyat, indirim, id, favoriyeEkle }) => {
    return (

        <div className="ui card">
            <img alt="ürünün resmi bulunmamaktadır" src="https://r.resimlink.com/4UhH.jpg" />

            <div className="content">
                <p className="header">{ad}</p>
                <div className="meta">
                    <h2 className="fiyat"><strike> {fiyat} </strike> yerine</h2>
                    <h5>% {indirim} indirimle</h5>
                    <h3>sadece {yeniFiyat}</h3>
                    <span className="center floated">
                        Favori <br />
                        <i onClick={() => favoriyeEkle(id)} className="heart outline like icon"></i>
                    </span>

                </div>
            </div>
        </div>

    )
}

export default Semantic;

