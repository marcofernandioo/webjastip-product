import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const ProductToolbar = ({parentCallback, categories}) => {
    const classes = useStyles();
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

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
                            parentCallback(e.target.value, selectedCategory); // Passing the search string data to the parent component
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
            {/* Category Select */}
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                <Select
                    native
                    value={selectedCategory}
                    onChange={e => {
                        setSelectedCategory(e.target.value);
                        parentCallback(search, e.target.value); // Passing the search string data and selected category to the parent component
                    }}
                    label="Kategori"
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value={""}>Semua</option>
                    {
                        categories && categories.map(cat => (
                            <option value = {cat}>{cat}</option>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    );
};

export default ProductToolbar;