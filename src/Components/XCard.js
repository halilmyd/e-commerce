import React from 'react'
import '../Components/XCard.css';
import { Link } from "react-router-dom";

 const XCard = ({image,price,name,pricewithout, discount,removeInBasket,BasketNotifyRemove, id }) => {
    return (
        <div className="container urunler ">
      <div className="xcards">
      <div className="resim">
      <Link to={`/detay/${id}`}>
        <img src={image} />
        </Link>
      </div>
      <div>
      <Link to={`/detay/${id}`}>
        <p className="name-card">{name}</p>
        </Link>
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
      </div>
      </div>
    </div>
    )
}
export default XCard;