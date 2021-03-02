import React from 'react';
import '../styles.css'
import {Link} from "react-router-dom";
function MHeader () {
        return (
            <div style={{width:"150px"}} className="resmenu" >
                <button className='reslink'>
                    <i className='fa fa-list fa-2x'/>
                </button>
                    <div className='resmenulist'>
                        <ul>
                            <li><i className='fa fa-home fa-2x deselected'/><Link to="/" style={{color:"#fff"}}> خانه</Link></li>
                            <hr/>
                            <li><i className='fa fa-list deselected'/> دسته بندی</li>
                            <hr/>
                            <li><i className='fa fa-info-circle deselected'/> دسته بندی</li>
                        </ul>
                    </div>
            </div>
        );
}

export default MHeader;