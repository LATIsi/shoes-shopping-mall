import {createContext }from 'react';
const CartContext = createContext({
    // 여기에서 설정해주는 기본값은 IDE에서 접근 가능함
    // 해당 컨텍스트 사용하려고 할 때 . 찍으면 값 추천해줌
    items: [],
    addItemToCart: () => {},
    updateCartItemQuantity: () => {},
});
export default CartContext;
