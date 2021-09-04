import React, {useState, useEffect} from 'react';

import ProductToolbar from '../components/ProductToolbar';
import sanityClient from '../client';

const Products = () => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sanityClient
    .fetch(`
        *[_type == 'product']{
            name,
            price,
            desc,
            limitedslot,
            category -> {
                title,
                colors
            },
            image{
                asset->{
                    url
                }
            }
        } | order(_createdAt asc)
    `)
    .then(res => setProducts(res))
    .catch(err => alert('Error, coba ulangi kembali.'));
}, [])
  const callback = (search) => {
    const filteredProducts = search
        ? products.filter(product => product.name.includes(search))
        : products;
    setDisplayProducts(filteredProducts);
  }
  return (
    <div>
      <ProductToolbar parentCallback = {callback}/>
      {/* {JSON.stringify(displayProducts,null,4)} */}
    </div>
  );
};

export default Products;
