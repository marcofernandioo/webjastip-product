import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 140,
    }
  }));

const ProductToolbar = ({parentCallback, categories}) => {
    const classes = useStyles();
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <div class="flex items-center">
            {/* Search Product */}
            <div class="flex-auto p-5 min-w-40">
                <div class="bg-white flex flex-1 items-center rounded-full shadow-xl">
                    <input 
                        class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
                        id="search" 
                        type="text" 
                        placeholder="Cari Produk"
                        value ={search}
                        onChange={e => {
                            setSearch(e.target.value);
                            parentCallback(e.target.value, selectedCategory); // Passing the search string data to the parent component
                        }}
                    />
                    <div class="p-4">
                        <button
                            class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
                            onClick = {() => {
                                setSearch("");
                                parentCallback("", selectedCategory); // Passing the search string data to the parent component
                            }}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-backspace" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z"></path>
                            <path d="M12 10l4 4m0 -4l-4 4"></path>
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Category Select */}
            <div class="flex-1">
                <FormControl variant="outlined" className={classes.formControl} >
                    <InputLabel htmlFor="demo-simple-select-label">Kategori</InputLabel>
                    <Select
                        value={selectedCategory}
                        onChange={e => {
                            setSelectedCategory(e.target.value);
                            parentCallback(search, e.target.value); // Passing the search string data and selected category to the parent component
                        }}
                        label="Kategori"
                    >
                        <option value={""}>Semua</option>
                        {
                            categories && categories.map(cat => (
                                <option value = {cat}>{cat}</option>
                            ))
                        }
                    </Select>
                </FormControl>
            </div>
            
        </div>
    );
};

export default ProductToolbar;