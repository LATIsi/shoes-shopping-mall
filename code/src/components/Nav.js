import React from 'react';
import  '../styles/nav.css';
import { AiOutlineShopping } from "react-icons/ai";
import { IoArrowBackSharp } from "react-icons/io5";

function nav(props) {
    return (
        <div id = "Nav">
            <ul>
                {/* <li class="back_btn" >
                    <a href="">
                        <IoArrowBackSharp size={50} color="white"
                        onMouseOver={({target})=>target.style.color="dimgrey"}
                        onMouseOut={({target})=>target.style.color="white"}
                        />
                    </a>
                </li> */}
                <li class="cart_btn" >
                    <a href="">
                        <AiOutlineShopping size={50} color="white"
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