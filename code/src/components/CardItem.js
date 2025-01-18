import React from 'react';
import  '../styles/card.css';

function CardItem(props) {
    return (
                <li className="cards_item">
                    <div class="cards__item__pic-wrap">
                        <img 
                          className="cards_item_img"
                          alt="Shose_img"
                          src={props.src}
                        />
                      </div>
                    <div className="cards_item_info">
                      <div className="cards_product_name">{props.product_name}</div>
                      <div className="cards_product_description">{props.product_description}</div>
                      <div className="cards_product_price">{props.product_price}</div>
                      <div className="cartToggleBtn" ><button>담기</button></div>
                    </div>
                </li>
            );
}

export default CardItem;