import React from 'react';
import ProductContextProvider from '../../contexts/ProductContext';
import ProductList from '../products/ProductList';

const Main = () => {
    return ( 
        <div className="main">
            <h5 style={{paddingBottom: '12px'}}>Electronics <span className="badge rounded-pill bg-primary">12</span></h5>
            <ProductContextProvider>
                <ProductList />
            </ProductContextProvider>  
        </div>
     );
}
 
export default Main;