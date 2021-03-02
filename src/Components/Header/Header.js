import React from 'react';
import CHeader from "./CHeader";
import '../styles.css'
import MHeader from "./MHeader";
function Header() {
        return (
            <div className='topheader topheaderres'>
                <CHeader/>
                <MHeader/>
            </div>
        );
}

export default Header;