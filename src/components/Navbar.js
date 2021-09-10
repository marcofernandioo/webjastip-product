import React, {useEffect,useState} from 'react';
import Instagram from './socials/Instagram';
import WhatsApp from './socials/WhatsApp';


const Navbar = (props) => {
  let social = props.data
  return (
    <div>
      <section class="relative w-full px-8 text-gray-700 bg-white body-font bg-gray-100">
        <div class="container flex flex-col items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <a href="/" class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">{social.ig}</a>
            <nav class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
                <a href="/" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }">
                  <span class="block">Home</span>
                </a>
                <a href="/#/products" class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }">
                  <span class="block">Products</span>
                </a>
            </nav>
            <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
              <span class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                <Instagram link = {social.ig}/>
                <WhatsApp link = {social.wa} />
              </span>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Navbar;