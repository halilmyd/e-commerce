import React from 'react'
import { Link } from "react-router-dom";
import '../Components/Card.css';

const Card = ({ name, priceWithOutDiscount, discountedPrice, discount, id, addToFavories, removeInFavories, notifySucces, productImage,FavoriesNotifyRemove ,addBasket,basketNotifySucces, removeInBasket,removeBasketNotifySucces}) => {
  return (
    <div className="globacard"> 
      <div className="Card">
        <div className="container-card">
          <div className="card-card">
            <div className="imgBx">
            
              <a href={`/detay/${id}`}><img src={productImage} /></a>
              
              <ul className="discount-percentage-card">
                <li className="discount-card">-{discount}%</li>
              </ul>
              <ul className="action-card">
                <li onClick={() => addToFavories(id)}><i className="heart icon" onClick={notifySucces}  ></i></li>
                <li onClick={() => removeInFavories(id)}><i className="heart outline icon" onClick={FavoriesNotifyRemove}></i></li>
                <li onClick={() => addBasket(id)}><i className="cart plus icon" onClick={basketNotifySucces}></i></li>
                <li onClick={() => removeInBasket(id)}><i className="cart arrow down icon" onClick={removeBasketNotifySucces} ></i></li>
              </ul>
            </div>
            <div className="content-card">
              <div className="productName-card">
              <a href={`/detay/${id}`}>
                <h3>{name}</h3>
                </a>
              </div>
              <div className="price_rating-card">
                <h2><b>{discountedPrice}₺</b></h2> <br /><br /><br />
                <div>
                  <p><strike>{priceWithOutDiscount}₺</strike></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;