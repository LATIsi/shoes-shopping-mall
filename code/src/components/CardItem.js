import React, { useState, useContext } from 'react';
import  '../styles/card.css';
import CartContext from '../context/CartContext';
import CardNumberInput from './CardNumberInput';

function CardItem(props) {
  const gotItemid = Number(props.id);
  const gotItemcart = props.card_state;
  const [selectid , setSelectId] = useState(gotItemid);
  const [selectcart , setSelectCart] = useState(gotItemcart);
  let content,buy = null;

  const { cart, updateCartItemQuantity } = useContext(CartContext);

  function onClickCartHander(){
      return (
        setSelectCart(!selectcart)
        //updateCartItemQuantity({ items.push(selectid) })
      )
  }

  function onClickCartHander2(){
    return <CardNumberInput/>
}

  console.log(selectid,selectcart)
  // 버튼에 나오는 content
  // 받아온 props중, card_state 상태가 true(담기)면 버튼의 className을 show-menu로
  // false(담김!) 이면 버튼의 className을 hide-menu로 바꿔주어 각각에 맞는 css를 보여줌 
    content = <button
                className={ selectcart ? "show-menu" : "hide-menu" }
                // 버튼 누르면 값 바꿔줌
                onClick={onClickCartHander}
              >
              {selectcart ? "담기" : "담김!"} 
              </button>

    buy = <button
              className="buy_btn"
              // 버튼 누르면 결제 카드 등록으로 이동
              onClick={onClickCartHander2}
            >
            구매
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
                      <div>
                          {content}
                          {buy}
                      </div>
                    </div>
                </li>
            );
}

export default CardItem;