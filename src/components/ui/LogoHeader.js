import React from 'react';

const LogoHeader = () => {
    return ( 
       <nav className="logo-nav">
         <div className="logo">
          <h4 style={{color: 'black'}}>Target</h4>
          <p>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</p>
         </div>
         <div className="bag-account">
            <ul>
              <li><i className="fa fa-shopping-bag" style={{paddingRight: '10px'}}></i>  Bag</li>
              <li><i className="fas fa-user-alt" style={{paddingRight: '10px'}}></i>  Account</li>
            </ul>
         </div>
       </nav>
     );
}
 
export default LogoHeader;