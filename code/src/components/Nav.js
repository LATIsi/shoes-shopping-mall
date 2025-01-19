import React, { createContext, useContext } from 'react';
import  '../styles/nav.css';
import { AiOutlineShopping } from "react-icons/ai";
import { IoArrowBackSharp } from "react-icons/io5";

let cart_array =[];
let cart_count = createContext(cart_array);

function nav() {
    const nav_cart = 0;
    return (
        <div id = "Nav">
            <ul>
                {/* 뒤로가기 버튼
                    <li className="back_btn" >
                    <a href="">
                        <IoArrowBackSharp size={35} color="white"
                        onMouseOver={({target})=>target.style.color="dimgrey"}
                        onMouseOut={({target})=>target.style.color="white"}
                        />
                    </a>
                </li> */}
                <li className="cart_btn" >
                    <div>
                        {nav_cart === 0? (
                            <></>
                        ) : (
                            <div className="cart_count_circle">{nav_cart}</div>
                        )}
                    </div>
                    <a href="">
                        <AiOutlineShopping size={35} color="white"
                        onMouseOver={({target})=>target.style.color="dimgrey"}
                        onMouseOut={({target})=>target.style.color="white"}
                        />
                    </a>
                    
                </li>
            </ul> 
        </div>
        );
}

export default nav;