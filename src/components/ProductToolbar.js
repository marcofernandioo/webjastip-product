import React, { useEffect, useState } from 'react';

const ProductToolbar = ({parentCallback}) => {
    const [search, setSearch] = useState(null);

    return (
        <div class="fixed left-0 right-0 top-10">
            {/* Search Product */}
            <div class="p-8">
                <div class="bg-white flex items-center rounded-full shadow-xl">
                    <input 
                        class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
                        id="search" 
                        type="text" 
                        placeholder="Cari Produk"
                        value ={search}
                        onChange={e => {
                            setSearch(e.target.value);
                            parentCallback(e.target.value); // Passing the search string data to the parent component
                        }}
                    />
                    <div class="p-4">
                        <button
                            class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
                            onClick = {() => {
                                setSearch(null);
                                parentCallback(null);
                            }}
                        >
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductToolbar;