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
  const [categories, setCategories] = useState();

  // const [productswr, setpswr] = useState([]);
  const queryProductsString = `
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
    } | order(_createdAt asc) | order(category.title asc)
  `;
  const queryCategoriesString = `
    *[_type == 'kategori'] {
      title
    }
  `;

// const query = process.env.REACT_APP_API + queryProductsString;
  const query = process.env.REACT_APP_API + encodeURIComponent(queryProductsString);
  const { data: productswr, error } = useSWR(query)

  const callback = (search,category) => {
    console.log(search,category);
    const filteredProducts = () => { // Yes, I will refactor this spaghetti code after I've delivered this product.
      if (products) {
        if (search && category === "") // Search exists, category is all.
          return products.filter(product => product.name.includes(search))
        if (category && search === "") // Search doesn't exists, specific category but not All.
          return products.filter(product => product.category.title.includes(category)) 
        if (search !== "" && category !== "") // Search string exists and Category is not All.
          return products.filter(product => product.name.includes(search)).filter(product => product.category.title.includes(category))
        if (search === "" && category === "") // Search doesn't exists, category is All.
          return products
      } else return products;
    }
    setDisplayProducts(filteredProducts());
  }

  useEffect(() => {
    sanityClient
    .fetch(queryProductsString)
    .then(res => {
      setProducts(res);
      setDisplayProducts(res);
    })
    .catch(err => alert('Error, coba ulangi kembali.'));
  }, [])

  useEffect(() => {
    sanityClient
    .fetch(queryCategoriesString)
    .then(res => {
      const cats_ = res.map(cat => cat.title);
      setCategories(cats_)
    })
    .catch(err => alert('Error, kategori tidak tercari. Coba ulangi kembali'));
  }, [])

  // if (error) return <div>failed to load</div>
  // if (!products) return <div>loading...</div>
  // console.log(productswr.body);
  // console.log(productswr.headers);

  const handleCloseCard = () => {
    setOpenCard(false);
  }

  return (
    <div class="py-5">
      <ProductToolbar parentCallback = {callback} categories = {categories}/>
      <div class="grid grid-cols-12 pb-10 gap-x-3 gap-y-3 py-8 mx-4">
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
      { 
        openCard && cardProduct ? (
          <ProductCard 
            closeCard={handleCloseCard}
            openState={openCard} 
            product = {cardProduct}
          /> 
        ): <div />
      }
    </div>
  );
};

export default Products;
