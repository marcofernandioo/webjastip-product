import React, {useState, useEffect} from 'react';
import useSWR from 'swr';

import ProductToolbar from '../components/ProductToolbar';
import ProductCard from '../components/ProductCard';
import sanityClient from '../client';

const Products = () => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [openCard, setOpenCard] = useState(false);
  const [cardProduct, setCardProduct] = useState();
  // const [productswr, setpswr] = useState([]);
  const queryString = `
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
`;

// const query = process.env.REACT_APP_API + queryString;
  const query = process.env.REACT_APP_API + encodeURIComponent(queryString);
  const { data: productswr, error } = useSWR(query)

  const callback = (search) => {
    const filteredProducts = search
        ? products.filter(product => product.name.includes(search))
        : products;
    setDisplayProducts(filteredProducts);
  }
  useEffect(() => {
    sanityClient
    .fetch(queryString)
    .then(res => {
      setProducts(res);
      setDisplayProducts(res);
    })
    .catch(err => alert('Error, coba ulangi kembali.'));
  }, [])

  // if (error) return <div>failed to load</div>
  // if (!products) return <div>loading...</div>
  // console.log(productswr.body);
  // console.log(productswr.headers);

  const handleCloseCard = () => {
    setOpenCard(false);
  }

  return (
    <div class="py-60">
      
          <ProductCard 
            closeCard={handleCloseCard}
            openState={openCard} 
            product = {cardProduct}
          /> 
        
      <ProductToolbar parentCallback = {callback}/>
      <div class="grid grid-cols-12 pb-10 gap-x-10 gap-y-8 py-8 mx-4">
      {
        displayProducts && displayProducts.map(product => (
          <>
            <div class="items-center col-span-4 space-y-3 rounded-lg">
              <a 
                class="block" 
                onClick={() => {
                  setOpenCard(true);
                  setCardProduct(product);
                }}
              >
                  <img 
                    class="object-cover mb-1 rounded-lg shadow-sm"
                    style={{width : "30vw", height : "30vw"}}
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
