import React from 'react';
import './Header.css';

const Header = () => {
    return (
    <div className='header'> {/* lowercase to match CSS */}
        <div className="header-contents">
            <h2>Order Your Favourite Food</h2>
            <p>Choose from a diverse menu featuring a delictable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delecious meal at a time. </p>
            <button>View Menu</button>        
        </div>
    </div>
  )
}
export default Header;