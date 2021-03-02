import React, {Component} from 'react';
import CFooter from "./CFooter";
import MFooter from "./MFooter";
class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const login=this.props.login;
            return (
                <div className="botfooter">
                    <MFooter/>
                    <CFooter whatpage={login}/>
                </div>
            );
        }
}

export default Footer;