import React from 'react'
import '../Components/XCard.css';


 const XCard = ({image,price,name,pricewithout, discount,removeInBasket,BasketNotifyRemove, id ,addToFavories,notifySucces}) => {
    return (
        <div className="container urunler ">
      <div className="xcards">
      <div className="resim">
      <a href={`/detay/${id}`}>
        <img src={image} />
        </a>
      </div>
      <div>
      <a href={`/detay/${id}`}>
        <p className="name-card">{name}</p>
        </a>
      </div>
      <div >
        <p><strike>{pricewithout}</strike></p>
      </div>
      <div>
        <p>-{discount}%</p>
      </div>
      <div>
        <p className="prices"><strong>{price}</strong></p>
      </div>
      <div className="urun-silme">
      <a onClick={BasketNotifyRemove}><i className="close icon" onClick={() => removeInBasket(id)}></i></a>
      <a onClick={() => addToFavories(id)}><i className="heart icon kalp" onClick={notifySucces} ></i></a>
      </div>
      </div>
    </div>
    )
}
export default XCard;