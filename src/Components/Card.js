import React from 'react'

import '../Components/Card.css';

const Card = ({ name, priceWithOutDiscount, discountedPrice, discount , id, addToFavories, removeInFavories , notify }) => {
  return (
    <div className="Card">
      <div className="container-card">
        <div className="card-card">
          <div className="imgBx">
            <img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNWJiMTI0NjEtMGU2My00YmJiLWIyNzctMGZiNzE5MDAzNzA2Iiwid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" />
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
              <h2><b>{discountedPrice}₺</b></h2> <br/><br/><br/>
              <div>
                <p><strike>{priceWithOutDiscount}₺</strike></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;