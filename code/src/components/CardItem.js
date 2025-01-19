import React, { useState } from 'react';
import  '../styles/card.css';

function CardItem(props) {
  let gotItem = props.card_state;
  let [select , setSelect] = useState(gotItem);
  let content = null;

  // 버튼에 나오는 content
  // 받아온 props중, card_state 상태가 true(담기)면 버튼의 className을 show-menu로
  // false(담김!) 이면 버튼의 className을 hide-menu로 바꿔주어 각각에 맞는 css를 보여줌 
   content = <button
              className={ select ? "show-menu" : "hide-menu" }
              // 버튼 누르면 값 바꿔줌
              onClick={ () => {
                  setSelect((select) =>
                  select = !select
              );
              }}
            >
            {select ? "담기" : "담김!"} 
            </button>

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