import React, { useState } from 'react';
import  '../styles/card.css';

function CardItem(props) {
  const [select , setSelect] = useState(props.card_state);
  let content = null;
  content = <button className={ select === "담기" ? "show-menu" : "hide-menu"}>{select}</button>

    return (
                <li className="cards_item">
                    <div className="cards__item__pic-wrap">
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
                      <div className="cartToggleBtn" >{content}</div>
                    </div>
                </li>
            );
}

export default CardItem;