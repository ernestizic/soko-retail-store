import React from 'react';

const Searchbar = () => {
    return ( 
        <form className="search">
            <input 
                className='search-input'
                type='search'
                placeholder='Search for products...'
            />
            <button type='submit'><i className='fa fa-search'></i></button>
        </form>
     );
}
 
export default Searchbar;