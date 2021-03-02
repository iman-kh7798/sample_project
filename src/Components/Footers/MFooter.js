import React, {Component} from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
class MFooter extends Component {
    render() {
        return (
            <div style={{width:'30%'}} className="mfooter">
                <div className="txtCenter">
                    <a style={{color:"#a12327"}}><i className='fa fa-info-circle deselected' style={{display:"block"}}/><p>درباره ما</p></a>
                </div>
                <div className="txtCenter">
                    <a style={{color:"#a12327"}}><i className='fa fa-list deselected' style={{display:"block"}}/><p>دسته بندی</p></a>
                </div>
                <div className="txtCenter">
                    <a style={{color:"#a12327"}}><Link to="/" style={{color:"#a12327"}}><i className='fa fa-home fa-2x' style={{display:"block"}}/><p className="selected">خانه</p></Link></a>
                    <hr className="hrstyle"/>
                </div>
                    <Switch>
                        <Route path="/">
                        </Route>
                    </Switch>
            </div>
        );
    }
}

export default MFooter;