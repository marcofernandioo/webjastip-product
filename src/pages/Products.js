import React, {useState, useEffect} from 'react';

import ProductToolbar from '../components/ProductToolbar';
import ProductCard from '../components/ProductCard';
import sanityClient from '../client';

const Products = () => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [openCard, setOpenCard] = useState(false);
  const [cardProduct, setCardProduct] = useState();
  const [categories, setCategories] = useState([]);

  const queryProductsString = `
    *[_type == 'product']{
      name,
      price,
      desc,
      limitedslot,
      category -> {
      title
      },
      image{
        asset->{
          url
        }
      }
    } | order(_createdAt asc)
  `;

  useEffect(() => {
    sanityClient.fetch(queryProductsString)
      .then(res => {
        setProducts(res);
        setDisplayProducts(res);
        const unique = [...new Set(res.map(prod => prod.category.title))];
        setCategories(unique);
      })
      .catch(err => alert('Produk tidak ditemukan. Coba ulangi kembali.'));
  }, []);

  const callback = (search,category) => { // Filter products by search string and/or selected category onChange for each argument.
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

  const handleCloseCard = () => { // Closes the ProductCard component.
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
        ) : <div />
      }
    </div>
  );
};

export default Products;
