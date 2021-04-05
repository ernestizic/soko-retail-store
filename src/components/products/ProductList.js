import React, {useContext} from 'react';
import { ProductContext } from '../../contexts/ProductContext';

const ProductList = () => {
    const {products} = useContext(ProductContext)

    let list = products.length ? (
            products.map(product => (
                <div className="row product-row">
                    <div className="col-lg-2">
                        <img src={product.img} className="img-fluid" alt="product-img"/> 
                    </div>
                    <div className="col-lg-8">
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                    <div className="col-lg-2">
                        <button>+ Add</button>
                    </div>
                </div>
            ))
    ) : (
        <div>
            <p>No product available</p>
        </div>
    )

    return ( 
        <div className="container">
            {list}
        </div>
     );
}   

 
export default ProductList;