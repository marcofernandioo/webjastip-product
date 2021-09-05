import React, {useState, useEffect} from 'react';

import ProductToolbar from '../components/ProductToolbar';
import sanityClient from '../client';

import formatRupiah from '../utils/formatRupiah';

const Products = () => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const callback = (search) => {
    const filteredProducts = search
        ? products.filter(product => product.name.includes(search))
        : products;
    setDisplayProducts(filteredProducts);
  }
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
    .then(res => {
      setProducts(res);
      setDisplayProducts(res);
    })
    .catch(err => alert('Error, coba ulangi kembali.'));
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
    .then(res => console.log(res));
  }, [])

  return (
    <div class="py-60">
      <ProductToolbar parentCallback = {callback}/>
      <div class="flex grid grid-cols-12 pb-10 gap-x-5 gap-y-8 py-8 mx-4">
      {
        displayProducts && displayProducts.map(product => (
          <>
            <div class="flex flex-col items-center col-span-4 space-y-3 rounded-lg">
              <a 
                class="block" 
                onClick={() => {
                  let encodedURL = encodeURIComponent(product.image.asset.url);
                  window.location.href=`/#/products/${product.name}/${product.price}/${product.desc}/${product.limitedslot}/${product.category.title}/${encodedURL}`;
                }}
              >
                  <img 
                    class="object-cover h-70 w-70 mb-1 rounded-lg shadow-sm" 
                    src={product.image.asset.url}
                  />
              </a>
            </div>
          </>
        ))
      }
      </div>
    </div>
  );
};

export default Products;
