import React from 'react';

import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { name, price, desc, limitedslot, category, imgURL } = useParams();
    const decodedURL = decodeURIComponent(imgURL)
    return (
        <div>
            <h1>{name}</h1> 
            <h1>{price}</h1>
            <h1>{desc}</h1>
            <h1>{limitedslot}</h1>
            <h1>{category}</h1>
            <img src={decodedURL} />
        </div>
    );

};

export default ProductDetail;