import React from 'react';
import CardItem from './CardItem';
import  '../styles/productList.css';

function productList(){

    // function data_read(data){
    //     let title, body = null;
    //     for(let i=0; i<data.length; i++){
    //         console.log(data[i].id, id);
    //         if(data[i].id === id){
    //           title = data[i].title;
    //           body = data[i].body;
    //           body = data[i].body;
    //           body = data[i].body;
    //         }
    //       }
    //     return(
            
    //     );
    // };

    const product_data =[ {id:1, src : "images/shose1.jpg",
                          product_name : "브랜드A",
                          product_description : "편안하고 착용감이 좋은 신발",
                          product_price : "35,000원"
                          },
                          {id:2, src : "images/shose2.jpg",
                          product_name : "브랜드B",
                          product_description : "편안하고 착용감이 좋은 신발",
                          product_price : "35,000원"
                          },
                          {id:3, src : "images/shose3.jpg",
                          product_name : "브랜드C",
                          product_description : "편안하고 착용감이 좋은 신발",
                          product_price : "35,000원"
                          },
                          {id:4, src : "images/shose4.jpg",
                          product_name : "브랜드F",
                          product_description : "편안하고 착용감이 좋은 신발",
                          product_price : "35,000원"
                          },
                        ];
                        
    let count = 3;
                        
    return(
        <div class="pL">
        <div>신발 상품 목록</div>
        <div>현재 {count}개의 상품이 있습니다.</div>
        <div className="cards">
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">

                        <CardItem
                         src = "images/shose1.jpg"
                         product_name = "브랜드A"
                         product_description = "편안하고 착용감이 좋은 신발"
                         product_price = "35,000원"
                        />
                        <CardItem
                         src = "images/shose2.jpg"
                         product_name = "브랜드B"
                         product_description = "힙한 컬러가 아주아주아주 매력적인 신발"
                         product_price = "25,000원"
                        />
                        <CardItem
                         src = "images/shose2.jpg"
                         product_name = "브랜드C"
                         product_description = "힙한 컬러가 매력적인 신발"
                         product_price = "36,000원"
                        />        
                    </ul>    
                </div>
            </div>         
        </div>
        </div>
    );
}

export default productList;