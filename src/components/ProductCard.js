import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import formatRupiah from '../utils/formatRupiah';

const ProductCard1 = ({closeCard, product, openState}) => {
    return (
        <Dialog
            style={{borderStyle: 'double'}}
            open={openState}
            onClose={closeCard}
            PaperProps={{
                style: {
                  backgroundColor: 'transparent',
                  boxShadow: 'none'
                },
              }}
        >
            <div class="bg-opacity-0 antialiased text-gray-900" style={{display:"grid",placeItems:"center", height:'100%', borderStyle: 'double'}}>
                <div>
                    <img
                        src={product.image.asset.url}
                        class="object-cover object-center rounded-lg shadow-md"
                        // style = {{height:'60vh', objectFit: 'contain', margin: 'auto', minWidth: "50vw"}}
                    />
                    <div class="relative px-4 -mt-16  ">
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <div class="flex items-baseline">
                                { product.limitedslot ? (
                                    <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                        Limited Slot!
                                    </span>
                                ) : <div /> }                     
                            </div>
                            <h4 class="mt-1 text-xl font-semibold leading-tight truncate">{product.name}</h4>

                            <div class="mt-1 text-md text-gray-600">
                                {product.desc}
                            </div>
                            <h5 class="mt-1 text-xl font-semibold leading-tight truncate">{formatRupiah(product.price)}</h5>
                            <div class="mt-4">
                                <span class="text-lg text-gray-600 uppercase">{product.category.title}</span>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ProductCard1;