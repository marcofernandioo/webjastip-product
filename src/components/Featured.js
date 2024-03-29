import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import formatRupiah from '../utils/formatRupiah';

const BestProducts = () => {
  const [products, setProducts] = useState([]);
  const [batch, setBatch] = useState();

  useEffect(() => {
    sanityClient
    .fetch(`
      *[_type == 'product' && bestseller == true]{
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
      } | order(_createdAt asc) [0...5]
    `)
    .then(res => {
      setProducts(res);
    })
    .catch(err => alert('Produk tidak ditemukan, coba ulangi kembali'));
  }, []);

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == 'batch'] {
      batchName,
      desc,
      image {
        asset -> {
          url
        }
      }
    } [0]
  `)
  .then(res => {
    setBatch(res);
  })
  .catch(err => alert("Batch tidak ditemukan, coba ulangi kembali"));
  }, [])

  return (
    <div>
      <section class="bg-white">
        <div class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          {
            batch ? (
              <div class="flex flex-col items-center sm:px-5 md:flex-row">
                <div class="w-full md:w-1/2">
                  <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                    <img src={batch.image.asset.url} alt="https://cdn.devdojo.com/images/may2021/cupcakes.jpg"/>
                  </div>
                </div>
                <div class="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
                    <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                        <div class="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                            <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <span>Batch</span>
                        </div>
                        <h2 class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">{batch.batchName}</h2>
                        <p class="pt-2 text-md font-medium"><span class="mx-1 text-gray-600">{batch.desc}</span></p>
                    </div>
                </div>
              </div>
            ) : <div />
          }

          <div class="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16 ">
            {
              products && products.map(product => (
                <>
                  <div class="flex flex-col items-center col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 rounded-lg">
                    <a href="/#/products" class="block">
                        <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src={product.image.asset.url} />
                    </a>
                    <span class="bg-yellow-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                        <span>{product.category.title}</span>
                    </span>
                    <h2 class="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">{product.name}</a></h2>
                    <h2 class="text-md text-gray-900 font-bold sm:text-xl md:text-2xl">{formatRupiah(product.price)}</h2>
                    <p class="text-sm text-gray-500">{product.desc}</p>
                    <p class="pt-2 text-xs font-medium">
                      { product.limitedslot ? (  <span class="mx-1"> · Limited Slot!</span> ) : <span></span>}
                    </p>
                  </div>
                </>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestProducts;