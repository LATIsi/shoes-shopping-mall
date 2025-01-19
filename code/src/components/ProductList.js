import React from 'react';
import CardItem from './CardItem';
import  '../styles/productList.css';
// import img from '../assets/shose1.jpg';
// import img2 from '../assets/shose3.jpg';

let product_data = [
                    {
                        id:0,
                        src : "images/shose1.jpg",
                        product_name : "브랜드A",
                        product_description : "편안하고 착용감이 좋은 신발",
                        product_price : "35,000원"
                    },
                    {
                        id:1,
                        src : "images/shose2.jpg",
                        product_name : "브랜드A",
                        product_description : "힙한 컬러가 매력적인 신발",
                        product_price : "25,000원"
                    },
                    {
                        id:2,
                        src : "images/shose3.jpg",
                        product_name : "브랜드B",
                        product_description : "편안하고 착용감이 좋은 신발",
                        product_price : "35,000원"
                    },
                    {
                        id:3,
                        src : "images/shose4.jpg",
                        product_name : "브랜드B",
                        product_description : "힙한 컬러가 매력적인 신발",
                        product_price : "35,000원"
                    },

                    {
                        id:4,
                        src : "images/shose5.jpg",
                        product_name : "브랜드C",
                        product_description : "편안하고 착용감이 좋은 신발",
                        product_price : "35,000원"
                    },
                    {
                        id:5,
                        src : "images/shose6.jpg",
                        product_name : "브랜드C",
                        product_description : "힙한 컬러가 매력적인 신발",
                        product_price : "35,000원"
                    },
                    {
                        id:6,
                        src : "images/shose5.jpg",
                        product_name : "브랜드A",
                        product_description : "편안하고 착용감이 좋은 신발",
                        product_price : "35,000원"
                    },
                    {
                        id:7,
                        src : "images/shose4.jpg",
                        product_name : "브랜드A",
                        product_description : "힙한 컬러가 매력적인 신발",
                        product_price : "35,000원"
                    },
                    {
                        id:8,
                        src : "images/shose3.jpg",
                        product_name : "브랜드c",
                        product_description : "힙한 컬러가 매력적인 신발",
                        product_price : "35,000원"
                    },
                    {
                        id:9,
                        src : "images/shose2.jpg",
                        product_name : "브랜드c",
                        product_description : "편안하고 착용감이 좋은 신발",
                        product_price : "35,000원"
                    }
                    ];

                    
function AddShowList(){
    const content = product_data.map(
        function(product){
            return(  <CardItem
                    key={Number(product.id)}
                    id={Number(product.id)}
                    src={product.src}
                    product_name = {product.product_name}
                    product_description = {product.product_description}
                    product_price = {product.product_price}
                    card_state = "담기"
                    />)
        }); 
    return content;
}

function productList(){ 
    let show_product_id = null;
    show_product_id = product_data.length;
    return(
        <div className="Product_content">
        <h1>신발 상품 목록</h1>
        <h4>현재 {show_product_id}개의 상품이 있습니다.</h4>
        <div className="cards">
                <div className="cards_container">
                    <ul className="cards_items">
                    <AddShowList>
                    </AddShowList>
                    </ul>    
                </div>     
        </div>
        </div>
    );
}

export default productList;