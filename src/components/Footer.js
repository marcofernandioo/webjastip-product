import React from 'react';

import Instagram from './socials/Instagram';
import WhatsApp from './socials/WhatsApp';

const Footer = (props) => {
  let social = props.data
  return (
    <div>
      <section class="text-gray-700 bg-white body-font">
          <div class="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
              <a href="#_" class="text-xl font-black leading-none text-gray-900 select-none logo">tails<span class="text-indigo-600">.</span></a>
              <p class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">© 2021 Tails - Tailwindcss Page Builder
              </p>
              <span class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                <Instagram link = {social.ig}/>
                <WhatsApp link = {social.wa} />
              </span>
          </div>
      </section>
    </div>
  );
};

export default Footer;