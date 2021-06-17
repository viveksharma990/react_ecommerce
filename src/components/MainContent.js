import React from 'react';
import './MainContent.css';
import product_card from "../data/Product_data";

const MainContent = () => {
    console.log(product_card);
    const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} alt="card_img" />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price"><span>{item.currency}</span> {item.price}</p>
                <div className="btn">Add to cart</div>
            </div>
        </div>

    );
    return (
        <div className="main-content">
            <h3>Jeans Store</h3>
            {listItems}
        </div>
    )
}
export default MainContent;