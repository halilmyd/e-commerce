import React from 'react'
import '../Components/XCard.css';

 const XCard = ({image,price,name,pricewithout, discount,removeInBasket,BasketNotifyRemove, id }) => {
    return (
        <div className="container urunler ">
      <div className="xcards">
      <div className="resim">
        <img src={image} />
      </div>
      <div>
        <p>{name}</p>
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
      <a onClick={BasketNotifyRemove}><i className="ban icon icons" onClick={() => removeInBasket(id)}></i></a>
      </div>
      </div>
    </div>
    )
}
export default XCard;