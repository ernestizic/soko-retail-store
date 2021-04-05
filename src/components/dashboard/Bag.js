import React from 'react';

const Bag = () => {
    return ( 
        <div className="bag">
            <h5 style={{paddingBottom: '12px'}}>Bag <span className="badge rounded-pill bg-primary">0</span></h5>
            <p style={{textAlign: 'center', fontSize: '100px'}}> <i className="far fa-frown-open"></i> </p>
            <h5 style={{textAlign: 'center'}}>It's empty here</h5>
            <p style={{textAlign: 'center'}}>Start shopping to add items to your bag</p>
        </div>
     );
}
 
export default Bag;