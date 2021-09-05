import React from 'react';

import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { name, price, desc, limitedslot, category } = useParams();

    return (
        <div>
            <h1>{name}</h1> 
            <h1>{price}</h1>
            <h1>{desc}</h1>
            <h1>{limitedslot}</h1>
            <h1>{category}</h1>

        </div>
    );
    
};

export default ProductDetail;