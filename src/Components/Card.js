import React from 'react'

import '../Components/Card.css';

const Card = ({ name, priceWithOutDiscount, discountedPrice, discount, id, addToFavories, removeInFavories, notify, productImage }) => {
  return (
    <div className="globacard">
      <div className="Card">
        <div className="container-card">
          <div className="card-card">
            <div className="imgBx">
              <img src={productImage} />
              <ul className="discount-percentage-card">
                <li className="discount-card">-{discount}%</li>
              </ul>
              <ul className="action-card">
                <li onClick={notify}><i className="heart icon" onClick={() => addToFavories(id)} ></i></li>
                <li><i class="heart outline icon" onClick={() => removeInFavories(id)}></i></li>
              </ul>
            </div>
            <div className="content-card">
              <div className="rating-card">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa  fa-star" aria-hidden="true"></i>
                <i className="fa grey fa-star" aria-hidden="true"></i>
              </div>
              <div className="productName-card">
                <h3>{name}</h3>
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