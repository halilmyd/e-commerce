import React from 'react'
import '../Components/DetailCard.css';
import Categories from './Categories';
import Footer from './Footer';

const DetailCard = ({urunAcıklaması,urunAdı,urunIndırımOranı,id,notifySucces,urunIndirimliFiyat,basketNotifySucces,urunIndirimsizFiyat,urunResmi,addToFavories,addBasket}) => {

    

    return (
        <div className="DetailCard ">
            <Categories /> <br /><br /><br />
            <div className="en-dıs container">
                <div className="ürün-resmi">
                    <img src={urunResmi} />
                </div>

                <div className="özellik">
                    <div className="urun-baslık">
                        <h3>{urunAdı}</h3>
                    </div>

                    <div className="urun-acıklama">
                        <h4>Ürün Açıklaması:</h4>
                        <p>{urunAcıklaması}</p>
                    </div>
                    <div className="urun-fiyat">
                        <h1>{urunIndirimliFiyat}</h1>
                        <h5><strike>{urunIndirimsizFiyat}₺</strike></h5>
                        <h6>-{urunIndırımOranı}%</h6>
                    </div>
                    <div className="urun-buton">
                        <a onClick={basketNotifySucces}><button onClick={()=>addBasket(id)} class="ui primary button butons ">Sepete Ekle</button></a>
                        <a onClick={notifySucces}><img  onClick={()=>addToFavories(id)} src="https://imgyukle.com/f/2021/11/13/ksCfEs.png"/></a>
                    </div>

                </div>
            </div>
            <div className="detail-footer">
                <Footer />
            </div>
        </div>
    )
}
export default DetailCard;