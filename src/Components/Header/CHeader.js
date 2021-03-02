import React from 'react';
import '../styles.css'
import TopShape from "../media/topshape.svg";
import Logo from "../media/logo.png";
function CHeader () {
        return (
            <>
                    <img style={{position:"relative",height:"148px"}} src={TopShape} alt='top_shape'/>
                    <img style={{position:"absolute",width:"87px",top:"33%"}} src={Logo} alt='logo'/>
                    <h3 className='uppertext' >V Clothes</h3>
            </>
        );
}

export default CHeader;