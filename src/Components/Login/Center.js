import React, {Component} from 'react';
import Clothes from '../media/clothes vector.png';
import '../styles.css';
class Center extends Component {
    render() {
        return (
            <div className='center'>
                <img className='clothes' src={Clothes} alt='special clothes'/>
            </div>
        );
    }
}

export default Center;