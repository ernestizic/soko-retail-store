import React from 'react';
import Searchbar from "../ui/Searchbar"
import Category from '../dashboard/Category'
import Main from '../dashboard/Main'
import Bag from '../dashboard/Bag'
import Footer from '../ui/Footer';

const IndexPage = () => {
    return ( 
        <React.Fragment>
            <Searchbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3" style={{borderRight: '1px solid grey'}}>
                        <Category />
                    </div>
                    <div className="col-md-6" style={{borderRight: '1px solid grey'}}>
                        <Main />
                    </div>
                    <div className="col-md-3">
                        <Bag />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
        
     );
}
 
export default IndexPage;